import React from "react";
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

import circleimg from "assets/img/circle_image.jpg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

import axios from "axios";

const useStyles = makeStyles(styles);


export default function TestPage(props) {

  axios.post("/test-page")
  .then(response => {
     console.log(response);
  })
  .catch(error => {
     console.log(error);
  });

  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const btnStyle = {
    justify: "center",
    color: "yellow",
    background: "teal",
    padding: "1rem 15em",
    border: "1px solid teal",
    borderRadius: "3rem",
    fontSize: "1.1rem",
    lineHeight: 1.5,
  }
  const gridStyle = {
    margin: "3px auto",
    textAlign: "center"
  }
  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
        {...rest}
      />
      <Parallax small filter image={require("assets/img/testimage.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <br/><br/><br/><br/><br/>
                  <div>
                    <img src={circleimg} alt="..." className={imageClasses} />
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem style={gridStyle}>
                <Button style={btnStyle}>yes!</Button>
              </GridItem>
              <GridItem style={gridStyle}>
                <Button style={btnStyle}>no!</Button>
              </GridItem>
            </GridContainer>
          </div>
          <br/><br/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
