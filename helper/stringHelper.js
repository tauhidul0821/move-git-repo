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
            let flag = false;
            let spStriing = replaceWords.split(',');
            let arr = [];

            spStriing.forEach(element => {
                let splitByEqual = element.split('=');

                if (splitByEqual[1].trim().startsWith("process")) {
                    // arr.push(splitByEqual[1].trim());


                    // console.log('key: ', splitByEqual[0].trim())
                    // console.log('value: ', process.argv[3].trim())
                    let key = splitByEqual[0].trim();
                    // let value = process.argv[3].trim();
                    let value = splitByEqual[1].trim()

                    // splitByEqual[1] = process.argv[3].trim();
                    obj = {
                        [key]: value
                    }
                    arr.push(obj)
                };

            });

            spStriing.forEach(element => {
                let splitByEqual = element.split('=');

                // if (splitByEqual[1].trim().startsWith("process")) {
                // flag = true;
                // console.log('key: ', splitByEqual[0].trim())
                // console.log('value: ', process.argv[3].trim())
                // let key = splitByEqual[0].trim();
                // let value = process.argv[3].trim();
                // let value = splitByEqual[1].trim()

                // splitByEqual[1] = process.argv[3].trim();
                // obj = {
                //     [key]: value
                // }
                // arr.push(obj)


                // splitByEqual[1] = process.argv[3].trim();

                // }
                if (arr.length > 0) {
                    arr.forEach((element) => {
                        // console.log('hhere: ', element);


                        console.log('key:-- ', Object.keys(element)[0]);
                        console.log('value:-- ', element[Object.keys(element)])


                    })

                }
                arr = [];

                originalContent = originalContent.replace(splitByEqual[0].trim(), splitByEqual[1].trim())
            });

            // if (arr.length > 0) {
            //     arr.forEach((element) => {
            //         console.log('key', Object.keys(element)[0]);
            //         console.log('value', element[Object.keys(element)])

            //         originalContent = originalContent.replace(Object.keys(element)[0], splitByEqual[1].trim())

            //     });

            // }



            return originalContent;

        } catch (error) {
            console.error(error);
        }
    }

};

module.exports = {
    stringHelper
};