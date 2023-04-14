export const castData = (Data = [], dataFrom="")=>{
    //validating
    if(!Data || Data.length < 1 || !dataFrom) return; 
    //casting data for options
    if(dataFrom === "paises") return Data.map(element => { return {id: element.id, value: element.paiNombre}});
    if(dataFrom === "municipios") return Data.map(element => { return {id: element.id, value: element.munNom}});
    if(dataFrom === "departamentos") return Data.map(element => { return {id: element.id, value: element.dptNombre}});
    if(dataFrom === "estudios") return Data.map(element => { return {id: element.id, value: element.nieNombre}});
    if(dataFrom === "discapacitado") return Data.map(element => { return {id: element.id, value: element.value}});


}