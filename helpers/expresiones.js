export let expresiones = {
    texto : /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{5,50}$/,
    numero: /^[0-9]{5,10}$/,
    telefono: /^3\d{9}$/,
    correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    contrasena: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
}