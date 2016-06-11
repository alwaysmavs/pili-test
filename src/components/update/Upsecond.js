require('../../styles/update/Upsecond.less');

import React from 'react';

let pushsdk = '../../images/playsdk/sdklogo2.svg';

class Upsecond extends React.Component {

  render() {
    return (
      <div className="update2-box">
        <div className="update2-sdklogobox">
          <img src={pushsdk}/>
        </div>
        <div className="update2-title">
          播放器 SDK
        </div>
        <div className="update1-switchbox">
          <div className="update2-switch1">

          </div>
          <div className="update2-switch2">

          </div>
        </div>
      </div>
    );
  }
}

Upsecond.defaultProps = {
};

export default Upsecond;