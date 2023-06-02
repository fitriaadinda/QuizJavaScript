function showPrimeNumber(n) {
  let primeNumbers = '';
  
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primeNumbers += i + '\t';
  
      // Membuat baris baru setiap 5 angka prima
      if (primeNumbers.split('\t').length % 5 === 0) {
        primeNumbers += '\n';
      }
    }
  }
  
  return primeNumbers;
}
  
function isPrime(n) {
    if (n <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
}
  
console.log(showPrimeNumber(100));
  