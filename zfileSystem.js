const fs = require('fs');
const path = require('path');
const componentRegExp = /YourComponentName/g;

const dirnames = {
  sync: 'createDir',
  async: 'asyncCreateDir'
};

fs.mkdirSync(dirnames.sync,0o777);


const cwd = process.cwd();
const filePath = path.join(cwd,'/generateSample/component/sample.component');

const originalContent = fs.readFileSync(filePath, "utf8");

const replacedContent = originalContent.replace(componentRegExp, "Gnenerated-File name");

fs.writeFileSync(`${dirnames.sync}/zfile.js`,replacedContent);