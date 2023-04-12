
//errors messages
export const errorsMessages = {
    require: "Este campo es requerido",
    nombre: {
        soloTexto: "El campo solo permite texto",
    },

    numeroDocumento:{
        documentoRegistrado: "Tu documento ya ha sido registrado",
        documentoEmailRegistrado: "El correo indicado ya está asociado a otro documento"
    },

    edad:{
        max: "Edad no puede ser mayor a 99 años",
        min: "Debe tener al menos 18 años"
    },

    email:{
        correoInvalido: "Correo electronico invalido",
        correoRepetido: "Correo electronico en uso por otro usuario"
    }
}