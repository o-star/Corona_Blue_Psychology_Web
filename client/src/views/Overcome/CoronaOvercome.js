import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";

import method1 from "assets/img/method1.png";
import method2 from "assets/img/method2.jpg";
import method3 from "assets/img/method3.jpg";
import method4 from "assets/img/method4.jpg";

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
          <GridContainer style={{ textAlign: 'center' }}>
            <div className={classes.divstyle}>
              <h1 className={classes.content}>How To Ovecome Corona Blue ? ?</h1>
              <br /><br />
            </div>
            <div className={classes.divstyle}>
              <h2 className={classes.content}>불확실한 소문과 정보에 흔들리지 않기</h2>
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
              <h4 className={classes.content}>
                인터넷과 각종 매체에서는 확실하지 않은 코로나 정보들이 끊임없이 돌아다니고 있다.<br />
                이런 신빙성 없는 이야기들을 모두 신경쓴다면 매우 혼란스럽고 괴로울 것이다.<br />
                확실한 정보가 아니라면 근거 없는 정보들에 휘둘리지 말자!<br />
              </h4>
            </div>
            <div className={classes.divstyle}>
              <h2 className={classes.content}>홈트레이닝 생활화하기</h2>
              <img
                src={method2}
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
              <h4 className={classes.content}>
                사회적 거리두기 운동의 계속된 연장으로 인해 활동량이 매우 떨어질 수 밖에 없다.<br />
                최근 이러한 영향으로 홈트레이닝이 큰 인기를 끌고 있다.<br />
                집 내부에서도 운동을 병행할 수 있는 홈트레이닝 취미를 가져보는 것은 어떨까!<br />
              </h4>
            </div>
            <div className={classes.divstyle}>
              <h2 className={classes.content}>생활 패턴 건강하게 유지하기</h2>
              <img
                src={method3}
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
              <h4 className={classes.content}>
                사회적 거리두기로 인해 집 내부에서 지내는 시간이 많아짐에 따라 생활패턴이 꼬이는 경우가 많다.<br />
                생활 리듬이 망가진다면 수면 시간 불균형은 물론 식사량 불균형의 악영향까지 가져온다.<br />
                수면과 식사의 경우 신체 건강은 물론이고 심리 건강에도 매우 중요한 요인다.<br />
                집 안에만 있더라도 생활 리듬을 유지해 알찬 하루를 보내보면 어떨까!<br />
              </h4>
            </div>
            <div className={classes.divstyle}>
              <h2 className={classes.content}>신체적 거리는 멀리, 심리적 거리는 가깝게!</h2>
              <img
                src={method4}
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
              <h4 className={classes.content}>
                사회적 거리두기 운동은 가까운 지인들과 한동안 직접 만나지 못하는 불상사를 만들고 있다.<br />
                이러한 영향 때문에 많은 이들은 소통이 더더욱 단절되고 그에 따른 우울감을 호소하고 있다.<br />
                이럴 때 일수록, 몸이 멀어졌다고 해서 마음이 멀어진 것이 아니라고 생각하는 것이 어떨까?<br />
                지금 당장, 거리두기 운동으로 만나지 못한 지인들과 전화 한 통 하면서 기분은 풀어보자!<br />
              </h4>
            </div>
            <div className={classes.divstyle}>
              <br /><br /><br /><br />
              <h2 className={classes.content}>더 많은 코로나 블루 극복 방안 보러가기</h2>
              <a href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%BD%94%EB%A1%9C%EB%82%98+%EB%B8%94%EB%A3%A8+%EA%B7%B9%EB%B3%B5&oquery=%EC%BD%94%EB%A1%9C%EB%82%98+%EB%B8%94%EB%A3%A8+%EA%B7%B9%EB%B3%B5&tqi=U%2FSyZsprvTossbOO7kZssssss5w-094751'>
                <Button
                  color="rose"
                  size="lg"
                  target="_blank"
                  src="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%BD%94%EB%A1%9C%EB%82%98+%EB%B8%94%EB%A3%A8+%EA%B7%B9%EB%B3%B5&oquery=%EC%BD%94%EB%A1%9C%EB%82%98+%EB%B8%94%EB%A3%A8+%EA%B7%B9%EB%B3%B5&tqi=U%2FSyZsprvTossbOO7kZssssss5w-094751">
                  코로나 블루 극복 방안 검색
                </Button>
              </a>
            </div>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
