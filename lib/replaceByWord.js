
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

module.exports.replaceProperty = (cmdProperty, replaceSentance, fullContent) => {
    try {
        let tempString = [];

        cmdProperty.forEach(e => {
            tempString.push(replaceSentance[0].replace('property', e))
        })

        const resss = (fullContent.toString()).replace(replaceSentance[0].toString(), tempString.toString());
        return resss;

    } catch (error) {
        console.log('replace property not works perfectly')
    }
}
