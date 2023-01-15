# lf-cv

It's the curriculum generator for my personal curricula.

## Features

* 🌎 **International** - Support multiple languages, currently English and Brazilian Portuguese;
* 🌐 **Webpage support** - Generate HTML and assets for browser view;
* 🔄 **Live-reload** - Automatically refresh web browser view on changes.

## Technologies

* **JavaScript** for task scripts;
* **TS(X)** for configuring content and UI scripts;
* **Vue3** as web UI framework;
* **Vue Router** for SPA routing;
* **Stylus** as CSS preprocessor;
* **Vite** for dev server, building and previewing;
* **Grunt** as task runner;
* **Puppeteer** for PDF printing.

## Installation

```bash
git clone https://github.com/luisfloat/cv.git &&
cd cv/ &&
npm install
```

## Usage

Name | Script | Description
-----|---------|-----------------
`main:dev` | ```npm run main:dev``` | Enable source code watch and live-reload
`main:build` | ```npm run main:build``` | Build website into `dist/web/`
`main:clean` | ```npm run main:clean``` | Delete `dist/`
`main:print:pdf` | ```npm run main:print:pdf``` | Build website and print PDFs to `dist/print/`

## Author

<a href="https://twitter.com/luisfloat"><img src="https://img.shields.io/badge/-Twitter-333333?style=flat-square&amp;logo=twitter" alt="Twitter"/></a> <a href="https://github.com/luisfloat"><img src="https://img.shields.io/badge/-GitHub-333333?style=flat-square&amp;logo=github" alt="GitHub"/></a> <a href="https://instagram.com/luisfloat"><img src="https://img.shields.io/badge/-Instagram-333333?style=flat-square&amp;logo=instagram" alt="Instagram"/></a> <a href="mailto:contact@luisfloat.com"><img src="https://img.shields.io/badge/-Gmail-333333?style=flat-square&amp;logo=gmail" alt="Gmail"/></a>
