import { useState } from "react";
import TaskItem from "./TaskItem.jsx";


const App = () =>{
    const [tasks, setTasks] = useState(["Premiere tache", "deuxieme"]); //the state who save all the tasks

    const addItem = () =>{ // operation of setting a new task 
        if(document.getElementById('name').value != ''){ 
            setTasks(tasks.concat(document.getElementById('name').value));
        }
    }


    return(
        <div>
            <input type="text" id="name"/>
            <button onClick={addItem}>Add</button>
            <br />

            <ul>
                {tasks.reverse().map((item, cle)=>{ // here we loop on tasks to print all the datas
                    const deleteItem = ()=>{
                        console.log(cle);
                        // ici On entre les choss qui nous concnernen exactement..
                    }
                    return (
                        <div key={cle} >
                            <TaskItem title={item}  />
                            <button onClick={deleteItem}>Delete</button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;