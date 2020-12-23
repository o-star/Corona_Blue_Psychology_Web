import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/AddComment";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Web Page Introduction</h2>
          <h5 className={classes.description}>
            길어지고 있는 코로나 사태로 인해 오랫동안 사회적 거리두기 운동이 진행되고 있다.<br/>
            이런 상황 속에서 많은 국민들은 신체적 피로감은 물론이고 정신적 스트레스에 고통받고 있는 중이다.<br/>
            본 웹 페이지에서는 스스로의 정신건강을 자가 테스트하고 코로나 블루 극복 방법에 대한 정보를 얻어갈 수 있다.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Self-Psychological Test"
              description="간단한 자가 심리 테스트를 통해 코로나 블루지수를 측정"
              icon={VerifiedUser}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Acquisition of Information"
              description="코로나 블루 관련 정보와 극복 방법 정보 스크랩 제공"
              icon={Chat}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Corona Status"
              description="코로나 관련 정보 수집 및 제공"
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
