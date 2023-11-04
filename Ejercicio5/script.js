let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(`Estos son los nombres inciales del arreglo: ${people}.`);
const peopleCh = people.slice();
peopleCh.splice(1,1);
console.log(`Estos son los nombres del arreglo eliminando a Dani: ${peopleCh}.`);
peopleCh.splice(3,1);
console.log(`Estos son los nombres del arreglo eliminando a Juan: ${peopleCh}.`);
function moveToFront(){
    peopleCh.splice(1,1);
    peopleCh.unshift("Luis");
    console.log(`Estos son los nombres del arreglo moviendo a Luis al principio del arreglo: ${peopleCh}.`);
}
moveToFront();
peopleCh.push("Andrés");
console.log(`Estos son los nombres del arreglo añadiendo el mío al final ${peopleCh}.`);
function findMaria(){
    for (let i = 0; i < peopleCh.length; i++) {
        console.log(`Este bucle se detendrá cuando se encuentre el nombre de \"Maria": ${peopleCh[i]}.`);
        if (peopleCh[i] == "Maria") {
            break;
        }
    }
}
findMaria();
console.log(`Maria está en la posición: ${peopleCh.indexOf("Maria")} del arreglo modificado.`);
console.log(`Al final de todas las modificaciones en el arreglo. Las personas restantes son: ${peopleCh}.`)
