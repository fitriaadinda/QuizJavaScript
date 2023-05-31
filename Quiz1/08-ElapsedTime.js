function getPeriodTimes(seconds) {
  if (typeof seconds === 'string') {
    if (isNaN(seconds)) {
      return seconds + ' bukan angka';
    }
    seconds = parseInt(seconds);
  }
  
  if (seconds < 0) {
    return 'Jumlah detik harus positif';
  }
  
  var days = Math.floor(seconds / (24 * 60 * 60));
  var hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  var minutes = Math.floor((seconds % (60 * 60)) / 60);
  var remainingSeconds = seconds % 60;
  
  var result = days+ ' hari ' +hours+ ' jam ' +minutes+ ' menit ' +remainingSeconds+ ' detik';
  return result;
}

console.log(getPeriodTimes("700005A"));
console.log(getPeriodTimes("700005"));