//gruntfile.js
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

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
        dist: 'dist/assets/style.css',
    },
    pdf: {
        src: "file://" + __dirname + "/dist/Luis Float CV ($lang).html",
        dist: "dist/bin/Luis Float CV ($lang).pdf",
    },
    img: {
        cwd: 'src/main/assets/brand/',
        src: '**/*.png',
        dist: 'dist/',
    },
};

const vlang = (prop, lang) => prop.replaceAll("$lang", lang);

function renderHtml() {
    const langConfig = (lang) => ({
        options: {
            data: (dest, src) => require(vlang(config.content, lang))
        },
        files: {
            [vlang(config.html.dist, lang)]: [ config.html.srcIndex ],
        },
    });
    return config.langs.reduce(
        (obj, lang) => ({ ...obj, [lang]: langConfig(lang)}),
        {}
    );
}

function renderCss() {
    return {
        compile: {
            options: {
                paths: [ '' ],
                relativeDest: '',
                "include css": true,
            },
            files: {
                [config.css.dist]: [ config.css.srcIndex ],
            },
        },
    };
}

function copyImg() {
    return {
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
    };
}

async function printPdf() {
    let done = this.async();
    fs.mkdirSync(path.dirname(config.pdf.dist), { recursive: true });

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

const watchConfig = (file, task) => { return {
    files: [ file ],
    tasks: [ task ],
    options: {
        spawn: false,
    },
}}; 

module.exports = function(grunt) {
    grunt.initConfig({
        pug: renderHtml(),
        stylus: renderCss(),
        copy: copyImg(),
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
  
    grunt.registerTask('main:dev', [ 'watch' ]);
    grunt.registerTask('main:compile:pug', [ 'pug' ]);
    grunt.registerTask('main:compile:styl', [ 'stylus' ]);
    grunt.registerTask('main:copy:img', [ 'copy' ]);

    grunt.registerTask('main:print:pdf', 'Print PDF from HTMLs', printPdf);
};