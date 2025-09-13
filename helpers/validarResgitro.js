/*
    getElementById sirve para obtener un elemento por su ID
    querySelector sivre para obtener un elemento por su selector CSS
    querySelectorAll sirve para obtener todos los elementos que coincidan con el selector CSS
*/


    let inputs = document.getElementByClassName("formulario__entrada")
    let arregloInputs = [...inputs] // Convierte una colección HTML en un array - Los ... son el operador spread que sirve para expandir los elementos de un iterable (como un array o una cadena) en lugares donde se esperan múltiples elementos.
    console.log(inputs)
    console.log(arregloInputs)



arregloInputs.map((input)=> {
    console.log(input)
});