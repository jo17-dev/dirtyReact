import { useState } from "react";

const useHidding = (initialValue)=>{
    const [state, setState] = useState(initialValue);   
    
    const toogle = ()=>{
        setState(!state);
    }
    
    return [state, toogle];
}

export default useHidding;