const arrObj = [{ 'bar': 'baz' }, { 'asdf': 'tuhin' }];

arrObj.forEach((element, index, arrObj) => {
    // console.log(element)
    console.log(Object.keys(element));
    console.log('value',element[Object.keys(element)])

});