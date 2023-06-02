const cities = ["merak", "tangerang", "jakarta", "bogor", "cianjur", "cimahi", "bandung"];

function citiesSlice(array, cityToRemove) {
    const indexToRemove = array.indexOf(cityToRemove);
    if (indexToRemove !== -1) {
      return [...array.slice(0, indexToRemove), ...array.slice(indexToRemove + 1)];
    }
    return array;
}

console.log(citiesSlice(cities, "jakarta"));
