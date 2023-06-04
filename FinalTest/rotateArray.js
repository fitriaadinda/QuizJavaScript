function rotateArray(array, k) {
    const length = array.length;
    const rotations = k % length; // Menghitung jumlah rotasi sesuai dengan panjang array
  
    for (let i = 0; i < rotations; i++) {
      const lastElement = array.pop(); // Menghapus elemen terakhir dari array
      array.unshift(lastElement); // Menambahkan elemen terakhir ke awal array
    }
  
    return array;
  }
  
  const arr = [3, 8, 9, 7, 6];
  console.log(rotateArray(arr, 3));  