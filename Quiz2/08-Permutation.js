const checkPermute = function(stringOne, stringTwo) {
    if (stringOne.length !== stringTwo.length) {
      return false;
    }
  
    const sortedOne = stringOne.split('').sort().join('');
    const sortedTwo = stringTwo.split('').sort().join('');
  
    return sortedOne === sortedTwo;
};

console.log(checkPermute('aba', 'aab')); 
console.log(checkPermute('aba', 'aaba'));
console.log(checkPermute('aba', 'aa'));
  