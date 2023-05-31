function getSalesDiscount(price, tax, discount) {
  if (typeof price !== 'number' || typeof tax !== 'number' || typeof discount !== 'number') {
    return 'Price, Tax, dan Discount harus dalam angka';
  }
  
  var discountAmount = price * (discount / 100);
  var priceAfterDiscount = price - discountAmount;
  var taxAmount = priceAfterDiscount * (tax / 100);
  var totalPayment = priceAfterDiscount + taxAmount;
  
  return 'Total Sales : Rp.' + price + '\n' +
         'Discount (' + discount + '%): Rp.' + discountAmount + '\n' +
         'Price After Discount : Rp.' + priceAfterDiscount + '\n' +
         'Pajak (' + tax + '%) : Rp.' + taxAmount + '\n' +
         '----------------------------------\n' +
         'Total Payment : Rp.' + totalPayment;
}

console.log(getSalesDiscount("a", 1,5));
console.log(getSalesDiscount(500, "pajak",5));
console.log(getSalesDiscount("harga", "pajak","discount"));
console.log(getSalesDiscount(4500, 10,5));  