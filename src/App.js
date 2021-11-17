import classes from "./App.module.css";
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import WhatWeDo from "./components/Sections/WhatWeDo";
import { Fragment } from "react";
import ThreePillars from "./components/Sections/ThreePillars";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <main className={classes.background}>
        <WhatWeDo />
        <ThreePillars />
      </main>
    </Fragment>
  );
}

export default App;
