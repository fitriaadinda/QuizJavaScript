function totalGaji(gaji1, gaji2, gaji3) {
  var pajak1 = parseFloat(taxGaji(gaji1));
  var pajak2 = parseFloat(taxGaji(gaji2));
  var pajak3 = parseFloat(taxGaji(gaji3));
  
  var total = gaji1 * (1 + pajak1) + gaji2 * (1 + pajak2) + gaji3 * (1 + pajak3);
  
  return 'Total gaji yang harus dibayar:\n' +
      'Emp1 : Rp.' + gaji1 + ' + Pajak(' + (pajak1 * 100) + '%) = Rp.' + (gaji1 * (1 + pajak1)).toFixed(0) + '\n' +
      'Emp2 : Rp.' + gaji2 + ' + Pajak(' + (pajak2 * 100) + '%) = Rp.' + (gaji2 * (1 + pajak2)).toFixed(0) + '\n' +
      'Emp3 : Rp.' + gaji3 + ' + Pajak(' + (pajak3 * 100) + '%) = Rp.' + (gaji3 * (1 + pajak3)).toFixed(0) + '\n' +
      'Total : Rp.' + total.toFixed(0);
}
  
function taxGaji(gaji) {
  if (gaji >= 10000) {
    return (10 / 100).toFixed(2);
  } else if (gaji >= 1000 && gaji < 10000) {
    return (5 / 100).toFixed(2);
  } else if (gaji >= 100 && gaji < 1000) {
    return (2 / 100).toFixed(2);
  }
}

console.log(totalGaji(500, 2000, 12000));