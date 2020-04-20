const fs = require('fs');
const path = require("path");
const sampleComponent = require('../generateSample/component/sampleComponent');
const componentPath = path.join(__dirname, '../generateSample/component');
const templatePath = path.join(__dirname, '../generateSample/template');
const componentRegExp = /YourComponentName/g;
const templateRegExp = /YourTemplateName/g;

const generateFunctions = {
  genComponent() {
    const cwd = process.cwd();
    const file_name = process.argv[3];
    const sampleComponentPath = path.join(componentPath, "/sample.component");
    const originalContent = fs.readFileSync(sampleComponentPath, "utf8");

    /* 
    jodi file name er age / [slash ] thake then cwd er sathe location concat hobe 
    ex: bs g c components/name_of_component
    1. if not exits components folder, create components folder
    2. if exits components folder then create file inside components folder
    */

    if (file_name.includes("/")) {
      var d = file_name.split("/")
      var folder_name_prefix = d.slice(0, d.length - 1);
      var dir = folder_name_prefix.join('/');
      var fileName = d[d.length - 1];

      // folder create success
      if (!fs.existsSync(dir)) {
        fs.mkdir(`${cwd}/${dir}`, { recursive: true }, (error) => {
          if (error) {
            console.error(error);
          } else {
            // replace content
            const replacedContent = originalContent.replace(componentRegExp, `${fileName}`);
            fs.writeFileSync(`${cwd}/${file_name}.js`, replacedContent);
            console.log('Created successfuly');
          }
        });
      } else if (fs.existsSync(dir)) {
        // replace content
        const replacedContent = originalContent.replace(componentRegExp, `${fileName}`);
        fs.writeFileSync(`${cwd}/${file_name}.js`, replacedContent);
        console.log('Created successfuly');

      }
    } else {
      // replace content
      const replacedContent = originalContent.replace(componentRegExp, `${file_name}`);
      fs.writeFileSync(`${cwd}/${file_name}.js`, replacedContent);
      console.log('Created successfuly');
    }
  },
  genTemplate() {
    const cwd = process.cwd(); // find current working directory 
    const file_name = process.argv[3]; // find name of component

    const sampleTemplatePath = path.join(templatePath, "/sampleTemplateFile.template");
    const originalContent = fs.readFileSync(sampleTemplatePath, "utf8");

    if (file_name.includes("/")) {
      var d = file_name.split("/")
      var folder_name_prefix = d.slice(0, d.length - 1);
      var dir = folder_name_prefix.join('/');
      var fileName = d[d.length - 1];

      // folder create success
      if (!fs.existsSync(dir)) {
        fs.mkdir(`${cwd}/${dir}`, { recursive: true }, (error) => {
          if (error) {
            console.error(error);
          } else {
            // replace content
            const replacedContent = originalContent.replace(templateRegExp, `${fileName}`);
            fs.writeFileSync(`${cwd}/${file_name}.html`, replacedContent);
            console.log('Created successfuly');
          }
        });
      } else if (fs.existsSync(dir)) {
        // replace content
        const replacedContent = originalContent.replace(templateRegExp, `${fileName}`);
        fs.writeFileSync(`${cwd}/${file_name}.html`, replacedContent);
        console.log('Created successfuly');

      }
    } else {
      // replace content
      const replacedContent = originalContent.replace(templateRegExp, `${file_name}`);
      fs.writeFileSync(`${cwd}/${file_name}.html`, replacedContent);
      console.log('Created successfuly');
    }
  },
  genFormComponent() {
    const cwd = process.cwd(); // find current working directory 
    const thirdprocess = process.argv; // find name of component
    console.log(cwd);
    console.log(thirdprocess);

    /**
     * 
     * 
     * 
    const sampleTemplatePath = path.join(templatePath, "/sampleTemplateFile.template");
    const originalContent = fs.readFileSync(sampleTemplatePath, "utf8");

    if (file_name.includes("/")) {
      var d = file_name.split("/")
      var folder_name_prefix = d.slice(0, d.length - 1);
      var dir = folder_name_prefix.join('/');
      var fileName = d[d.length - 1];

      // folder create success
      if (!fs.existsSync(dir)) {
        fs.mkdir(`${cwd}/${dir}`, { recursive: true }, (error) => {
          if (error) {
            console.error(error);
          } else {
            // replace content
            const replacedContent = originalContent.replace(templateRegExp, `${fileName}`);
            fs.writeFileSync(`${cwd}/${file_name}.html`, replacedContent);
            console.log('Created successfuly');
          }
        });
      } else if (fs.existsSync(dir)) {
        // replace content
        const replacedContent = originalContent.replace(templateRegExp, `${fileName}`);
        fs.writeFileSync(`${cwd}/${file_name}.html`, replacedContent);
        console.log('Created successfuly');

      }
    } else {
      // replace content
      const replacedContent = originalContent.replace(templateRegExp, `${file_name}`);
      fs.writeFileSync(`${cwd}/${file_name}.html`, replacedContent);
      console.log('Created successfuly');
    }
    
     */
  }
}
module.exports = generateFunctions;