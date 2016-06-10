require('../../styles/feature/Ftthird.less');

import React from 'react';
let ftthird1 = '../../images/feature/ftthird1.svg';

class Ftthird extends React.Component {

  render() {
    return (
      <div className='ft-five-box'>
        <div className='ft-five-imgbox'>
          <img src={ftthird1}/>
        </div>
        <div className='ft-five-title1'>更多特性，持续开发中</div>
        <div className='ft-five-title2'>支持截图、录制、动态添加水印，更有鉴黄增值服务。</div>
        <div className='ft-five-btn'>功能预览</div>
      </div>
    );
  }
}

Ftthird.defaultProps = {
};

export default Ftthird;
