const fs = require('fs');
const path = require('path');
const colors = require('colors');


const sampleTemplatePath = path.join(__dirname, "../sampleFile/git/dotGitIgnore");
const originalContent = fs.readFileSync(sampleTemplatePath, "utf8");

function generateAuto() {
   fs.writeFileSync(`${process.cwd()}/zzzz.auto`, originalContent);
   console.log('Created successfuly'.green);
}

module.exports = {
    generateAuto
};