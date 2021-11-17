import classes from "./Hero.module.css";
import BitcoinHeroImage0 from "../../assets/Bitcoin-Hero-Image0.svg";
import BitcoinHeroImage1 from "../../assets/Bitcoin-Hero-Image1.svg";
import Container from "../UI/Container/Container";
import HeroVideo from "../../assets/Hero-Video.mp4";
import HeroVideo1 from "../../assets/Hero-Video.ogv";
import HeroVideo2 from "../../assets/Hero-Video.webm";

const Hero = () => {
  return (
    <Container classes={classes.overflow}>
      <div className={classes.hero}>
        <video autoplay="" muted="" loop>
          <source src={HeroVideo} type="video/mp4" />
          <source src={HeroVideo1} type="video/ogv" />
          <source src={HeroVideo2} type="video/webm" />
        </video>
        <section>
          <h1>
            <span>Bitcoin</span>, value by the many for the many
          </h1>
          <p>
            Offering the best solutions to create and store your wealth, for
            everyone
          </p>
        </section>
        <img src={BitcoinHeroImage0} alt="bitcoin hero" />
        <img src={BitcoinHeroImage1} alt="bitcoin hero" />
      </div>
    </Container>
  );
};

export default Hero;
