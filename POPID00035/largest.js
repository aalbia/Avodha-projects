
var numbers = [18, 26, 3, 4, 5, 6, 7, 0, 67, -60, 5,87,9,0,88,66,99,5]


function largestnumber(arr) {
  let larger = numbers[0];

  for (i = 1; i < numbers.length; i++) {
    if (larger < numbers[i]) {
      larger = numbers[i];
    }
  }



  return larger
}

let largest = largestnumber(numbers)
console.log(largest);
