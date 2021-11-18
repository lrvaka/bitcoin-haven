import Container from "../UI/Container/Container";
import classes from "./ThreePillars.module.css";
import Security from "../../assets/Security.svg";
import Transparency from "../../assets/Transparency.svg";
import Autonomy from "../../assets/Autonomy.svg";

const DUMMY_CARDS = [
  {
    title: "Security",
    image: Security,
    emoji: "🔐 ",
    color: classes.red,
    description: "Multisignature storage with distributed keys",
  },
  {
    title: "Transparency",
    image: Transparency,
    emoji: "🪟 ",
    color: classes.green,
    description: "On-chain addresses that are easy to monitor",
  },
  {
    title: "Autonomy",
    image: Autonomy,
    emoji: "🗽 ",
    color: classes.blue,
    description: "Choose how much control you wish to retain",
  },
];

const ThreePillars = () => {
  const ThreeCards = (
    <div className={classes.threeCards}>
      {DUMMY_CARDS.map((e) => (
        <div className={`${classes.card} ${e.color}`}>
          <h1>
            {e.emoji}
            {e.title}
          </h1>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
  return (
    <Container classes={classes.container}>
      <section className={classes.threePillars}>
        <h1>Havens Three Pillars</h1>
        {ThreeCards}
      </section>
    </Container>
  );
};

export default ThreePillars;
