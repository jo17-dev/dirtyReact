import { useState } from "react";
import TaskItem from "./TaskItem.jsx";
import "./app.css";
// You shoud add This component if you want yo display this todoApp

const App = () =>{
    const [tasks, setTasks] = useState(["Premiere tache", "deuxieme tache"]); //the state who save all the tasks

    const addItem = () =>{ // operation of setting a new task 
        if(document.getElementById('name').value !== ''){ 
            setTasks(tasks.concat(document.getElementById('name').value));
        }
    }

    const deleteItem = (cle, name)=>{
        // ici On entre les choss qui nous concnernen exactement..
        console.log(cle+ " "+ name);

        setTasks(
            tasks.reverse().filter((item, itemkey)=>{
                if(itemkey === cle){
                    return false;
                }else{
                    return true;
                }
            })
        );

    }


    return(
        <div id="app-container">
            <div id="form">
                <input type="text" id="name" placeholder="Enter a new task here"/>
                <button onClick={addItem}>Add</button>
            </div>
            <br />

            <ul>
                {tasks.reverse().map((item, cle)=>{ // here we loop on tasks to print all the datas

                    return (
                        <div key={cle} >
                            <TaskItem title={item}  />
                            <button onClick={()=>{deleteItem(cle, item)}}>Delete</button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;