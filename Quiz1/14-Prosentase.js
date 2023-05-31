function getProsentase(start, end) {
  if (typeof start !== 'number' || typeof end !== 'number') {
    return start + ' atau ' + end + ' harus dalam angka';
  }
  
  var percentage = ((end - start) / start) * 100;
  if (percentage >= 0) {
    return 'Total kenaikan income ' + Math.round(percentage) + '%';
  }else{
    return 'Total penurunan income ' + Math.ceil(percentage)+ '%';
  }
}

console.log(getProsentase("abc","bca"));
console.log(getProsentase(600000.00,750000.00));
console.log(getProsentase(750000.00,650000.00));
  