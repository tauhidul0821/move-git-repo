'use strict';
module.exports.directoryFromCmd = (directoryWithFilename = '') => {
    try {
        if (directoryWithFilename.includes('/')) {
            var d = directoryWithFilename.split('/');
            var folderNamePrefix = d.slice(0, d.length - 1);
            var inputDir = folderNamePrefix.join('/');

            if (inputDir.charAt(0) === '/') {
                inputDir = deleteFirstSlash(inputDir)
            }
            if (inputDir.charAt(0) === '.' && inputDir.charAt(1) === '/') {
                inputDir = deleteDotAndSlash(inputDir)
            }
            return inputDir

        } else {
            // var dir = process.cwd()
            return ''
        }
    } catch (error) {
        console.error('An error happened:');
        console.error(error);
        process.exit(127);
    }
}

/**
 * if first charecter slash(/) then delete , 
 * if don't have slash(/) then no need to delete 
 */
function deleteFirstSlash(params) {
    return params.substring(1);
}

function deleteDotAndSlash(params) {
    return params.substring(2);
}
