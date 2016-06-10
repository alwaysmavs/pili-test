require('../../styles/homepage/Hpfirst.less');

import React from 'react';
import { Button } from 'antd';

let iphoneImg = "../../images/homepage/iphoneImg.png";
let nexusImg = "../../images/homepage/nexusImg.png";

class Hpfirst extends React.Component {

  render() {
    return (
      <div>
        <div className="hp-first">
          <div className="hp-first-left">
            <div className="hp-first-inner">
              <div className="hp-first-slogan1">
                帮你轻松接入直播
              </div>
              <div className="hp-first-slogan2">
                <span className="hp-text2-postion">
                强大全能的 SDK 组，<br/>
                让你的移动应用迅速拥有直播功能。
                </span>
              </div>
              <div className="hp-first-btn">
                <Button className="hp-begin-btn" type="primary" size="large">立即开始</Button>
                <Button className="hp-realize-btn" type="ghost" size="large">了解产品</Button>
              </div>
            </div>
          </div>
          <div className="hp-first-right">
            <div className="hp-first-imgplace">
              <img className="hp-first-imgsize1" src={iphoneImg}/>
              <img className="hp-first-imgsize2" src={nexusImg}/>
            </div>
          </div>
          <div id='stars1'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </div >
      </div>
    );
  }
}

Hpfirst.defaultProps = {
};

export default Hpfirst;
