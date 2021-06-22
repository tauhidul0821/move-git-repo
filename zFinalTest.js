const fs = require('fs');
const { stringHelper } = require('./helper');

function robot(sampleText, fileName, replaceWord, directory = './') {
    // console.log('sample text:- ', sampleText);
    // console.log('fileName:- ', fileName);
    // console.log('replaceWord:- ', replaceWord);
    // console.log('directory:- ', directory);


    originalContent = stringHelper.strSplitAndReplace(replaceWord, sampleText)

    let directory1;
    // Directory manager
    if (directory === './') {
        directory1 = `${process.cwd()}/${fileName}`;
        console.log('dont have directore', directory1);

        fs.writeFileSync(directory1, originalContent);
        console.log('Created successfuly'.green);

    } else {
        directory1 = `${process.cwd()}/${directory}`;

        if (!fs.existsSync(directory1)) {
            fs.mkdir(directory1, { recursive: true }, (error) => {
                if (error) {
                    console.log(error)
                } else {
                    fs.writeFileSync(`${directory1}/${fileName}`, originalContent);
                    console.log('Created successfuly'.green);
                }
            });
        } else if (fs.existsSync(directory1)) {
            fs.writeFileSync(`${directory1}/${fileName}`, originalContent);
            console.log('Created successfuly'.green);
            // fs.mkdir(directory1, { recursive: true }, (error) => {
            //     if (error) {
            //         console.error(error);
            //     }else{
            //         fs.writeFileSync(`${directory1}/${fileName}`, originalContent);
            //         console.log('Created successfuly'.green);
            //     }
            // })
        }
        // console.log('have directory', directory1)

    }

}

module.exports = {
    robot
};

