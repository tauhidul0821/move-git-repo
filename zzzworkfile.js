const fs = require('fs')
const path = require('path')
const file1Path = path.join(__dirname, './propertyReplace/first_propertyReplace');
const file2Path = path.join(__dirname, './propertyReplace/middle_propertyReplace');
const file3Path = path.join(__dirname, './propertyReplace/end_propertyReplace');

const templateRegExp = /property_ame/g;

const originalContex1 = fs.readFileSync(file1Path, "utf8");
const originalContex2 = fs.readFileSync(file2Path, "utf8");
const originalContex3 = fs.readFileSync(file3Path, "utf8");
const originalContexArr = [
  "name",
  "age",
  "cgpa"
];


const CreateFiles = fs.createWriteStream('./zfile.html', {
  flags: 'a' //flags: 'a' preserved old data
})
// console.log("originalContex1",originalContex1);
CreateFiles.write(`${originalContex1}` + '\r\n') //'\r\n at the end of each value
originalContexArr.forEach(ele => {

  const replacedContent = originalContex2.replace(templateRegExp,ele);

  CreateFiles.write(`${replacedContent}` + '\r\n')
});
// for(let i = 0; i < 5; i++){
//     CreateFiles.write(i.toString()+'\r\n') //'\r\n at the end of each value
// }

CreateFiles.write(`${originalContex3}` + '\r\n') //'\r\n at the end of each value