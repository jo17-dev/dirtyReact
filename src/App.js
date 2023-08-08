import './app.css';

// App component
function App(){
    return (
    <div className="section">
        <List />
        <Job salary={50000} position="web ingrator" company="fatfish" className="section"/>
        <Job salary={80000} position="intermediate react developer" company="fatfish" />
        <Job salary={120000} position="Full Stack developer" company="CGI" />
    </div>
    );
}

// job componenent: this is used on App component
const Job = (props) =>{
    var statut="low price", isGreen=false;
    if( props.salary <=90000 ){
        isGreen=false;
    }else{
        statut="great price";
        isGreen=true;
    }
    return (
    <>
        <section className='job-item'>
            <h1>salary: {props.salary}</h1>
            <h2>posision {props.position}</h2>
            <h2>Company {props.company}</h2>
            <h2>Statut: <strong style={{color : isGreen ? "green" : "red"}}> {statut} </strong> </h2>
        </section>
    </>);
}

const List =() =>{
    var names = [
        "Joel",
        "Bertrand",
        "tsafack",
        "Bobo",
        "Meli"
    ];

    return (
        <ul>
            {names.map((value, key)=>{
                return <li key={key}> {value} </li>
            })}
        </ul>
    )
}
// export The main component
export default App;