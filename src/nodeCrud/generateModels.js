const { create } = require('../../lib');

const sampleText = `
const mongoose = require('mongoose');
const slugify = require('slugify');

const BootCampSchema = new mongoose.Schema({
  <loop>
    property: {
       type: typeName
    },
   </loop>
});
`

const fileName = `coursesModels.js`;

const replaceWord = `
Ipsum1=Steve Jobs,
Ipsum2=Bill Gates,
Ipsum3=${process.argv[3]},
Ipsum4=John Doe
`;

const directory = `nodecrud/models`;

exports.generateModels = function () {
    create(sampleText, fileName, replaceWord, directory);
}
