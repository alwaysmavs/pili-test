require('../../styles/playsdk/Plfirst.less');

import React from 'react';
import { Button } from 'antd';

let sdklogo = "../../images/playsdk/sdklogo.svg";
let nexusImg = "../../images/homepage/nexusImg.png";


class Plfirst extends React.Component {

  render() {
    return (
      <div>
        <div className="pl-first">
          <div className="pl-first-left">
            <div className="pl-first-inner">
              <div>
                <img src={sdklogo} />
              </div>
              <div className="pl-first-slogan1">
                播放器 SDK
              </div>
              <div className="pl-first-slogan2">
                <span className="pl-text2-postion">
                强大的播放解码 SDK，专注直播而不限于播放直播流，<br/>
                可高度定制化和二次开发。
                </span>
              </div>
              <div className="pl-first-btn">
                <div className="pl-begin-btn" >立即开始</div>
                <div className="pl-realize-btn" >了解产品</div>
              </div>
            </div>
          </div>
          <div className="pl-first-right">
            <div className="pl-first-imgplace">
              <img className="pl-first-imgsize2" src={nexusImg}/>
            </div>
          </div>
        </div >
      </div>
    );
  }
}

Plfirst.defaultProps = {
};

export default Plfirst;
