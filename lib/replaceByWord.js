
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

module.exports.replaceProperty = (cmdProperty, replaceStatement, fullContent) => {
    try {
        let tempString = [];
        let originalText = fullContent;

        replaceStatement.forEach(original=>{
            cmdProperty.forEach(e => {
                tempString.push(original.replace('property', e))
            })
            originalText = originalText.toString().replace(original.toString(), tempString.toString())
            tempString = [];

        })
        
        return originalText;
    } catch (error) {
        console.log('replace property not works perfectly')
    }
}



// let newProperties;
//         /** Replace Property works fine */
//         replaceStatement.forEach(element => {
//             console.log(element)
//             newProperties = replaceProperty(cmdProperty, element, content)
//             console.log('content here 28 ->', newProperties)
//         });