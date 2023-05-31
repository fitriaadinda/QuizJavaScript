function sumDigit(n) {
  if (typeof n === 'string') {
    if (isNaN(n)) {
      return n + ' bukan angka, coba lagi...';
    }
    n = parseInt(n);
  }
  
  if (n >= 10000) {
    return 'Angka harus lebih kecil dari 10000';
  }
  
  var sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  
  return sum;
}

console.log(sumDigit(1234));    
console.log(sumDigit("1234")); 
console.log(sumDigit(12345)); 
console.log(sumDigit("a123"));
