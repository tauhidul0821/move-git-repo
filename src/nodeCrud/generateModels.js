const { create, nameFromCmd,firstCharToUpperCase } = require('../../lib');
const name = nameFromCmd(process.argv[3]);

const sampleText = `
const mongoose = require('mongoose');
const slugify = require('slugify');

const ${firstCharToUpperCase(name)}Schema = new mongoose.Schema({
  <loop>
    property: {
       type: typeName
    },
   </loop>
});

module.exports = mongoose.model('${firstCharToUpperCase(name)}', ${firstCharToUpperCase(name)}Schema)
`

const fileName = `${name}Models.js`;

const replaceWord = `
`;

const directory = `nodecrud/models`;

exports.generateModels = function () {
   create(sampleText, fileName, replaceWord, directory);
}
