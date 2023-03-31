import { useNavigate } from "react-router-dom";

//global navigate function
//const navigateTo = useNavigate();

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

//video settings
export const videSettings = {
    width: 900,
    height: 800,
    facingMode: "user",
}

//casting data for options
export const  castData =(data, dataFrom)=>{
    return data.map(element =>{
        if(dataFrom === "paises") return {id: element.id, value: element.paiNombre};
        if(dataFrom === "municipios") return {id: element.id, value: element.munNom};
        if(dataFrom === "departamentos") return {id: element.id, value: element.dptNombre};
        if(dataFrom === "estudios") return {id: element.id, value: element.nieNombre};
    });
}


//functions and data for first step registration
//set and show image from input
export const imageAccepted = /image\/(png|jpg|jpeg)/gm;
//onSubmitHandler


    //onInvalidHandler
export const onInvalid=()=>{
        
}

//localStorage modules

const KEY_FORMS = "token_forms";

export const clearLS = ()=> localStorage.removeItem(KEY_FORMS);

export const setItemLS = (item) =>localStorage.setItem(KEY_FORMS, item);

export const getItemLS = () => localStorage.getItem(KEY_FORMS);