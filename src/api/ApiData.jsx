import { useState } from 'react';
import Axios from "axios";
import "./apidata.css";
const ApiData = () =>{
    const [fact, setFact] = useState("");
    const [age, setAge] = useState();

   const generateCatFact = function(){
    // ****this is how to calling Api with the react abasic way
        fetch("https://catfact.ninja/fact?max_length=100")
        .then(
            (res)=>res.json()
        ).then(
            (data)=>{
                setFact(data.fact);
            }
        )

    /****this is calling Apis by using Axios */
        // Axios.get("https://catfact.ninja/fact?max_length=100").then(
        //     (resp)=>{
        //         setFact(resp.data.fact);
        //     }
        // )

    }

    const predictAge = function(nom){
        Axios.get("https://api.agify.io/?name="+nom).then(
            (resp)=>{
                setAge(resp.data.age);
            }
        )
    }

    return (
        <>
            <div className="section">
                <h1>Api: get cat facts (done with fetch)</h1>
                <button onClick={generateCatFact}>generate cat facts </button>
                <h1>content:  {fact} </h1>
            </div>
            <div className="section">
                <h1>Api: age prediction by name (done with Axios)</h1>
                <input type="text" placeholder='Enter a name. Ex: joel' id="getAgeName"/>
                <button onClick={()=>predictAge(document.getElementById('getAgeName').value)}>predict age</button>
                {age==null? <h2>Not found</h2> : <h2>Content: Almost of those persons have arround  <u>{age}</u> years</h2>}
            </div>
        </>

    )
}

export default ApiData;