'use strict';
module.exports.strSplitAndReplace = (replaceWords, originalContent) => {
    try {
        let context = originalContent;
        let spStriing = replaceWords.split(',');
        spStriing.forEach(element => {
            let splitByEqual = element.split('=');
            context = context.replace(splitByEqual[0].trim(), splitByEqual[1].trim())
        });
        return context;
    } catch (error) {
        console.error(error);
    }
}
