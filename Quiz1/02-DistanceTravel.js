function calculateDistance(a, t) {
  if (typeof a !== 'number' || typeof t !== 'number') {
    return 'Inputan harus dalam angka';
  }
  
  if (a <= 0 || t <= 0) {
    return 'Percepatan dan Waktu harus lebih dari 0';
  }
  
  var distance = 0.5 * a * Math.pow(t, 2);
  
  return distance;
}

console.log(calculateDistance("a","t"));
console.log(calculateDistance(-1,9)); 
console.log(calculateDistance(50,60));