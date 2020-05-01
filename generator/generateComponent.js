const fs = require('fs');
const path = require('path');
const colors = require('colors');
const componentRegExp = /YourComponentName/g;
const templateRegExp = /YourTemplateName/g;

function generateComponent() {

  const cwd = process.cwd();
  const componentPath = path.join(__dirname, '../sampleFile/component');

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

}

module.exports = {
  generateComponent
};

