/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

import { Link } from "react-router-dom"

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>코로나 블루란?</h2>
            <h4>
              '코로나19'와 '우울감(blue)'이 합쳐진 신조어로,
              코로나19 확산으로 일상에 변화가 닥치면서 생긴 우울감과 무기력증
            </h4>
            <br /><br /><br />
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h2>코로나 블루 자가 테스트 하러 가기</h2>
            <h4>
              코로나 블루 증상을 확인해 보고 자신의 우울지수를 직접 테스트 해 볼 수 있습니다.<br />
              지금 바로 테스트 하러 가기
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Link to="/test-page">
              <Button
                color="primary"
                size="lg"
                target="_blank">
                심리 테스트 시작하기
            </Button>
            </Link>
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>More Info</h2>
            <h4>
              웹페이지 소개 및 코로나 블루 극복, 코로나 현황 등
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Link to='/intro-page'>
              <Button
                color="rose"
                size="lg"
                target="_blank">
                페이지 소개
            </Button>
            </Link>
            <Link to='/overcome-page'>
              <Button
                color="rose"
                size="lg"
                target="_blank">
                코로나 블루 극복 방안
            </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
