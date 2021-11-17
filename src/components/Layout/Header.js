import classes from "./Header.module.css";
import HavenLogo from "../../assets/Haven-Logo.png";
import Container from "../UI/Container/Container";

const Header = () => {
  return (
    <Container>
      <header className={classes.header}>
        <img src={HavenLogo} alt="Haven logo" />
        <nav>
          <a href="/">Home</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
