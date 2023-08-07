import './app.css';

// App component
function App(){
    return (
    <div className="section">
        <Job salary={50000} position="web ingrator" company="fatfish" className="section"/>
        <Job salary={80000} position="intermediate react developer" company="fatfish" />
        <Job salary={120000} position="Full Stack developer" company="CGI" />
    </div>
    );
}

// job componenent: this is used on App component
const Job = (props) =>{
    return (
    <>
        <h1>salary: {props.salary}</h1>
        <h2>posision {props.position}</h2>
        <h2>Company {props.company}</h2>
    </>)
}
// export The main component
export default App;