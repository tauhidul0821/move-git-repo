module.exports.getParts = (sentence,first='<loop>',last='</loop>') => {
    let goodParts = [];

    const allPart = sentence.split(first);

    allPart.forEach(part => {
        if(part.indexOf(last)>-1){
            const goodOne = ((part.split(last))[0]).trim();
            goodParts = goodParts.concat(goodOne);
        }
    });
    return goodParts;
}
// function getParts(sentence,first,last) {
//     let goodParts = [];

//     const allPart = sentence.split(first);

//     allPart.forEach(part => {
//         if(part.indexOf(last)>-1){
//             const goodOne = (part.split(last))[0];
//             goodParts = goodParts.concat(goodOne);
//         }
//     });
//     return goodParts;
// }

// const origin = 'wrongString1<loop>rightString1</loop>;wrongString2:rightString2;wrongString3<loop>rightString3</loop>'

// const result  = getParts(origin,'<loop>','</loop>');

// console.log(result);