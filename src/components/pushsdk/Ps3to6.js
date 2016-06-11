require('../../styles/sdk/Pl3to5.less');

import React from 'react';

let ps3img = '../../images/pushsdk/ps3img.svg';
let ps4img = '../../images/pushsdk/ps4img.svg';
let ps5img = '../../images/pushsdk/ps5img.svg';
let ps6img = '../../images/pushsdk/ps6img.svg';

class Ps3to6 extends React.Component {

  render() {
    return (
      <div className="pl3to5-box">

        <div className="pl3-box">
          <div className="pl3-box-left">
            <div className="pl3-box-mid">
              <div className="pl3-title">给你的观众秒开的快感</div>
              <div className="pl3-inner">
                Pili 根据移动网络环境的多变性（网络带宽-弱网优化），实<br/>
                现了一套可供开发者灵活选择的编码参数集合，可让你灵活<br/>
                调节相应分辨率和码率。
              </div>
            </div>
          </div>
          <div className="pl3-imgbox">
            <img src={ps3img}/>
          </div>
        </div>

        <div className="pl4-box">
          <div className="pl4-imgbox">
            <img src={ps4img}/>
          </div>
          <div className="pl4-box-left">
            <div className="pl4-box-mid">
              <div className="pl4-title">给你的观众秒开的快感</div>
              <div className="pl4-inner">
                Pili 根据移动网络环境的多变性（网络带宽-弱网优化），实<br/>
                现了一套可供开发者灵活选择的编码参数集合，可让你灵活<br/>
                调节相应分辨率和码率。
              </div>
            </div>
          </div>
        </div>

        <div className="pl5-box">
          <div className="pl5-box-left">
            <div className="pl5-box-mid">
              <div className="pl5-title">给你的观众秒开的快感</div>
              <div className="pl5-inner">
                Pili 根据移动网络环境的多变性（网络带宽-弱网优化），实<br/>
                现了一套可供开发者灵活选择的编码参数集合，可让你灵活<br/>
                调节相应分辨率和码率。
              </div>
            </div>
          </div>
          <div className="pl5-imgbox">
            <img src={ps5img}/>
          </div>
        </div>

        <div className="pl4-box">
          <div className="pl4-imgbox">
            <img src={ps6img}/>
          </div>
          <div className="pl4-box-left">
            <div className="pl4-box-mid">
              <div className="pl4-title">给你的观众秒开的快感</div>
              <div className="pl4-inner">
                Pili 根据移动网络环境的多变性（网络带宽-弱网优化），实<br/>
                现了一套可供开发者灵活选择的编码参数集合，可让你灵活<br/>
                调节相应分辨率和码率。
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

Ps3to6.defaultProps = {
};

export default Ps3to6;