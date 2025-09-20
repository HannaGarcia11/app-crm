/*
    getElementById sirve para obtener un elemento por su ID
    querySelector sivre para obtener un elemento por su selector CSS
    querySelectorAll sirve para obtener todos los elementos que coincidan con el selector CSS
*/
import {expresiones} from "./expresiones.js"

    let inputs = document.getElementsByClassName("formulario__entrada")
    let arregloInputs = [...inputs] // Convierte una colección HTML en un array - Los ... son el operador spread que sirve para expandir los elementos de un iterable (como un array o una cadena) en lugares donde se esperan múltiples elementos.
    
    arregloInputs.map((input)=> {
        input.addEventListener("keyup", (e)=>{
            switch(e.target.name){
                case "nombre":
                    if(expresiones.texto.test(e.target.value)){
                        e.target.style.borderColor = "green" // e.target es el elemento que disparó el evento, como ya sabemos que elemento estamos manipulando, simplemente usamos e.target
                    } else{
                        document.getElementById("nombre").style.borderColor = "red" // document.getElementById("nombre") es el elemento con ID nombre, se especifica que elemento esta manipulando
                    }
                    break;
                case "apellido":
                    if(expresiones.texto.test(e.target.value)){
                        e.target.classList.add("correcto") // e.targe me selecciona la etiqueda y el classList.add() me permite agregar una clase
                        e.target.classList.remove("incorrecto") // e.targe me selecciona la etiqueda y el classList.remove() me permite eliminar una clase
                    } else {
                        e.target.classList.add("incorrecto")
                        e.target.classList.remove("correcto")
                    }
                    break;
                case "documento":
                    if(expresiones.numero.test(e.target.value)){
                        e.target.style.borderColor = "green"
                    } else{
                        e.target.style.borderColor = "red"
                    }
                    break;
                case "telefono":
                    if(expresiones.numero.test(e.target.value)){
                        e.target.classList.add("correcto")
                        e.target.classList.remove("incorrecto")
                    } else {
                        e.target.classList.add("incorrecto")
                        e.target.classLista.remove("correcto")
                    }
                    break;

            }
        })
});