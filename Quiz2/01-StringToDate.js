function strToDate(s) {
  const parts = s.split('/');
  if(parts.some(s => isNaN(s))){
    return s+ 'bad format date';
  }
  s = new Date(s).toString();

  return s;
}

console.log(strToDate('12/30/2021')); // Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); // 12/aa/bb bukan format tanggal yang valid
