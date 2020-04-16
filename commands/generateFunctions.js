const fs = require('fs');
const path = require("path");
const sampleComponent = require('../generateSample/component/sampleComponent');
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
            fs.writeFileSync(`${cwd}/${dir}` + `/${file_name}.ts`, `${sampleComponent.toString()}`);
          }
        });
      } else if (fs.existsSync(dir)) {
        fs.writeFileSync(`${cwd}/${dir}` + `/${file_name}.ts`, `${sampleComponent.toString()}`);

      }





    } else {
      // console.log('no need to create folder');
      // fs.writeFileSync(cwd + `/${file_name}.ts`, `${sampleComponent.toString()}`);
      console.log(`${JSON.stringify(sampleComponent)}`) //JSON.stringify(userDate)
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