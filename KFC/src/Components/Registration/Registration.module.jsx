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

//default data for select options
export const defaultOptions = [
    {id: "S", value: "Sí"},
    {id: "N", value: "No"},
]

//video settings
export const videSettings = {
    width: 900,
    height: 800,
    facingMode: "user",
}


//check data exists and comes from local or db source
export const checkLS = (data, value)=>{
    if(data && value === "localstorage") return true;
    return false;
}

export const checkDB = (data, value) =>{
    if(data && data.length > 0 && value === "database") return true;
    return false;
}

//functions and data for first step registration
//set and show image from input
export const imageAccepted = /image\/(png|jpg|jpeg)/gm;
//onSubmitHandler

//localStorage modules

const KEY_FORMS = "token_forms_KFC";

export const clearLS = ()=> localStorage.removeItem(KEY_FORMS);

export const setItemLS = (item) =>localStorage.setItem(KEY_FORMS, JSON.stringify(item));

export const getItemLS = () => JSON.parse(localStorage.getItem(KEY_FORMS));