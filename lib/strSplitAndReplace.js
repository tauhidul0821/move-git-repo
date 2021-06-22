
module.exports.strSplitAndReplace = (replaceWords, originalContent) => {
    try {
        let flag = false;
        let spStriing = replaceWords.split(',');
        let arr = [];

        spStriing.forEach(element => {
            let splitByEqual = element.split('=');

            if (splitByEqual[1].trim().startsWith("process")) {
                let key = splitByEqual[0].trim();
                let value = splitByEqual[1].trim()
                obj = {
                    [key]: value
                }
                arr.push(obj)
            };

        });

        spStriing.forEach(element => {
            let splitByEqual = element.split('=');
            if (arr.length > 0) {
                arr.forEach((element) => {
                    console.log('key:-- ', Object.keys(element)[0]);
                    console.log('value:-- ', element[Object.keys(element)])
                })

            }
            arr = [];

            originalContent = originalContent.replace(splitByEqual[0].trim(), splitByEqual[1].trim())
        });
        return originalContent;
    } catch (error) {
        console.error(error);
    }
}