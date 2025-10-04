/*
    getElementById sirve para obtener un elemento por su ID
    querySelector sivre para obtener un elemento por su selector CSS
    querySelectorAll sirve para obtener todos los elementos que coincidan con el selector CSS
*/
import {expresiones} from "./expresiones.js"

export function valdarFormulario(){
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
                    if(expresiones.telefono.test(e.target.value)){
                        e.target.classList.add("correcto")
                        e.target.classList.remove("incorrecto")
                    } else {
                        e.target.classList.add("incorrecto")
                        e.target.classLista.remove("correcto")
                    }
                    break;
                case "correo":
                    if(expresiones.correo.test(e.target.value)){
                        e.target.classList.add("correcto")
                        e.target.classList.remove("incorrecto")
                    } else {
                        e.target.classList.add("incorrecto")
                        e.target.classLista.remove("correcto")
                    }
                    break;
                case "contrasena":
                    if(expresiones.contrasena.test(e.target.value)){
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

let lista = document.querySelector("#genero") // querySelector me permite seleccionar un elemento por su selector CSS
lista.addEventListener("change", (e)=>{
    if(e.target.value !== ""){
        e.target.classList.add("correcto")
        e.target.classList.remove("incorrecto")
    } else {
        e.target.classList.add("incorrecto")
        e.target.classList.remove("correcto")
    }
});

let hobbies = document.querySelectorAll("input[name= 'hobbies']") // querySelectorAll me permite seleccionar todos los elementos que coincidan con el selector CSS
hobbies.forEach((hobbie)=>{
    hobbie.addEventListener("change", ()=>{
        let hobbiesChecked = document.querySelectorAll("input[name='hobbies']:checked") // querySelectorAll me permite seleccionar todos los elementos que coincidan con el selector CSS
        let cajaHobbies = document.querySelectorAll(".formulario__grupo--hobbies") // querySelectorAll me permite seleccionar todos los elementos que coincidan con el selector CSS
        if(hobbies.length > 0){
            cajaHobbies.classList.add("correcto")
            cajaHobbies.classList.remove("incorrecto")
        }else {
            cajaHobbies.classList.add("incorrecto")
            cajaHobbies.classList.remove("correcto")
        }
    })
});
}
    