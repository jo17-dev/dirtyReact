import { useState } from "react";


const Main =() =>{
    const [bol, setBol] = useState(0);

    function incremen(){
        setBol(bol +1);
    }
    

    return (
        <div className="section" onClick={incremen}>
            <h1>Main function</h1>
            <h2>state actuel: {bol} </h2>
        </div>
    );
}

export default Main;