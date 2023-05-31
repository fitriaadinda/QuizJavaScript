function isPalindrome(angka) {
  if (typeof angka !== 'number' && !/^\d+$/.test(angka)) {
    return angka + ' bukan angka';
  }
  
  angka = angka.toString();
  
  var reversedAngka = angka.split('').reverse().join('');
  
  if (angka === reversedAngka) {
    return angka + ' adalah angka palindrome';
  } else {
    return angka + ' adalah tidak palindrome';
  }
}

console.log(isPalindrome("abcd"));
console.log(isPalindrome("123a"));
console.log(isPalindrome("1234"));
console.log(isPalindrome(1221));
console.log(isPalindrome("8888"));