import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = ()=>{
    return (
        <div className="link-container">
            <Link to="/" className="link-item">To Do App</Link>
            <Link to="/api" className="link-item">Api testing</Link>
            <Link to="/context" className="link-item">useContext</Link>
            <Link to="/custom-hook" className="link-item"> Custom hook</Link>
            <Link to="/about" className="link-item">About this</Link>

        </div>
    );
}

export default NavBar;