const { create } = require('../../lib');

const sampleText = `But I must explain to you how all this mistaken idea of 
denouncing pleasure and praising pain was born and I will give you a complete account 
of the system, and expound the actual teachings of the great explorer of the truth, 
the master-builder of human happiness.

No one rejects, dislikes, or avoids pleasure itself, because it is 
pleasure, but because those who do not know how to pursue pleasure rationally encounter 
consequences that are extremely painful. Nor again is there anyone who loves or pursues or 
desires to obtain pain of itself, because it is pain, but because occasionally circumstances
occur in which toil and pain can procure him some great pleasure.
`

const fileName = `SecondFile.txt`;

const replaceWord = `
Ipsum1=${process.argv[2]},
Ipsum2=Khadija,
Ipsum3=${process.argv[3]},
Ipsum4=Mamun
`;

const directory = `Components4/Fine`;

module.exports.finalTest = () => {
    create(sampleText, fileName, replaceWord, directory);
}

