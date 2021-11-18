import { Fragment } from "react";
import { useState } from "react";
import classes from "./Carousel.module.css";
import AllInOne from "../assets/All-In-One.svg";
import BuildingBlocks from "../assets/Building-Blocks.svg";
import InvestTrade from "../assets/Invest-Trade.svg";
import LendBorrow from "../assets/Lend-Borrow.svg";

const DUMMY_BUTTONS = [
  { title: "All-in-one" },
  { title: "Build & Integrate" },
  { title: "Invest & Trade" },
  { title: "Borrow & Lend" },
];

const DUMMY_SLIDES = [
  {
    title: "All-in-one",
    image: AllInOne,
    description: "All your Bitcoin financing options in one place.",
  },
  {
    title: "Build & Integrate",
    image: BuildingBlocks,
    description:
      "Customize your own Bitcoin financing products for yourself or others.",
  },
  {
    title: "Invest & Trade",
    image: InvestTrade,
    description:
      "Invest long-term or trade short-term with spot, futures, margin, etc.",
  },
  {
    title: "Borrow & Lend",
    image: LendBorrow,
    description:
      "Borrow against your Bitcoin or earn interest on your Bitcoin.",
  },
];

const Carousel = () => {
  const [selectedSlide, setSelectedSlide] = useState(0); // we start at the first slide of carousel

  const selectSlideHandler = (index) => {
    setSelectedSlide(index);
  };

  const SlideButtons = DUMMY_BUTTONS.map((e, index) => (
    <button key={index} onClick={() => selectSlideHandler(index)}>
      {e.title}
    </button>
  ));

  const Slide = (
    <div className={classes.slide}>
      <img
        src={DUMMY_SLIDES[selectedSlide].image}
        alt="everything you need in one place"
      />
      <h3>{DUMMY_SLIDES[selectedSlide].description}</h3>
    </div>
  );

  return (
    <Fragment>
      <div className={classes.buttonSection}>{SlideButtons}</div>
      {Slide}
    </Fragment>
  );
};

export default Carousel;
