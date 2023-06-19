//gruntfile.js
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const vite = require('vite');

var config = {
    content: {
        langs: [ "en-us", "pt-br" ],
    },
    pdf: {
        src: "http://localhost:4173/$lang",
        dist: "dist/print/Luis (Float) Emidio CV - $lang.pdf",
    },
};

const vlang = (prop, lang) => prop.replaceAll("$lang", lang);

async function printPdfs(pdfConfig) {
    fs.mkdirSync(path.dirname(pdfConfig.dist), { recursive: true });

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    for(let lang of config.content.langs) {
        await page.goto(vlang(pdfConfig.src, lang), {
            waitUntil: 'networkidle2',
        });
        await page.pdf({ path: vlang(pdfConfig.dist, lang), format: "a4" });
    }

    await browser.close();
}

async function buildAndPrintPdfs() {
    let done = this.async();
    
    await vite.build();
    await vite.preview();
    await printPdfs(config.pdf);
    
    done();
}

function clean() {
    const distPath = path.dirname(config.html.dist);
    fs.rmSync(distPath, { recursive: true, force: true });
}

module.exports = function(grunt) {
    grunt.registerTask('main:clean', 'Clean dist folder', clean);
    grunt.registerTask('main:print:pdf', 'Print PDF from HTMLs', buildAndPrintPdfs);
};