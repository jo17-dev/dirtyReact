import {useContext} from "react";
import {AppContext} from '../toDoApp/App.jsx'; //  ici on importe la fonction de contexte AppContext qu'on a declarer dans App.jsx pour pouvoir user les données que ce qui est entouré par AppContext.Provider donne

const ContextHookTuto = () =>{
	const {username} = useContext(AppContext);
	return (
		<div className="section">
			<h1>Bref test pour le create Context</h1>
			<h2> my name (provided by the useContext hook) is: { username } </h2>
		</div>
	);
}

export default ContextHookTuto;