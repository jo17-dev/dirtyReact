import { useState } from "react";

function App(){
    var tab ="Premier";

    const [tasks, setTasks] = useState([tab]);


    function addTask(){
        {
            tab.push(document.getElementById('name').value);
            setTasks(
                tasks.push(document.getElementById('name').value)
            );
            console.log(tasks);
        };
    }

    return (
        <>
                <input type="text" name="name" id="name" />
                <button onClick={addTask}>Add</button><br />
            
            {
                tasks.map(function(item, key){
                    console.log(key)
                    return <Task title={item} key={key} />;
                })
            }

        </>
    );
}

function Task(props){
    return <p>{props.title}</p>;
}

export default App;