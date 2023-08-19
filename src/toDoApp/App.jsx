import { useState, createContext } from "react";
import TaskItem from "../toDoApp/TaskItem.jsx";
import "./app.css";
import ContextHookTuto from "../context/ContexHook.js";
// You shoud add This component if you want yo display this todoApp

export const AppContext = createContext();

const App = () =>{

    const [tasks, setTasks] = useState(["Premiere tache", "deuxieme tache"]); //the state who save all the tasks
    const [username, setUsername] = useState("JoelB");

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

// Note: the useContex can't work because bascily i didnt done well the architecture
    return(
        <>
            <AppContext.Provider value={{username, setUsername}}>
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
            <h2>I am {username}</h2>
            </AppContext.Provider>
        </>
    );
}

export default App;