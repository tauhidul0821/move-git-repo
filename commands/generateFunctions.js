const { writeFileSync } = require('fs');
const sampleComponent = require('../generateSample/component/sampleComponent');
const sampletemplate = require('../generateSample/template/sampleTemplate.js');

const generateFunctions = {
  genComponent() {
    const cwd = process.cwd();
    const file_name = process.argv[3];
    console.log('generate component at ',cwd);
    /* 

    jodi file name er age / [slash ] thake then cwd er sathe location concat hobe 

    ex: bs g c components/name_of_component
    1. if not exits components folder, create components folder
    2. if exits components folder then create file inside components folder

    */ 
   writeFileSync(cwd+`/${file_name}.ts`,sampleComponent);
   
    console.log('file name and location',file_name)
  },
  genTemplate() {
    const cwd = process.cwd();
    const file_name = process.argv[3];
    console.log('generate component at ',cwd);
    /* 

    jodi file name er age / [slash ] thake then cwd er sathe location concat hobe 

    ex: bs g c components/name_of_component
    1. if not exits components folder, create components folder
    2. if exits components folder then create file inside components folder

    */ 
   writeFileSync(cwd+`/${file_name}.html`,sampletemplate);
   
    console.log('file name and location',file_name)
  }
}
module.exports = generateFunctions;