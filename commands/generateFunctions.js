const fs = require('fs');
const path = require('path');
const colors = require('colors');
const { stringHelper } = require('../helper/stringHelper');
const sampleComponent = require('../sampleFile/component/sampleComponent');
const componentPath = path.join(__dirname, '../sampleFile/component');
const templatePath = path.join(__dirname, '../sampleFile/template');
const formComponent = path.join(__dirname, '../sampleFile/formComponent');

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
    const cwd = process.cwd();
    const thirdprocess = process.argv;
    console.log(cwd);
    fileNamewithPath = process.argv[3];
    console.log('file name ->', fileNamewithPath);
    const formProperty = thirdprocess.slice(4, thirdprocess.length);
    console.log('form formProperty ->', formProperty);

    if (fileNamewithPath.includes("/")) {
      console.log('need to create folder');
      var d = fileNamewithPath.split("/");
      var folder_name_prefix = d.slice(0, d.length - 1);
      var dir = folder_name_prefix.join('/');
      var fileName = d[d.length - 1];


      if (!fs.existsSync(dir)) {

        fs.mkdir(`${process.cwd()}/${dir}`, { recursive: true }, (error) => {
          if (error) {
            console.error(error);
          } else {
            // TODO: try to call older function  
            // console.log('now create file');
            generateFormComponentHtml(`/${fileNamewithPath}`, formProperty, fileName);
            generateFormComponent(`/${fileNamewithPath}`, formProperty, fileName);
            console.log('Created successfuly'.green);
          }
        });
      } else if (fs.existsSync(dir)) {
        generateFormComponentHtml(`/${fileNamewithPath}`, formProperty, fileName);
        generateFormComponent(`/${fileNamewithPath}`, formProperty, fileName);
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


function generateFormComponentHtml(pathwithFileName, formProperty, filename = false) {
  const templateRegExp = /property_ame/g;
  const componentRegExp = /component_name/g;

  let fname = pathwithFileName;

  if (filename) {
    fname = filename
  } else {
    fname = pathwithFileName
  }

  const CreateFiles = fs.createWriteStream(`${process.cwd()}/${pathwithFileName}.html`, {
    flags: 'a'
  })

  const file1Path = path.join(__dirname, '../sampleFile/formComponent/propertyReplace/first_propertyReplace');
  const file2Path = path.join(__dirname, '../sampleFile/formComponent/propertyReplace/middle_propertyReplace');
  const file3Path = path.join(__dirname, '../sampleFile/formComponent/propertyReplace/end_propertyReplace');


  const originalContex1 = fs.readFileSync(file1Path, "utf8");
  const originalContex2 = fs.readFileSync(file2Path, "utf8");
  const originalContex3 = fs.readFileSync(file3Path, "utf8");



  const replacedContent = originalContex1.replace(componentRegExp, fname);

  CreateFiles.write(`${replacedContent}` + '\r\n')

  formProperty.forEach(ele => {
    const replacedContent = originalContex2.replace(templateRegExp, ele);
    CreateFiles.write(`${replacedContent}` + '\r\n')
  });

  CreateFiles.write(`${originalContex3}` + '\r\n');

};

function generateFormComponent(pathwithFileName, formProperty, filename = false) {

  let fname = pathwithFileName;

  if (filename) {
    fname = filename
  } else {
    fname = pathwithFileName
  }

  const CreateFiles = fs.createWriteStream(`${process.cwd()}/${pathwithFileName}.ts`, {
    flags: 'a'
  })


  const componentRegExp = /component_name/g;
  const propertyRegExp = /property_name/g;

  const first_property = path.join(__dirname, '../sampleFile/formComponent/componentReplace/first_property.component');
  const second_property = path.join(__dirname, '../sampleFile/formComponent/componentReplace/second_property.component');
  const third_property = path.join(__dirname, '../sampleFile/formComponent/componentReplace/third_property.component');

  const originalContex1 = fs.readFileSync(first_property, "utf8");
  const originalContex2 = fs.readFileSync(second_property, "utf8");
  const originalContex3 = fs.readFileSync(third_property, "utf8");


  let className = fname.replace(/[-_]/g, "class_name");
  className = stringHelper.firstCharToUpperCase(className);

  const replacedContent = originalContex1.replace(componentRegExp, fname);
  const printContent = replacedContent.replace(/class_name/g, className)

  CreateFiles.write(`${printContent}` + '\r\n')

  formProperty.forEach(ele => {
    const replacedContent = originalContex2.replace(propertyRegExp, ele);
    CreateFiles.write(`${replacedContent}` + '\r\n')
  });
  CreateFiles.write(`${originalContex3}` + '\r\n');

};
