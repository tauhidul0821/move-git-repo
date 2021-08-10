'use strict';
const fs = require('fs');

module.exports.createDirectory = (directory) => {
    fs.mkdirSync(directory, { recursive: true }, (error) => {
        if (error) {
            console.error('An error happened:');
            console.error(error);
            process.exit(127);
        }
    });
}
