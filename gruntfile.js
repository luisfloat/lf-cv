//gruntfile.js
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const pugApi = require('pug');

var config = {
    langs: [ "en-us", "pt-br" ],
    content: {
        template: "./src/main/content/$lang.js",
        src: 'src/main/content/*.js',
    },
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
        cwd: 'src/main/assets/img/',
        src: '**/*.png',
        dist: 'dist/assets/img/',
    },
};

const vlang = (prop, lang) => prop.replaceAll("$lang", lang);

function renderHtml() {
    config.langs.forEach((lang) => {
        const pugDistPath = vlang(config.html.dist, lang);

        const compilePug = pugApi.compileFile(config.html.srcIndex);
        const langContentJs = fs.readFileSync(vlang(config.content.template, lang)) + "";
        
        let langContent;
        try {
            langContent = eval(langContentJs);
        } catch (e) {
            console.log(e);
        }

        fs.writeFileSync(pugDistPath, compilePug({ ...langContent }));
    });
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
        livereload: true,
    },
}}; 

module.exports = function(grunt) {
    grunt.initConfig({
        stylus: renderCss(),
        copy: copyImg(),
        watch: {
            html: watchConfig(config.html.src, 'main:compile:html'),
            css: watchConfig(config.css.src, 'stylus'),
            img: watchConfig(config.img.src, 'copy'),
            content: watchConfig(config.content.src, 'main:compile:html'),
        },
    });
  
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('main:compile:html', 'Compile Pug to HTMLs', renderHtml);
  
    grunt.registerTask('main:dev', [ 'watch' ]);
    grunt.registerTask('main:build', [ 'main:compile:html', 'stylus', 'copy' ]);

    grunt.registerTask('main:print:pdf', 'Print PDF from HTMLs', printPdf);
};