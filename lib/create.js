const colors = require('colors');
const fs = require('fs');
const { strSplitAndReplace } = require('./strSplitAndReplace')
const { createDirectory } = require('./directoryManager')
const { writeNow } = require('./writeNow')
const { getParts } = require('./getParts');
const { removeLoopWord, replaceProperty } = require('./replaceByWord');

module.exports.create = (sampleText, fileName, replaceWord = '', directory = './') => {

    content = replaceWord ? strSplitAndReplace(replaceWord, sampleText) : sampleText

    const arr = process.argv;
    let command = [];
    for (let i = 4; i < arr.length; i++) {
        command.push(arr[i])
    }

    if (content.includes('loop')) {
        let result = getParts(sampleText)
        // console.log('result line 16-> ', result[0])

        /** Replace Property works fine */
        let newProperties = replaceProperty(command, result, content)
        // console.log('content here 26 ->', newProperties)

        /* Remove Loop word works fine */
        content = removeLoopWord(newProperties)

        // console.log('now remove loop and set properties word', content)
    }



    let directory1;
    if (directory === './') {
        directory1 = `${process.cwd()}/${fileName}`;

        writeNow(directory1, content);

        console.log(colors.green(`Created successfuly ${fileName} at `), colors.underline.gray(`${directory1}/${fileName}`));

    } else {

        directory1 = `${process.cwd()}/${directory}`;

        if (!fs.existsSync(directory1)) {
            createDirectory(directory1)
            writeNow(`${directory1}/${fileName}`, content);

            console.log(colors.green(`Created successfuly ${fileName} at `), colors.underline.gray(`${directory1}/${fileName}`));

        } else if (fs.existsSync(directory1)) {
            writeNow(`${directory1}/${fileName}`, content);

            console.log(colors.green(`Created successfuly ${fileName} at `), colors.underline.gray(`${directory1}/${fileName}`));

        }
    }
}
