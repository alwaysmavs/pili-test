require('../../styles/sdk/Plsecond.less');

import React from 'react';

let ps2a = "../../images/pushsdk/ps2a.svg";
let ps2b = "../../images/pushsdk/ps2b.svg";
let ps2c = "../../images/pushsdk/ps2c.svg";


class Pssecond extends React.Component {

  render() {
    return (
      <div className="pl2-box">
        <div className="pl2-title">从解码，到播放</div>
        <div className="pl2-line2">

          <div className="pl2-innerbox">
            <div className="pl2-imgbox">
              <img className="pl2a" src={ps2a}/>
            </div>
            <div className="pl2-subtitle">拉流</div>
            <div className="pl2-subinner">
              可使用手机摄像头或者直接对屏幕进行录制<br/>
              视频录制，音频可调用内置或外接麦克风。
            </div>
          </div>

          <div className="pl2-innerbox">
            <div className="pl2-imgbox">
              <img className="pl2b" src={ps2b}/>
            </div>
            <div className="pl2-subtitle">拉流</div>
            <div className="pl2-subinner">
              可使用手机摄像头或者直接对屏幕进行录制<br/>
              视频录制，音频可调用内置或外接麦克风。
            </div>
          </div>

          <div className="pl2-innerbox">
            <div className="pl2-imgbox">
              <img className="pl2c" src={ps2c}/>
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

Pssecond.defaultProps = {
};

export default Pssecond;
