import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import TestResult from "./TestResult.js"

import circleimg from "assets/img/circle_image.jpg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

import { questiontable, replytable } from "./TestItemTable.js"

const useStyles = makeStyles(styles);


export default function TestPage({ addScore, setScore, resetScore }) {
  const [number, setNumber] = useState(1);
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const btnStyle = {
    justify: "center",
    color: "white",
    background: "#22abe6",
    padding: "1rem 0rem",
    width: "400px",
    border: "1px solid #22abe6",
    borderRadius: "3rem",
    fontSize: "1.1rem",
    lineHeight: 1.5,
  }
  const gridStyle = {
    margin: "3px auto",
    textAlign: "center"
  }
  let testComp;
  if (number === 1 && setScore() > 0) resetScore();
  if (number >= questiontable.length) testComp = <TestResult score={setScore()} />;
  else
    testComp = <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <div className={classes.profile}>
            <br />
            <div className={classes.textCenter} justify="center">
              <h2>코로나 블루 우울 심리 테스트</h2>
            </div>
            <br /><br /><br /><br /><br />
            <div>
              <img src={circleimg} alt="..." className={imageClasses} />
            </div>
          </div>
        </GridItem>
      </GridContainer>
      <div className={classes.description}>
        <h3>
          {questiontable[number]}
        </h3>
      </div>
      <GridContainer justify="center">
        <GridItem style={gridStyle}>
          <Button onClick={() => {
            addScore(0);
            setNumber(number + 1);
          }} style={btnStyle}>{replytable[number][0]}</Button>
        </GridItem>
        <GridItem style={gridStyle}>
          <Button onClick={() => {
            addScore(1);
            setNumber(number + 1);
          }} style={btnStyle}>{replytable[number][1]}</Button>
        </GridItem>
        <GridItem style={gridStyle}>
          <Button onClick={() => {
            addScore(2);
            setNumber(number + 1);
          }} style={btnStyle}>{replytable[number][2]}</Button>
        </GridItem>
        <GridItem style={gridStyle}>
          <Button onClick={() => {
            addScore(3);
            setNumber(number + 1);
          }} style={btnStyle}>{replytable[number][3]}</Button>
        </GridItem>
      </GridContainer>
    </div>

  return (
    <div>
      <Header
        color="transparent"
        brand="OVERCOMING CORONA"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
      />
      <Parallax small filter image={require("assets/img/testimage.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          {testComp}
          <br /><br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
