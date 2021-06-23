const fs = require('fs');

module.exports.writeNow = (directory, content) => {
    fs.writeFileSync(directory, content);
}
