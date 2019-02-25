import React,{Component} from 'react'
    /* Components */
import FormButton from './Buttons';
import NewAccountButton from './NewAccountButton';
    /* Css */
import '../css/Inputs.css';

class InputLogin extends Component{
    render(){
        return(
            <div className="container-fluid">
                <form>
                    <div className="row">
                        <input type="email" className="col-8 m-inputs text-color" placeholder="Correo Electronico"/>
                    </div>
                    <div className="row">
                        <input type="password" className="col-8 m-inputs text-color" placeholder="Password"/>
                    </div>
                    <FormButton name="Iniciar Sesión" link="¿Olvidaste tu contraseña?"/>
                </form>

                <NewAccountButton name="Crea una Cuenta" link="¿No tienes cuenta?"/>
            </div>
        )
    }
}

export default InputLogin;