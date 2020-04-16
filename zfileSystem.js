const fs = require('fs');
const path = require('path');

const dirnames = {
  sync: 'createDir',
  async: 'asyncCreateDir'
};

fs.mkdirSync(dirnames.sync,0o777);


const cwd = process.cwd();
const filePath = path.join(cwd,'/generateSample/component/sample.component');

const originalContent = fs.readFileSync(filePath, "utf8");

fs.writeFileSync(`${dirnames.sync}/zfile.js`,`${originalContent.toString()}`);