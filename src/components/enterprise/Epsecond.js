require('../../styles/enterprise/Epsecond.less');

import React from 'react';

class Epsecond extends React.Component {

  render() {
    return (
      <div className="ep2-box">
        <div className="ep2-line1">
          <div className="ep2-line1-left">
            <div className="ep2-line1-innerbox">
              <div className="ep2-line1-title">专业技术客服团队</div>
              <div className="ep2-line1-inner">
                收流服务端实时转码，实时输出可选多码率的 HLS/RTMP/<br/>
                FLV 流，灵活适配多终端多平台播放器。
              </div>
            </div>
          </div>
          <div className="ep2-line1-right">
            <div className="ep2-line1-headbox">
              <div className="ep2-line1-head"></div>
              <div className="ep2-line1-head"></div>
              <div className="ep2-line1-head"></div>
              <div className="ep2-line1-head"></div>

              <div className="ep2-line1-head"></div>
              <div className="ep2-line1-head"></div>
              <div className="ep2-line1-head"></div>
              <div className="ep2-line1-head"></div>

              <div className="ep2-line1-head"></div>
              <div className="ep2-line1-head"></div>
              <div className="ep2-line1-head"></div>
              <div className="ep2-line1-head"></div>

            </div>
          </div>
          <div className="clean"></div>
        </div>

        <div className="ep2-line2">
          <div className="ep2-part"></div>
          <div className="ep2-part"></div>
          <div className="ep2-part"></div>
          <div className="ep2-part"></div>
        </div>
      </div>
    );
  }
}

Epsecond.defaultProps = {
};

export default Epsecond;