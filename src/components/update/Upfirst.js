require('../../styles/update/Upfirst.less');

import React from 'react';

let pushsdkicon = '../../images/playsdk/sdklogo2.svg';
class Upfirst extends React.Component {

  render() {
    return (
      <div className="update1-box">
        <div className="update1-slogan1">
          更新日志
        </div>
        <div className="update1-slogan2">
          只为让这个世界更加实时稳定地发生联系。
        </div>
        <div className="update1-checkbox">
          <div className="update1-pushbox">
            <div className="update1-icon">
              <img src={ pushsdkicon }/>
            </div>
            <div className="update1-title">
              播放器 SDK
            </div>
          </div>
          <div className="update1-playbox">
            <div className="update1-icon">
              <img src={ pushsdkicon }/>
            </div>
            <div className="update1-title">
              播放器 SDK
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Upfirst.defaultProps = {
};

export default Upfirst;