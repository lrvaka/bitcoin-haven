import Container from "../UI/Container/Container";
import Carousel from "../Carousel";
import classes from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  return (
    <Container classes={classes.whatWeDoContainer}>
      <section className={classes.whatWeDo}>
        <div className={classes.titleHead}>
          <h1>Monetary solutions on your terms, not the banks</h1>
        </div>
      </section>
      <Carousel />
    </Container>
  );
};

export default WhatWeDo;
