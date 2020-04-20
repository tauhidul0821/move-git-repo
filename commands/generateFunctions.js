const fs = require('fs');
const path = require("path");
const sampleComponent = require('../generateSample/component/sampleComponent');
const componentPath = path.join(__dirname, '../generateSample/component');
const componentRegExp = /YourComponentName/g;
// const sampletemplate = require('../generateSample/template/sampleTemplate.js');

const generateFunctions = {
  genComponent() {
    const cwd = process.cwd();
    const file_name = process.argv[3];
    // console.log('generate component at ', cwd);
    /* 

    jodi file name er age / [slash ] thake then cwd er sathe location concat hobe 

    ex: bs g c components/name_of_component
    1. if not exits components folder, create components folder
    2. if exits components folder then create file inside components folder

    */

    if (file_name.includes("/")) {
      console.log('user need create folder ');
      var d = file_name.split("/")
      var folder_name_prefix = d.slice(0, d.length - 1);
      var dir = folder_name_prefix.join('/');
      console.log('create_folder ->', dir);
      var fileName = d[d.length - 1];
      console.log('fileName -> ', fileName);

      // folder create success
      if (!fs.existsSync(dir)) {
        fs.mkdir(`${cwd}/${dir}`, { recursive: true }, (error) => {
          if (error) {
            console.error(error);
          } else {
            const sampleComponentPath = path.join(componentPath, "/sample.component");
            const originalContent = fs.readFileSync(sampleComponentPath, "utf8");
            // replace content
            const replacedContent = originalContent.replace(componentRegExp, `${fileName}`);
            fs.writeFileSync(`${cwd}/${file_name}.js`, replacedContent);
          }
        });
      } else if (fs.existsSync(dir)) {
        const sampleComponentPath = path.join(componentPath, "/sample.component");
        const originalContent = fs.readFileSync(sampleComponentPath, "utf8");
        // replace content
        const replacedContent = originalContent.replace(componentRegExp, `${fileName}`);
        fs.writeFileSync(`${cwd}/${file_name}.js`, replacedContent);

      }
    } else {
      const sampleComponentPath = path.join(componentPath, "/sample.component");
      const originalContent = fs.readFileSync(sampleComponentPath, "utf8");
      // replace content
      const replacedContent = originalContent.replace(componentRegExp, `${file_name}`);
      fs.writeFileSync(`${cwd}/${file_name}.js`, replacedContent);
    }
  },
  genTemplate() {
    const cwd = process.cwd();
    const file_name = process.argv[3];
    console.log('generate component at ', cwd);
    /* 

    jodi file name er age / [slash ] thake then cwd er sathe location concat hobe 

    ex: bs g c components/name_of_component
    1. if not exits components folder, create components folder
    2. if exits components folder then create file inside components folder

    */
    const templatefile = path.join(templatePath, '/templateFile.template');
    fs.writeFileSync(cwd + `/${file_name}.html`, templatefile);

    console.log('file name and location', file_name)
  }
}
module.exports = generateFunctions;