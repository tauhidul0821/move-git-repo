const { create } = require('../../lib');

const sampleText = `But I must11 explain to you how all this mistaken idea of 
denouncing pleasure and praising pain was born and I will give you a complete account 
of the system, and expound22 the actual teachings of the great explorer of the truth, 
the master-builder of huma44 happiness.

No one rejects, dislikes, or avoids pleasure itself, because it is 
pleasure333, but because those who do not know how to pursue pleasure rationally encounter 
consequences that are extremely painful. Nor again is there anyone who loves or pursues or 
desires to obtain pain of itself, because it is pain, but because occasionally circumstances
occur in which toil and pain can procure him some great pleasure.
`

const fileName = `secondTest.txt`;

const replaceWord = `
must11=eeeeeeeeeeee,
huma44=fffffffffffffffffffff,
expound22=ggggggggggggggg,
pleasure333=qqqqqqqqqqqqqqqqqqqq
`;

const directory = `Components4/Fine`;

exports.secondTest = function() {
    create(sampleText, fileName, replaceWord, directory);
}
