import { useState } from "react";

function Tuto(){
    var main = "Use States";
    const [age, setAge] = useState(17);
    const [text, setText] = useState("");
    const [saw, setSaw] = useState(true);

    let outputText = "";

    const increaseAge = () =>{
        setAge(age +1);
        console.log(age);
    }

    const display = (e)=>{
        setText(e.target.value);
    }

    const showHide = (e)=>{
        setSaw(!saw);
        console.log(saw);
    }


    return (
        <div className="section">
            <h1>Test by dot JSX {main} </h1>
            {age} <button onClick={increaseAge}>Increase the age</button>
            <input type="text" onChangeCapture={display}/>
            {saw && <h1 id="dis">Displaying: {text} </h1>} <button onClick={showHide} >Show/ Hide the content</button>
        </div>
    );
}

export default Tuto;