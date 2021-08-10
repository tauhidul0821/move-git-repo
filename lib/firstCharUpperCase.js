'use strict';
module.exports.firstCharToUpperCase = (sString) => {
    try {
        if (sString && sString.length > 0) {
            return sString.charAt(0).toUpperCase() + sString.slice(1);
        }
        return null;
    } catch (err) {
        console.error('An error happened:');
        console.error(error);
        process.exit(127);
    }
}
