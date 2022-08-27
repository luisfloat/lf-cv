//gruntfile.js
const puppeteer = require('puppeteer');

var config = {
    langs: [ "en-us", "pt-br" ],
    content: "./src/main/content/$lang.js",
    html: {
        srcIndex: 'src/main/index.pug',
        src: 'src/main/**/*.pug',
        dist: 'dist/Luis Float CV ($lang).html',
    },
    css: {
        src: 'src/main/**/*.styl',
        srcIndex: 'src/main/index.styl',
        dist: 'dist/style.css',
    },
    pdf: {
        src: "file://" + __dirname + "/dist/Luis Float CV ($lang).html",
        dist: "dist/Luis Float CV ($lang).pdf",
    },
    img: {
        cwd: 'src/main/assets/brand/',
        src: '**/*.png',
        dist: 'dist/',
    },
};

const vlang = (prop, lang) => prop.replaceAll("$lang", lang);

async function renderPdf() {
    let done = this.async();

    for(let lang of config.langs) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(vlang(config.pdf.src, lang), {
            waitUntil: 'networkidle2',
        });
        await page.pdf({ path: vlang(config.pdf.dist, lang), format: "a4" });

        await browser.close();
    }

    done();
}

function renderHtml() {
    const pugConfig = {};

    for(let lang of config.langs) {
        const files = {};
        files[vlang(config.html.dist, lang)] = [ config.html.srcIndex ];

        pugConfig[lang] = {
            options: {
                data: (dest, src) => require(vlang(config.content, lang))
            },
            files,
        };
    }

    return pugConfig;
}

const watchConfig = (file, task) => { return {
    files: [ file ],
    tasks: [ task ],
    options: {
        spawn: false,
    },
}}; 

module.exports = function(grunt) {
    const cssDistFiles = {};
    cssDistFiles[config.css.dist] = [ config.css.srcIndex ];

    grunt.initConfig({
        pug: renderHtml(),
        stylus: {
            compile: {
                options: {
                    paths: [ '' ],
                    relativeDest: '',
                    "include css": true,
                },
                files: cssDistFiles,
            },
        },
        copy: {
            img: {
                files: [
                    {
                        expand: true,
                        cwd: config.img.cwd,
                        src: [ config.img.src ],
                        dest: config.img.dist,
                    },
                ],
            },
        },
        watch: {
            html: watchConfig(config.html.src, 'main:compile:pug'),
            css: watchConfig(config.css.src, 'main:compile:styl'),
            img: watchConfig(config.img.src, 'main:copy:img'),
        },
    });
  
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-copy');
  
    grunt.registerTask('dev', [ 'watch' ]);
    grunt.registerTask('main:compile:pug', [ 'pug' ]);
    grunt.registerTask('main:compile:styl', [ 'stylus' ]);
    grunt.registerTask('main:copy:img', [ 'copy' ]);

    grunt.registerTask('main:build', 'Render PDF', renderPdf);
};