require('../../styles/about7/Absecond.less');

import React from 'react';
let worldmap = '../../images/about/worldmap.svg';
let height = '../../images/about/height.svg';
let low = '../../images/about/low.svg';

class Absecond extends React.Component {

  render() {
    return (
      <div>
        <div className="ab2-box">
          <div className="ab2-slogan1">七牛云服务简介</div>
          <div className="ab2-slogan2">
            七牛直播服务是全球首个用 Go 语言实现的企业级直播流媒体云服务，提供了丰富的覆盖端<br/>
            到端采集、推流和播放功能的 SDK 和相应 Demo，<br/>
            方便开发者快速构建一个稳定可靠的企业级直播产品。
          </div>
        </div>


        <div className="ab3-box">
          <div className="ab2-midbox">
            <div className="ab2-leftbox">
              <div className="ab3-slogan1">
                覆盖全球的节点，<br/>
                让速度更快、更稳定
              </div>

              <div className="ab3-slogan2">
                Pili 根据移动网络环境的多变性（网络带宽-弱网优化），实<br/>
                现了一套可供开发者灵活选择的编码参数集合，可让你灵活<br/>
                调节相应分辨率和码率。
              </div>

            </div>
            <div className="ab2-leftbox">
              <img src={worldmap}/>
            </div>
          </div>

        </div>
        <div className="ab4-box">
          <div className="ab4-midbox">
            <div className="ab4-left">
              <div className="ab4-title">场景功能</div>
              <div className="ab4-subtitle">实时转码</div>
              <div className="ab4-inner">
                收流服务端实时转码，实时输出可选多码率的 HLS/RTMP/<br/>
                FLV 流，灵活适配多终端多平台播放器。
              </div>
              <div className="ab4-subtitle">自动截图</div>
              <div className="ab4-inner">实时最新自动封面，也可以手动截图、历史封面。</div>
            </div>

            <div className="ab4-right">
              <div className="ab4-right-box" >
                <div className="ab4-height">
                  <div>
                    <img src={height}/>
                  </div>
                  <div className="ab4-right-subtitle">高并发、高可用</div>
                </div>
                <div className="ab4-low">
                  <div>
                    <img src={low}/>
                  </div>
                  <div className="ab4-right-subtitle">低延迟、不卡顿</div>
                </div>
                <div className="clean"></div>
              </div>
              <div className="ab4-right-inner">
                全球服务，海量并发<br/>
                · 支持同时万级在线通话人数<br/>
                · 节点弹性扩展，负载均衡<br/>
                · 支持海外节点，全球访问无差别
              </div>
            </div>
          </div>
        </div>
        <div className="ab5-box">
          <div className="ab5-slogan">立即开始，让你的应用拥抱直播</div>
          <div className="ab5-btn">立即开始</div>
        </div>

      </div>
    );
  }
}

Absecond.defaultProps = {
};

export default Absecond;