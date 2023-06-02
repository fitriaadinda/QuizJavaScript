const dates = [new Date(2021, 10, 20), new Date(2020, 3, 12),
new Date(2020, 5, 23), new Date(2022, 3, 18)];

function matchingDate(dates, year) {
  dates.sort((datesA, datesB) => {
    const date1 = new Date(datesA);
    const date2 = new Date(datesB);

    return date1 - date2;
  });

  for(d of dates){
    if(d.getFullYear() == year){
      return d.toString();
    }
  }
  return `Data not found`;
}
console.log(matchingDate(dates, 2020));
  