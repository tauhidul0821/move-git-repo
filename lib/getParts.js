'use strict';
module.exports.getParts = (sentence, first = '<loop>', last = '</loop>') => {
    try {

        let goodParts = [];

        const allPart = sentence.split(first);

        allPart.forEach(part => {
            if (part.indexOf(last) > -1) {
                const goodOne = ((part.split(last))[0]).trim();
                goodParts = goodParts.concat(goodOne);
            }
        });
        return goodParts;
    } catch (error) {
        console.error('An error happened:');
        console.error(error);
        process.exit(127);

    }
}
