//gruntfile.js
const puppeteer = require('puppeteer');

const pdfConfig = {
    src: "file://" + __dirname + "/dist/Luis Float CV ($lang).html",
    dist: "dist/Luis Float CV ($lang).pdf",
};

var config = {
    langs: [ "en-us", "pt-br" ],
    src: 'src/main/**/*.pug',
    dist: 'dist/Luis Float CV ($lang).html',
};

const vlang = (prop, lang) => prop.replaceAll("$lang", lang);

async function renderPdf() {
    let done = this.async();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(vlang(pdfConfig.src, "en-us"), {
        waitUntil: 'networkidle2',
    });
    await page.pdf({ path: vlang(pdfConfig.dist, "en-us"), format: "a4" });

    await browser.close();

    done();
}

function renderHtml() {
    const pugConfig = {};

    for(let lang of config.langs) {
        const files = {};
        files[vlang(config.dist, lang)] = [ 'src/main/index.pug' ];

        pugConfig[lang] = {
            options: {
                data: (dest, src) => require(`./src/main/content/${lang}.js`),
            },
            files,
        };
    }

    return pugConfig;
}

module.exports = function(grunt) {
    grunt.initConfig({
        pug: renderHtml(),
        stylus: {
            compile: {
                options: {
                    paths: [ '' ],
                    relativeDest: '',
                    "include css": true,
                },
                files: {
                    'dist/style.css': [ 'src/main/index.styl' ],
                },
            },
        },
        watch: {
            scripts: {
                files: [ config.src, 'src/main/**/*.styl' ],
                tasks: [ 'main:compile:pug', 'main:compile:styl' ],
                options: {
                    spawn: false,
                },
            },
        },
    });
  
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
  
    grunt.registerTask('dev', [ 'watch' ]);
    grunt.registerTask('main:compile:pug', [ 'pug' ]);
    grunt.registerTask('main:compile:styl', [ 'stylus' ]);

    grunt.registerTask('main:build', 'Render PDF', renderPdf);
};