const fs = require('fs');
const path = require('path');
const { stringHelper } = require('../helper');

let sampleTemplatePath = path.join(__dirname, "../sampleFile/test.js");
let replaceWordPath = path.join(__dirname, "../replace/home.txt");
let originalContent = fs.readFileSync(sampleTemplatePath, "utf8");
let replaceWords = fs.readFileSync(replaceWordPath, "utf8");
let fileName = process.argv[3];

function generateAuto() {
    originalContent = stringHelper.strSplitAndReplace(replaceWords,originalContent)

    fs.writeFileSync(`${process.cwd()}/${fileName}.js`, originalContent);
    console.log('Created successfuly'.green);
}

module.exports = {
    generateAuto
};