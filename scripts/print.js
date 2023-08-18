import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";
import * as vite from "vite";
import config from "./script.config.js";

const vlang = (prop, lang) => prop.replaceAll("{lang}", lang);

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

export async function buildAndPrintPdfs() {
    await vite.preview();
    await printPdfs(config.pdf);
    process.exit(0);
}

buildAndPrintPdfs();
