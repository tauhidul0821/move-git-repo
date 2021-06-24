module.exports.separateDirAndName = (directoryWithFilename) => {
    try {
        var d = directoryWithFilename.split("/");
        var folderNamePrefix = d.slice(0, d.length - 1);
        var inputDir = folderNamePrefix.join('/');
        inputDir = inputDir.substring(1);
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