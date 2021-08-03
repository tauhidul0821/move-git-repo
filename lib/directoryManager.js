'use strict';
const fs = require('fs');

module.exports.createDirectory = (directory) => {
    fs.mkdirSync(directory, { recursive: true }, (error) => {
        if (error) {
            console.log(error)
        }
    });
}
