import path from "path";
import fs from "fs";
import config from "./script.config.js";

function clean() {
    const distPath = path.dirname(config.pdf.dist || "./dest/");
    fs.rmSync(distPath, { recursive: true, force: true });
}

clean();