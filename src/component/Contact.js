import { useEffect } from "react";

const Contact = ()=>{
    useEffect(()=>{
        alert("Ahla")
    }
    )
    return(
        <div>
            <h1> Contactez nous</h1>
            <form>
                <label>Email
                <input onChange={function text(){console.log("hello!")}}
                type="email" placeholder="the email"/> 
                </label>
                <label> message:
                <input type="text"/>
                </label>
            </form>
        </div>
    );
}
export default Contact;