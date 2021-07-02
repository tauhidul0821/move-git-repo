module.exports.nameAndDirFromCmd = (directoryWithFilename) => {
    try {
        var d = directoryWithFilename.split("/");
        var folderNamePrefix = d.slice(0, d.length - 1);
        var inputDir = folderNamePrefix.join('/');

        if (inputDir.charAt(0) === '/') {
            inputDir = deleteFirstSlash(inputDir)
        }

        var dir = `${inputDir}`;
        var name = d[d.length - 1];
        return {
            name,
            dir
        }
    } catch (error) {
        console.error(error);
    }
}

/**
 * if first charecter slash(/) then delete , 
 * if don't have slash(/) then no need to delete 
 */
function deleteFirstSlash(params) {
    return params.substring(1);
}
