
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
        for (let i = 4; i < arr.length; i++) {
            cmdProperty.push(arr[i])
        }

        let tempString = [];
        let originalText = fullContent;
        let nowReplace;

        replaceStatement.forEach(original => {
            cmdProperty.forEach(e => {
                tempString.push(original.replace(/property/gi, e))
            })

            nowReplace = tempString.join("\n")

            originalText = originalText.toString().replace(original.toString(), nowReplace)
            tempString = [];

        })

        return originalText;
    } catch (error) {
        console.log('replace property not works perfectly')
    }
}
