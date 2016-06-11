require('../../styles/sdk/Plfirst.less');

import React from 'react';
import { Button } from 'antd';

let sdklogo = "../../images/playsdk/sdklogo.svg";
let iphoneImg = "../../images/homepage/iphoneImg.png";


class Psfirst extends React.Component {

  render() {
    return (
      <div>
        <div className="ps-first">
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
                <div className="ps-begin-btn" >立即开始</div>
                <div className="ps-realize-btn" >了解产品</div>
              </div>
            </div>
          </div>
          <div className="pl-first-right">
            <div className="pl-first-imgplace">
              <img className="pl-first-imgsize2" src={iphoneImg}/>
            </div>
          </div>
        </div >
      </div>
    );
  }
}

Psfirst.defaultProps = {
};

export default Psfirst;
