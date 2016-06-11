require('../../styles/about7/Abfirst.less');

import React from 'react';

class Epfirst extends React.Component {

  render() {
    return (
      <div className="ep1-box">
        <div className="ab1-slogan1">企业服务</div>
        <div className="ab1-slogan2">定制化你的直播需求</div>
        <div className="ab1-slogan3">
          我们崇尚互联网简单、开源的精神，SDK 部分完全开源免费提<br/>
          供。另外提供了企业级的定制服务，欢迎咨询。
        </div>
        <div className="ep1-btn">立即开始</div>
      </div>
    );
  }
}

Epfirst.defaultProps = {
};

export default Epfirst;