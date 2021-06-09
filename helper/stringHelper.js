const stringHelper = {
    firstCharToUpperCase(sString) {
        try {
            if (sString && sString.length > 0) {
                return sString.charAt(0).toUpperCase() + sString.slice(1);
            }

            return null;
        } catch (err) { console.error(err); }
    },
    strSplitAndReplace(replaceWords, originalContent) {
        try {
            let spStriing = replaceWords.split(',');
            spStriing.forEach(element => {
                let splitByEqual = element.split('=');
                originalContent = originalContent.replace(splitByEqual[0].trim(), splitByEqual[1].trim())

            });
            return originalContent;

        } catch (error) {
            console.error(error);
        }
    }

};

module.exports = {
    stringHelper
};