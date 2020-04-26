const fs = require('fs');
const path = require('path');
const colors = require('colors');
const { stringHelper } = require('../helper/stringHelper');
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
    const formProperty = thirdprocess.slice(4, thirdprocess.length);
    console.log('form formProperty ->', formProperty);

    // generateFormComponentHtml(fileNamewithPath,formProperty);


    const CreateFiles = fs.createWriteStream(`${cwd}/ ${fileNamewithPath}.html`, {
      flags: 'a'
    })

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
      generateFormComponentHtml(fileNamewithPath, formProperty);
      generateFormComponent(fileNamewithPath, formProperty);
      console.log('Created successfuly'.green);

    }

  }
}
module.exports = generateFunctions;


function generateFormComponentHtml(pathwithFileName, formProperty) {
  const templateRegExp = /property_ame/g;
  const componentRegExp = /component_name/g

  const CreateFiles = fs.createWriteStream(`${process.cwd()}/ ${pathwithFileName}.html`, {
    flags: 'a'
  })

  const file1Path = path.join(__dirname, '../generateSample/formComponent/propertyReplace/first_propertyReplace');
  const file2Path = path.join(__dirname, '../generateSample/formComponent/propertyReplace/middle_propertyReplace');
  const file3Path = path.join(__dirname, '../generateSample/formComponent/propertyReplace/end_propertyReplace');


  const originalContex1 = fs.readFileSync(file1Path, "utf8");
  const originalContex2 = fs.readFileSync(file2Path, "utf8");
  const originalContex3 = fs.readFileSync(file3Path, "utf8");



  const replacedContent = originalContex1.replace(componentRegExp, pathwithFileName);

  CreateFiles.write(`${replacedContent}` + '\r\n')

  formProperty.forEach(ele => {
    const replacedContent = originalContex2.replace(templateRegExp, ele);
    CreateFiles.write(`${replacedContent}` + '\r\n')
  });

  CreateFiles.write(`${originalContex3}` + '\r\n');

};

/**
 * 1. direcory manage 
 * 2. class name capital later er hote hobe 
 * 3. 
 */

function generateFormComponent(pathwithFileName, formProperty) {

  const CreateFiles = fs.createWriteStream(`${process.cwd()}/ ${pathwithFileName}.ts`, {
    flags: 'a'
  })

  const componentRegExp = /component_name/g;
  const propertyRegExp = /property_name/g;

  const first_property = path.join(__dirname, '../generateSample/formComponent/componentReplace/first_property.component');
  const second_property = path.join(__dirname, '../generateSample/formComponent/componentReplace/second_property.component');
  const third_property = path.join(__dirname, '../generateSample/formComponent/componentReplace/third_property.component');

  const originalContex1 = fs.readFileSync(first_property, "utf8");
  const originalContex2 = fs.readFileSync(second_property, "utf8");
  const originalContex3 = fs.readFileSync(third_property, "utf8");


  let className = pathwithFileName.replace(/[-_]/g, "class_name");
  className = stringHelper.firstCharToUpperCase(className);
  console.log(className.red);


  const replacedContent = originalContex1.replace(componentRegExp, pathwithFileName);
  const printContent = replacedContent.replace(/class_name/g, className)

  CreateFiles.write(`${printContent}` + '\r\n')

  formProperty.forEach(ele => {
    const replacedContent = originalContex2.replace(propertyRegExp, ele);
    CreateFiles.write(`${replacedContent}` + '\r\n')
  });
  CreateFiles.write(`${originalContex3}` + '\r\n');

};