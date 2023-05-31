function fahrenheitToKelvin(fahrenheit) {
    var input = parseFloat(fahrenheit);
    
    if (isNaN(input)) {
        return 'Inputan harus dalam angka';
    }
  
    var kelvin = (input + 459.67) / 1.8;
  
    return 'Convert Fahrenheit (' +fahrenheit+ ') to Kelvin = ' +Math.round(kelvin);
}

console.log(fahrenheitToKelvin(45)); //Convert Fareinheit (45) to Kelvin = 280
console.log(fahrenheitToKelvin("1")); //Convert Fareinheit (1) to Kelvin = 811
console.log(fahrenheitToKelvin("F"));