import {App, AppContext} from '../toDoApp/App.jsx'; //  ici on importe la fonction de contexte AppContext qu'on a declarer dans App.jsx pour pouvoir user les données que ce qui est entouré par AppContext.Provider donne
import Name from "./Name.jsx";

const ContextHookTuto = () =>{

	return (
		<div className="section">
			<h1>Bref test pour le create Context</h1>
			<Name />
		</div>
	);
}

export default ContextHookTuto;