import React from 'react';
/* Css */
import '../css/FormButtons.css';

const FormButtons = (props) =>{
    return(
        <div>
            <div className="row">
                <a href="#" className="col-8 text-center link-text">{props.link}</a>
            </div>
            <button className="col-8 button-font button-size button-color button-position">{props.name}</button>
        </div>
    )
}

export default FormButtons;