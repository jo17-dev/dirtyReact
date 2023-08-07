import { useState } from 'react';
import Button from './Button.js';


function TikTack(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
        if(count == 5){
            console.log("Year");
        }
    }

    function discrement(){
        setCount(count -1);
    }

    return (
        <div className="section">
            <h1>tiktack renderer</h1>
            <button onClick={increment} className="btn px-2 m-4 bg-red-600 rounded text-white hover:font-bold" >Add</button>
            <Button insideText={"State value: "+count}/>
            <button onClick={discrement} className="btn px-2 m-4 bg-red-600 rounded text-white hover:font-bold">Remove</button>
        </div>
    );
}

export default TikTack;