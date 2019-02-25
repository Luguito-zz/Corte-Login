import React from 'react';
/* Css */
import '../css/NewFormBotton.css';

const NewFormBotton = (props) =>{
    return(
        <div>
            <div className="row">
                <a href="#" className="col-8 n-a-link-text">{props.link}</a>
            </div>
            <button className="col-8 n-a-button-size n-a-button-color
            n-a-button-font n-a-button-position">{props.name}</button>
        </div>
    )
}

export default NewFormBotton;