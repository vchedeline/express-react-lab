import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Chedou's Portfolio Page</h1>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
      </nav>
    </header>
  );
}
