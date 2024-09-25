import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {

    return (
        <header>
            <nav>
                <ul className="nav">
                    <li>
                        <Link to="/">Medication List</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

};

export default Header;