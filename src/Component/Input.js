import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Input(props) {
    let [input, setInput] = useState("");

    function cambio(e) {
        setInput(e.target.value);
    }

    function agrego(e) {
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),      
            text: input
        })

        setInput("")
        
        
    }


    return (
        <>
        <form className="input" onSubmit={agrego}>
            <div className="input-group mb-3" >
                <input
                type="text" 
                className="form-control"
                onChange={cambio}
                name="text"
                value={input}>
                </input>

                <div className="input-group-append">
                    <button className="btn btn-outline-primary"  type="submit" id="button-addon2" >Add</button>
                </div>
            </div>
        </form>    
            
        </>
    )
}
 
export default Input;