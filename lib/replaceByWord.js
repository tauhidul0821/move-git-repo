'use strict';
function replaceLoopBySpace(sampleText, firstReplace = '<loop>', secondReplace = '</loop>') {
    return sampleText.replace(firstReplace, '').replace(secondReplace, '')
}

module.exports.removeLoopWord = (str) => {
    try {
        let count = str.split('loop')
        let single = ((count.length - 1) / 2);

        let content = replaceLoopBySpace(str);

        for (let i = 1; i <= single; i++) {
            content = replaceLoopBySpace(content)
        }
        return content;
    } catch (error) {
        console.error('loop word not right')
    }
}

module.exports.replaceProperty = (replaceStatement, fullContent) => {
    try {
        const arr = process.argv;
        let cmdProperty = [];
        let cmdTypeName = [];
        for (let i = 4; i < arr.length; i++) {
            if (arr[i].includes(':')) {
                cmdProperty.push(arr[i].split(':')[0])
                cmdTypeName.push(arr[i].split(':')[1])
            } else {
                cmdProperty.push(arr[i]);
            }
        }

        let tempString = [];
        let originalText = fullContent;
        let nowReplace;


        replaceStatement.forEach(original => {
            if (cmdTypeName.length > 0) {
                cmdProperty.forEach((element, index) => {
                    tempString.push(original
                        .replace(/property/gi, element)
                        .replace(/typeName/gi, cmdTypeName[index])
                    )
                })
            } else {
                cmdProperty.forEach(e => {
                    tempString.push(original.replace(/property/gi, e))
                })
            }

            nowReplace = tempString.join("\n")

            originalText = originalText.toString().replace(original.toString(), nowReplace)
            tempString = [];

        })

        return originalText;
    } catch (error) {
        console.log('replace property not works perfectly')
    }
}
