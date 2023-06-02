function maxWordLength(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;
    let maxWord = '';
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > maxLength) {
        maxLength = word.length;
        maxWord = word;
      }
    }
  
    return maxWord;
}
  
console.log(maxWordLength("aku suka bootcamp sentul city"));
  