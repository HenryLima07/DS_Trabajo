import Form from "../Shared/Form/Form.component";
import Input from "../Shared/Form/Input/Input.component";
import ErrorElement from "../Shared/Form/ErrorElement/ErrorElement.component";

import { useForm } from "react-hook-form";

//errors messages
const errorsMessages = {
    require: "Este campo es requerido",
    email:{
        correoInvalido: "Correo electronico invalido",
        correoNoRegistrado: "Correo electronico no exite"
    }
}


const UpdateProfileContainer = ()=>{

    const { register, handleSubmit, formState:{ errors } } = useForm();

    const onSubmitHandler = (data)=>{
        const { email } = data;
        console.log(email);
    }
 {/* TODO: Add action on submit */}
    const onInvalidHandler = ()=>{

    }

    return(
        <section className="flex flex-col lg:flex-row p-4 items-center justify-around" >

            <div className="flex flex-col items-center py-8">
                <h2 className="mb-8">
                    Por tu seguridad confirma tus datos y te enviaremos un link a tu correo electrónico para que puedas actualizar tu información
                </h2>


               
                <Form onSubmit = {handleSubmit(onSubmitHandler, onInvalidHandler)} autoComplete="off" className = "flex flex-col items-center w-full ng-untouched ng-pristine ng-invalid">
                    
                    <div className="flex flex-col items-center sm:items-end sm:flex-row pb-2 w-full justify-center">

                        <div className="items-end w-80">

                            <div className="flex flex-col p-2 items-start">

                                <Input 
                                    type="email" 
                                    name="email"
                                    required={true} 
                                    label = "Correo electrónico"
                                    className = "w-80"
                                    innerRef={{...register("email", {
                                        required: errorsMessages.require,
                                        pattern: {
                                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                            message: errorsMessages.email.correoInvalido
                                        }

                                    
                                    })}}
                                ><ErrorElement>{errors.email?.message}</ErrorElement></Input>                                
                            </div>
                        </div>

                        <div className="w-60 flex flex-col mt-4 sm:mt-0 sm:ml-8 sm:items-start justify-end">
                            <button className=" bg-wendys-blue text-white py-4 px-8 rounded h-14">Enviar</button>
                        </div>
                    </div>
                </Form>
            </div>
        </section>
    );
}

export default UpdateProfileContainer;