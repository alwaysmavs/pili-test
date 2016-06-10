require('../../styles/feature/Ftsecond.less');

import React from 'react';

let fticon1 = '../../images/feature/fticon1.svg';
let fticon2 = '../../images/feature/fticon2.svg';
let fticon3 = '../../images/feature/fticon3.svg';
let fticon4 = '../../images/feature/fticon4.svg';
let fticon5 = '../../images/feature/fticon5.svg';
let fticon6 = '../../images/feature/fticon6.svg';
let fticon7 = '../../images/feature/fticon7.svg';
let fticon8 = '../../images/feature/fticon8.svg';


class Ftsecond extends React.Component {

  render() {
    return (
      <div className='ft-two-box'>
        <div className='ft-two-midbox'>
          <div className='ft-two-innerbox'>
            <div className='ft-two-cell'>
              <div className='cell-line1'>
                <img src={fticon1}/>
              </div>
              <div className='cell-line2'>开发友好</div>
              <div className='cell-line3'>
              支持 iOS、Android 所有主流机型的适配，<br/>
              完善详细的开发文档，精简的API封装，<br/>
              完善的事件回调，大大缩短产品开发周期。
              </div>
            </div>
            <div className='ft-two-cell'>
              <div className='cell-line1'>
                <img src={fticon2}/>
              </div>
              <div className='cell-line2'>高自定义</div>
              <div className='cell-line3'>
              PILI 直播云服务提供 iOS/Android 平台的音<br/>
              视频播放器 SDK，<br/>
              支持高度定制化和二次开发.
              </div>
            </div>
            <div className='clean'></div>
          </div>

          <div className='ft-two-innerbox'>
            <div className='ft-two-cell'>
              <div className='cell-line1'>
                <img src={fticon3}/>
              </div>
              <div className='cell-line2'>多平台支持</div>
              <div className='cell-line3'>
              iOS/Android 全平台主流设备支持与覆盖，让<br/>
              你的用户随时随地开始直播。
              </div>
            </div>
            <div className='ft-two-cell'>
              <div className='cell-line1'>
                <img src={fticon4}/>
              </div>
              <div className='cell-line2'>安全可靠</div>
              <div className='cell-line3'>
              支持播放认证防盗链、高级参数加密防盗链。<br/>
              提供安全可靠的直播认证体系，为您的直播保<br/>
              驾护航。
              </div>
            </div>
            <div className='clean'></div>
          </div>

          <div className='ft-two-innerbox'>
            <div className='ft-two-cell'>
              <div className='cell-line1'>
                <img src={fticon5}/>
              </div>
              <div className='cell-line2'>管理平台</div>
              <div className='cell-line3'>
              可管理直播频道，并提供多维度统计数据，实<br/>
              时查看直播流量使用情况。
              </div>
            </div>
            <div className='ft-two-cell'>
              <div className='cell-line1'>
                <img src={fticon6}/>
              </div>
              <div className='cell-line2'>图像美化</div>
              <div className='cell-line3'>
              对采集的视频源进行人脸美化处理，提供多种<br/>
              特效滤镜，可在直播中随意切换。
              </div>
            </div>
            <div className='clean'></div>
          </div>

          <div className='ft-two-innerbox'>
            <div className='ft-two-cell'>
              <div className='cell-line1'>
                <img src={fticon7}/>
              </div>
              <div className='cell-line2'>高效能</div>
              <div className='cell-line3'>
              端到端2秒～4秒延时；<br/>
              业内领先的播放流畅率，更佳观看体验；
              </div>
            </div>
            <div className='ft-two-cell'>
              <div className='cell-line1'>
                <img src={fticon8}/>
              </div>
              <div className='cell-line2'>高并发</div>
              <div className='cell-line3'>
              1000万+ 并发能力，500+ 就近接入节点；
              </div>
            </div>
            <div className='clean'></div>
          </div>




        </div>
      </div>
    );
  }
}

Ftsecond.defaultProps = {
};

export default Ftsecond;
