const fs = require('fs');
const path = require('path');
const sampleComponentPath = path.join(__dirname, './generateSample/component');
const componentRegExp = /YourComponentName/g;

const dirnames = {
  sync: 'createDir',
  async: 'asyncCreateDir'
};

fs.mkdirSync(dirnames.sync,0o777);



const gitignoreTemplatePath = path.join(sampleComponentPath, "/sample.component");
const originalContent = fs.readFileSync(gitignoreTemplatePath,"utf8");

// const cwd = process.cwd();
// const filePath = path.join(cwd,'/generateSample/component/sample.component');

// const originalContent = fs.readFileSync(filePath, "utf8");

const replacedContent = originalContent.replace(componentRegExp, "sumon");

fs.writeFileSync(`${dirnames.sync}/zfile.js`,replacedContent);