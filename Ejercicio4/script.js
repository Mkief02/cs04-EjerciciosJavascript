let student1Courses = ["Math", "English", "German", "Geo", "Graph"];
let student2Courses = ["Geography", "Spanish", "Programming", "Math", "German", "Graph"];


for (let i = 0; i < student1Courses.length; i++) {
    for (let j = 0; j < student2Courses.length; j++) {
      if (student1Courses[i] == student2Courses[j]) {
        alert(`Se encontro una coincidencia en el elemento: ${student1Courses[i]}`);
      }
    }
}



/*
function simCompare(){
    const coincidencias = (student1Courses.includes(student2Courses));
    if(coincidencias == false){
        alert(`El o los elementos que coinciden son: ${coincidencias} `);
    }else{
        alert("No se encontró ninguna coincidencia");
    }
}
simCompare();
*/

