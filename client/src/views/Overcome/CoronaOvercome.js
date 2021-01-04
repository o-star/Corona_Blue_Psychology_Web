import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import method1 from "assets/img/method1.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  const imgstyle = {
    height: '300px'
  }

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <div className={classes.title}>
            <h1>How To Ovecome Corona Blue ? ?</h1>
            <br/>
          </div>
          <GridContainer style={{textAlign:'center'}}>
            <div className={classes.typo}>
              <h2 className={classes.content}>불확실한 소문과 정보에 흔들리지 않기</h2>
            </div>
            <div style={{width:'100%'}}>
              <img
                src={method1}
                alt="..."
                style={imgstyle}
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Header 2</div>
              <h2 className={classes.title}>The Life of Material Kit</h2>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Header 3</div>
              <h3 className={classes.title}>The Life of Material Kit</h3>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Header 4</div>
              <h4 className={classes.title}>The Life of Material Kit</h4>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Paragraph</div>
              <p>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at.
              </p>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Quote</div>
              <Quote
                text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                author=" Kanye West, Musician"
              />
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Muted Text</div>
              <Muted>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Muted>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Primary Text</div>
              <Primary>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Primary>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Info Text</div>
              <Info>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Info>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Success Text</div>
              <Success>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Success>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Warning Text</div>
              <Warning>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Warning>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Danger Text</div>
              <Danger>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Danger>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Small Tag</div>
              <h2>
                Header with small subtitle
                <br />
                <Small>Use {'"Small"'} tag for the headers</Small>
              </h2>
            </div>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
