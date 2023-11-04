const arr = [6174, 73, 3, 29, 2];
const array = arr.slice(); 

function duplicate() {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * 2;
    }
}
duplicate(array);
alert(`Para el arreglo de números: ${arr}; su arreglo duplicado es: ${array}`);