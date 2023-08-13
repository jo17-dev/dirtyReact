import { useState } from 'react';
import '../tictackapp.css';
const ApiData = () =>{
    const [fact, setFact] = useState("");

   const generateCatFact = function(){
        fetch("https://catfact.ninja/fact?max_length=100")
        .then(
            (res)=>res.json()
        ).then(
            (data)=>{
                setFact(data.fact);
            }
        )
    }

    return (
        <div className="section">
            <h1>Api data by pedro tech</h1>
            <button onClick={generateCatFact}>generate cat facts</button>
            <h1>content:  {fact} </h1>
        </div>
    )
}

export default ApiData;