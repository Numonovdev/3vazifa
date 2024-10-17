import { ThemeContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <h1 className="nav-h1">Document</h1>     
      <div>
        <Link className="NavbarLink" to='/'>Home</Link>
        <Link className="NavbarLink" to='/about'>About</Link>
        <Link className="NavbarLink" to='/contact'>Contact</Link>
      </div>
      <select className="select" value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export default Header;
