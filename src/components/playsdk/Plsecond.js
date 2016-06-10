require('../../styles/playsdk/Plsecond.less');

import React from 'react';

let pl2a = "../../images/playsdk/pl2a.svg";
let pl2b = "../../images/playsdk/pl2b.svg";
let pl2c = "../../images/playsdk/pl2c.svg";


class Plsecond extends React.Component {

  render() {
    return (
      <div className="pl2-box">
        <div className="pl2-title">从解码，到播放</div>
        <div className="pl2-line2">

          <div className="pl2-innerbox">
            <div className="pl2-imgbox">
              <img className="pl2a" src={pl2a}/>
            </div>
            <div className="pl2-subtitle">拉流</div>
            <div className="pl2-subinner">
              可使用手机摄像头或者直接对屏幕进行录制<br/>
              视频录制，音频可调用内置或外接麦克风。
            </div>
          </div>

          <div className="pl2-innerbox">
            <div className="pl2-imgbox">
              <img className="pl2b" src={pl2b}/>
            </div>
            <div className="pl2-subtitle">拉流</div>
            <div className="pl2-subinner">
              可使用手机摄像头或者直接对屏幕进行录制<br/>
              视频录制，音频可调用内置或外接麦克风。
            </div>
          </div>

          <div className="pl2-innerbox">
            <div className="pl2-imgbox">
              <img className="pl2c" src={pl2c}/>
            </div>
            <div className="pl2-subtitle">拉流</div>
            <div className="pl2-subinner">
              可使用手机摄像头或者直接对屏幕进行录制<br/>
              视频录制，音频可调用内置或外接麦克风。
            </div>
          </div>

        </div>
      </div>
    );
  }
}

Plsecond.defaultProps = {
};

export default Plsecond;
