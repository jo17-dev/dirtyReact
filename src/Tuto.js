import './tuto.css';

// function Tuto(user='Pedro Tech'){
//     return (<h1>Tuto de {user}</h1>);
// }

const Tuto = (props) =>{
    return (
        <ul className="text-3xl">
            <li>{props.user}</li>
            <li>{props.test}</li>
        </ul>
    
    );
}

export default Tuto;