//gruntfile.js
const puppeteer = require('puppeteer');

const pdfConfig = {
    src: "file://" + __dirname + "/dist/index.html",
    dist: "dist/Luis Float (en-us).pdf",
};

var config = {
    src: 'src/main/**/*.pug',
    dist: 'dist/index.html',
};

const content = require("./src/main/content/en-us.js");

async function renderPdf() {
    let done = this.async();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(pdfConfig.src, {
        waitUntil: 'networkidle2',
    });
    await page.pdf({ path: pdfConfig.dist, format: "a4" });

    await browser.close();

    done();
}

module.exports = function(grunt) {
    grunt.initConfig({
        pug: {
            compile: {
                options: {
                    data: function(dest, src) {
                        return content;
                    },
                },
                files: {
                    'dist/index.html': [ 'src/main/index.pug' ],
                },
            },
        },
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
                tasks: [ 'main:pug:compile', 'main:styl:compile' ],
                options: {
                    spawn: false,
                },
            },
        },
    });
  
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
  
    grunt.registerTask('default', [ 'watch' ]);
    grunt.registerTask('main:pug:compile', [ 'pug' ]);
    grunt.registerTask('main:styl:compile', [ 'stylus' ]);
    grunt.registerTask('main:watch', [ 'watch' ]);

    grunt.registerTask('main:build', 'Render PDF', renderPdf);
};