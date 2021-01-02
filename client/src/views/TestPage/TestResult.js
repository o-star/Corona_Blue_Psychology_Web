import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function TestResult(props) {
  const classes = useStyles();
  let contents;
  console.log(props.score);
  if (props.score <= 9) {
    contents =
      <GridItem xs={12} sm={12} md={8}>
        <h2>Your Test Result : {props.score} </h2>
        <h3> 0 ~ 9 : 코로나를 잘 헤쳐나가고 있는 당신! 아주 칭찬합니다! </h3>
        <h4>
          하지만 방심은 금물 코로나 블루는 언제나 당신에게도 닥쳐올 수 있는 심리질환입니다
          마스크와 사회적 거리두기 운동은 물론이고 당신의 심리 건강에도 항상 관심을 기울인다면 이 힘든
          상황도 충분히 이겨내실 수 있다고 확신합니다. 지금까지 잘 이겨냈듯이 우리 모두 마스크를 벗을 수 있는
          그 날 까지 코로나는 물론이고 코로나 블루도 함께 이겨나가 봅시다
        </h4>
      </GridItem>
  }
  else if (props.score <= 15) {
    contents =
      <GridItem xs={12} sm={12} md={8}>
        <h2>Your Test Result : {props.score} </h2>
        <h3> 10 ~ 15 : 가벼운 코로나 블루 스트레스를 겪고 계십니다. </h3>
        <h4>
          현재 굉장히 오랫동안 지속되고 있는 사회적 거리두기 운동으로 인해 누구나 한 번 쯤 겪을 수 있는
          코로나 우울 증세입니다. 큰 걱정을 하진 않아도 되지만 지속된 우울 증세는 꽤나 심각한 심리 우울 증세를
          유발할 수 있습니다. 우울 감정을 사전에 차단하고 사회적 거리두기 상황에서도 감정을 잘 제어할 수 있는
          방법을 찾으실 필요가 있습니다.
        </h4>
      </GridItem>
  }
  else if (props.score <= 23) {
    contents =
      <GridItem xs={12} sm={12} md={8}>
        <h2>Your Test Result : {props.score} </h2>
        <h3> 16 ~ 23 : 코로나로 인해 심리 건강 적신호가 예상됩니다. </h3>
        <h4>
          코로나 이후 일상과 많이 달라진 탓에 많은 심리 우울 증세를 겪으시고 있는 것으로 예상됩니다.
          어쩌면 많은 일상의 변화와 모든 이들이 동일한 고통을 겪고 있기 때문에 자신의 심리 상태에 무뎌졌을
          가능성도 있습니다. 하지만 반드시 신체 건강만이 흔적이 남는 것은 아닙니다. 심각한 코로나 상황일수록
          자신의 심리 상태를 면밀히 살필 필요가 있습니다.
        </h4>
      </GridItem>
  }
  else {
    contents =
      <GridItem xs={12} sm={12} md={8}>
        <h2>Your Test Result : {props.score} </h2>
        <h3> 24점 이상 : 심각한 코로나 우울 증상이 보입니다. 코로나 블루 관련 치료를 권유합니다. </h3>
        <h4>
          본 점수의 경우 상당히 심각한 우울 증상을 조심스레 예상해봅니다.
          만약 개인의 자발적인 노력만으로 본 상황을 극복하기 힘드시다면 꼭 심리 관련 상담 센터를 방문하시기를
          권유드립니다. 분명 코로나 상태가 종식됨가 동시에 당신의 심리 상태 또한 빠른 시일 내에 안정 상태를 
          찾을 수 있을 것입니다!
        </h4>
      </GridItem>
  }
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          {contents}
        </GridContainer>
      </div>
    </div>
  );
}
