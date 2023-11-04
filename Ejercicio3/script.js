const array = [6174, 73, 3, 29, 2];
let sum;
let prod;
function sumaYProducto(array){
    sum = array.reduce((resultado, elemento) => {
        return resultado + elemento;
    });
    prod = array.reduce((resultado, elemento) => {
        return resultado * elemento;
    });
}
sumaYProducto(array);
alert(`Para el arreglo: ${array}. La suma de sus elementos es: ${sum}. El producto de sus elementos es: ${prod}.`);


/*
let arr = [6174, 73, 3, 29, 2];
let array2 = arr.slice(); 

function sumaYProducto(array2){
    let sum;
    let prod;
    sum = array2.reduce((resultado, elemento) => {
        return resultado + elemento;
    });
    prod = array2.reduce((resultado, elemento) => {
        return resultado * elemento;
    });
    
}
sumaYProducto(array2);

alert(`Para el arreglo: ${arr}. La suma de sus elementos es: ${sum}. El producto de sus elementos es: ${prod}.`);
*/

/*
function duplicate() {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * 2;
    }
}
duplicate(array);
alert(`Para el arreglo de números: ${arr}; su arreglo duplicado es: ${array}`);
*/