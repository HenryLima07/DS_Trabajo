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

//casting data for options
export const  castData =(data, dataFrom)=>{
    return data.map(element =>{
        if(dataFrom === "paises") return {id: element.id, value: element.paiNombre};
        if(dataFrom === "municipios") return {id: element.id, value: element.munNom};
        if(dataFrom === "departamentos") return {id: element.id, value: element.dptNombre};
        if(dataFrom === "estudios") return {id: element.id, value: element.nieNombre};
    });
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


    //onInvalidHandler
export const onInvalid=()=>{
        
}

//localStorage modules

const KEY_FORMS = "token_forms";

export const clearLS = ()=> localStorage.clear();

export const setItemLS = (item) =>localStorage.setItem(KEY_FORMS, JSON.stringify(item));

export const getItemLS = () => JSON.parse(localStorage.getItem(KEY_FORMS));