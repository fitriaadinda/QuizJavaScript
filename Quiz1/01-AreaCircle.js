function getAreaCircle(r) {
  if (typeof r !== 'number') {
    return 'Inputan harus dalam angka';
  }

  if (r <= 0) {
    return 'radius ' + r + ' <= 0, coba angka yang lebih tinggi';
  }

  var pi = 3.14159;
  var area = pi * r * r;

  return area.toFixed(5);
}
console.log(getAreaCircle(-1)); 
console.log(getAreaCircle('a')); 
console.log(getAreaCircle(5));   
