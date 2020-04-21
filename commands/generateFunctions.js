const fs = require('fs');
const path = require('path');
const colors = require('colors');
const sampleComponent = require('../generateSample/component/sampleComponent');
const componentPath = path.join(__dirname, '../generateSample/component');
const templatePath = path.join(__dirname, '../generateSample/template');
const formComponent = path.join(__dirname, '../generateSample/formComponent');

const componentRegExp = /YourComponentName/g;
const templateRegExp = /YourTemplateName/g;
colors.enable();

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
            console.log('Created successfuly'.green);
          }
        });
      } else if (fs.existsSync(dir)) {
        // replace content
        const replacedContent = originalContent.replace(componentRegExp, `${fileName}`);
        fs.writeFileSync(`${cwd}/${file_name}.js`, replacedContent);
        console.log('Created successfuly'.green);

      }
    } else {
      // replace content
      const replacedContent = originalContent.replace(componentRegExp, `${file_name}`);
      fs.writeFileSync(`${cwd}/${file_name}.js`, replacedContent);
      console.log('Created successfuly'.green);
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
            console.log('Created successfuly'.green);
          }
        });
      } else if (fs.existsSync(dir)) {
        // replace content
        const replacedContent = originalContent.replace(templateRegExp, `${fileName}`);
        fs.writeFileSync(`${cwd}/${file_name}.html`, replacedContent);
        console.log('Created successfuly'.green);

      }
    } else {
      // replace content
      const replacedContent = originalContent.replace(templateRegExp, `${file_name}`);
      fs.writeFileSync(`${cwd}/${file_name}.html`, replacedContent);
      console.log('Created successfuly'.green);
    }
  },
  genFormComponent() {
    const cwd = process.cwd(); // find current working directory 
    const thirdprocess = process.argv; // find name of component
    console.log(cwd);
    fileNamewithPath = process.argv[3];
    console.log('file name ->', fileNamewithPath);
    console.log('form property ->', thirdprocess.slice(4, thirdprocess.length));

    //Path 
    const sampleComponentPath = path.join(formComponent, "/sampleComponent.component");
    const sampleStylePath = path.join(formComponent, "/sampleStyle.style");
    const sampleTemplatePath = path.join(formComponent, "/sampleTemplate.template");
    const sampleTestPath = path.join(formComponent, "/sampleTest.test");

    //Original Content
    const originalContentComponent = fs.readFileSync(sampleComponentPath, "utf8");
    const originalContentStyle = fs.readFileSync(sampleStylePath, "utf8");
    const originalContentTemplate = fs.readFileSync(sampleTemplatePath, "utf8");
    const originalContentTest = fs.readFileSync(sampleTestPath, "utf8");

    if (fileNamewithPath.includes("/")) {
      console.log('need to create folder');
      var d = fileNamewithPath.split("/")
      var folder_name_prefix = d.slice(0, d.length - 1);
      var dir = folder_name_prefix.join('/');
      var fileName = d[d.length - 1];

      // folder create success
      if (!fs.existsSync(dir)) {
        fs.mkdir(`${cwd}/${fileNamewithPath}/${dir}`, { recursive: true }, (error) => {
          if (error) {
            console.error(error);
          } else {
            // replace content
            // const replacedContent = originalContent.replace(templateRegExp, `${fileName}`);

            fs.writeFileSync(`${cwd}/${fileNamewithPath}/${fileNamewithPath}.ts`, originalContentComponent);
            fs.writeFileSync(`${cwd}/${fileNamewithPath}/${fileNamewithPath}.css`, originalContentStyle);
            fs.writeFileSync(`${cwd}/${fileNamewithPath}/${fileNamewithPath}.html`, originalContentTemplate);
            fs.writeFileSync(`${cwd}/${fileNamewithPath}/${fileNamewithPath}.test.ts`, originalContentTest);

            console.log('Created successfuly'.green);
          }
        });
      } else if (fs.existsSync(dir)) {
        // replace content
        fs.writeFileSync(`${cwd}/${fileNamewithPath}/${fileNamewithPath}.ts`, originalContentComponent);
        fs.writeFileSync(`${cwd}/${fileNamewithPath}/${fileNamewithPath}.css`, originalContentStyle);
        fs.writeFileSync(`${cwd}/${fileNamewithPath}/${fileNamewithPath}.html`, originalContentTemplate);
        fs.writeFileSync(`${cwd}/${fileNamewithPath}/${fileNamewithPath}.test.ts`, originalContentTest);

        console.log('Created successfuly'.green);

      }
    } else {
      // replace content
        fs.writeFileSync(`${cwd}/${fileNamewithPath}/${fileNamewithPath}.ts`, originalContentComponent);
        fs.writeFileSync(`${cwd}/${fileNamewithPath}/${fileNamewithPath}.css`, originalContentStyle);
        fs.writeFileSync(`${cwd}/${fileNamewithPath}/${fileNamewithPath}.html`, originalContentTemplate);
        fs.writeFileSync(`${cwd}/${fileNamewithPath}/${fileNamewithPath}.test.ts`, originalContentTest);

        console.log('Created successfuly'.green);
    }


  }
}
module.exports = generateFunctions;