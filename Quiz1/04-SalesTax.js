function getSalesTax(price, tax) {
  if (typeof price !== 'number') {
    return 'Price harus dalam angka';
  }else if(typeof tax !== 'number') {
    return 'Pajak harus dalam angka';
  }
    
  var totalAmount = price + tax;
  
  return 'Total Sales : Rp.' + price + '\n' + 
         'Pajak : ' + tax/10 + '\n' +
         'Total Harga+Pajak : Rp.' + totalAmount;
}

console.log(getSalesTax("a", 1));      
console.log(getSalesTax(500, "pajak"));
console.log(getSalesTax("harga", "pajak"));
console.log(getSalesTax(4500, 5));

  