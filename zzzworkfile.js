// const fs = require('fs')
// const path = require('path')
// const file1Path = path.join(__dirname, './propertyReplace/first_propertyReplace');
// const file2Path = path.join(__dirname, './propertyReplace/middle_propertyReplace');
// const file3Path = path.join(__dirname, './propertyReplace/end_propertyReplace');
// const templateRegExp = /property_ame/g;

// const originalContex1 = fs.readFileSync(file1Path, "utf8");
// const originalContex2 = fs.readFileSync(file2Path, "utf8");
// const originalContex3 = fs.readFileSync(file3Path, "utf8");
// const originalContexArr = [
//   "name",
//   "age",
//   "cgpa"
// ];

// const CreateFiles = fs.createWriteStream('./zfile.html', {
//   flags: 'a'
// })

// CreateFiles.write(`${originalContex1}` + '\r\n')
// originalContexArr.forEach(ele => {
//   const replacedContent = originalContex2.replace(templateRegExp,ele);
//   CreateFiles.write(`${replacedContent}` + '\r\n')
// });

// CreateFiles.write(`${originalContex3}` + '\r\n');






function paramTest(a, b, fileName = false) {
  let doc = '';
  let fileNameddd = 'filename'
  if (fileName) {
    doc = fileName;
    /**
     * now here need only file name , not folder name
     * 
     */
  } else {
    doc = fileNameddd;
  }
  console.log(doc);
}
paramTest(4, 5);