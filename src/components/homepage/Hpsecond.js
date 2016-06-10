require('../../styles/homepage/Hpsecond.less');

import React from 'react';

let useFlow = "../../images/homepage/useFlow.png";

class Hpsecond extends React.Component {

  render() {
    return (
      <div className="hp-sec-box">
        <div className='hp-sec1'>
          <div className='hp-sec1-left'>
            <img className='hp-sec1-img' src={useFlow}/>
          </div>
          <div className='hp-sec1-right'>
            <div className='hp-sec1-inner'>
              <div className='hp-sec1-slogan1'>
                一切，因你而「流」
              </div>
              <div className='hp-sec1-slogan2'>
              从主播端，到观众端的一站式解决从音视频采集、<br/>
              到编码推流、分发网络到观众端解码播放。
              </div>
            </div>
          </div>
        </div>
        <div className='hp-sec2'>
          <div className='hp-sec2-cell'>
            <div className='hp-sec2-box'>
              <div className='hp-sec2-inner1'>
                <div className='hp-sec2-textA'>1</div>
              </div>
              <div className='hp-sec2-inner2'>推流 SDK</div>
              <div className='hp-sec2-inner3'>录制、打包压缩、推流</div>
              <div className='hp-sec2-inner4'>
                <div className='hp-sec2-btnA' >了解详情</div>
              </div>
            </div>
          </div>
          <div className='hp-sec2-cell'>
            <div className='hp-sec2-box'>
              <div className='hp-sec2-inner1'>
                <div className='hp-sec2-textB'>2</div>
              </div>
              <div className='hp-sec2-inner2'>推流 SDK</div>
              <div className='hp-sec2-inner3'>录制、打包压缩、推流</div>
              <div className='hp-sec2-inner4'>
                <div className='hp-sec2-btnB' >了解详情</div>
              </div>
            </div>
          </div>
          <div className='hp-sec2-cell'>
            <div className='hp-sec2-box'>
              <div className='hp-sec2-inner1'>
                <div className='hp-sec2-textC'>3</div>
              </div>
              <div className='hp-sec2-inner2'>推流 SDK</div>
              <div className='hp-sec2-inner3'>录制、打包压缩、推流</div>
              <div className='hp-sec2-inner4'>
                <div className='hp-sec2-btnC' >了解详情</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Hpsecond.defaultProps = {
};

export default Hpsecond;
