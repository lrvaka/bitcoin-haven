import Container from "../UI/Container/Container";
import classes from "./ThreePillars.module.css";

const ThreePillars = () => {
  return (
    <Container>
      <div className={classes.threePillars}>
        <h1>Security</h1>
        <h1>Transparency</h1>
        <h1>Autonomy</h1>
      </div>
    </Container>
  );
};

export default ThreePillars;
