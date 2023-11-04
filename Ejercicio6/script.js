const arr = [3, 6, 12, 5, 100, 1 ];
console.log(arr);
let array = arr.slice();


//Algoritmo burbuja
for (let j = 0; j < array.length; j++) {
  for (let i = 0; i < array.length; i++) {
  let numActual;
  if (array[i] > array[i+1]) {
    numActual = array[i];
    array[i] = array[i+1];
    array[i+1] = numActual;
    }
  }
}

console.log(array);