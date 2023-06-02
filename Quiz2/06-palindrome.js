function isPalindrome(word) {
    word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (var i = 0; i < word.length/2; i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return false;
      }
    }
    return true;
}

console.log(isPalindrome('kasur ini rUsak'));