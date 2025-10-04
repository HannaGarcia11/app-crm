import { Usuarios } from "../models/usuarioModel.js";

export function registrarUsuario(){
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (e)=>{
        e.preventDefault();
        const formData = new FormData(); // Crear un objeto FormData para enviar los datos del formulario
        let usuario = Object.fromEntries(formData);
        usuario.hobbies = formData.getAll("hobbies");
        Usuarios.push(usuario);
    });
}