function convertToRupiah(money, type) {
  var exchangeRate = 0;
  var convertedAmount = 0;
  
  switch (type) {
    case 'yen':
      exchangeRate = 130.12;
      convertedAmount = money * exchangeRate;
      return money + ' yen = Rp.' + convertedAmount.toLocaleString();
    case 'usd':
      exchangeRate = 14382.50;
      convertedAmount = money * exchangeRate;
      return money + ' dollar = Rp.' + convertedAmount.toLocaleString();
    case 'euro':
      exchangeRate = 16000.00;
      convertedAmount = money * exchangeRate;
      return money + ' euro = Rp.' + convertedAmount.toLocaleString();
    default:
        return 'Tipe mata uang tidak cocok';
    }
}

console.log(convertToRupiah(1000,'yen'));
console.log(convertToRupiah(100,'usd'));
console.log(convertToRupiah(100,'euro'));
console.log(convertToRupiah(100,''));
  