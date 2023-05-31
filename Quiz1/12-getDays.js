function getDays(month, year) {
  if (typeof month !== 'number' && typeof year !== 'number') {
    return 'Inputan bulan dan tahun harus dalam bentuk angka';
  }
  
  if (month < 1 || month > 12) {
    return 'Bulan harus dalam rentang 1-12';
  }
  
  var daysInMonth = new Date(year, month, 0).getDate();
  var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  
  if (isLeapYear) {
    return 'Bulan ini memiliki ' + daysInMonth + ' hari. ' + year + ' adalah tahun kabisat.';
  } else {
    return 'Bulan ini memiliki ' + daysInMonth + ' hari.';
  }
}

console.log(getDays("a",2021)); //inputan bulan harus dalam integer
console.log(getDays("2","year")); //inputan tahun harus dalam integer
console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(2,2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8,2021)); //This month has 31 hari