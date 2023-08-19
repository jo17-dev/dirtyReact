import { useContext } from "react";
import { AppContext } from "../toDoApp/App.jsx";

const Name = function(){
    // const {username} = useContext(AppContext);

    return (
            <>
        
			<h2> my name (provided by the useContext hook) is: {"username"} </h2>
            <p>This is not working because i didn't do well the hierrarchy and structure of this "app". check an other repositry to look this concept implement correctly by me</p>
            </>
    );
}

export default Name;