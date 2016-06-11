require('../../styles/update/Upthird.less');

import React from 'react';
let update = '../../images/update/update.svg';


class Upthird extends React.Component {

  render() {
    return (
      <div className="update3-box">
        <div className="update3-width">
          <div className="update3-icon">
            <img src={update} />
          </div>
          <div className="update3-inner">
            <span className="update3-inner-title">5 月 21 日更新</span><br/>
            <span className="update3-subtitle">v2.4.55</span><br/><br/>

            <span className="update3-subtitle">功能</span><br/>
            <span>
              新增后台推流<br/>
              新增 64kbps 音频码率支持
            </span>
            <br/><br/>

            <span className="update3-subtitle">缺陷</span><br/>
            <span>修复 iPhone 6s 上出现的电流音问题</span>
            <br/><br/>

            <span className="update3-subtitle">其他</span><br/>
            <span>部分接口重命名</span>
            <br/><br/>

            <span className="update3-subtitle">特别说明</span><br/>
            <span>
              从 v1.1.6 开始，在使用 SDK 之前，需要保证 PLStreamingEnv 被正确初始化，<br/>
              否则在初始化核心类 PLStreamingSession 的阶段会抛出异常。一般建议在 `- <br/>
              application:didFinishLaunchingWithOptions:` 中进行初始化。详细请参考：<br/>
              https://github.com/pili-engineering/PLStreamingKit/wiki#3.2 <br/><br/>

              通过 pod install/update 进行安装/升级，如果未能获取到最新版本，请先运行 <br/>
              pod setup 更新 pods spec 文件。
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Upthird.defaultProps = {
};

export default Upthird;