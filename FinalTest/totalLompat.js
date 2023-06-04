function totalLompat(x, y, k) { //posisi katak, posisi tujuan, jarak lompatan
  let jumlahLompatan = 0;

  do {
    x += k; //update posisi katak
    jumlahLompatan++;
  } while (x < y); 

  return jumlahLompatan;
}

console.log(totalLompat(10, 85, 30));
