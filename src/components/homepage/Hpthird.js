require('../../styles/homepage/Hpthird.less');

import React from 'react';
import { Button } from 'antd';

let scene = '../../images/homepage/scene.svg';



class Hpthird extends React.Component {


  render() {
    return (
      <div className='hp-third-box'>
        <div className='hp-third-left'>
          <div className='hp-third-place'>
            <div className='hp-third-inner1'>
              强大功能特性，<br/>
              适用各种移动直播场景
            </div>
            <div className='hp-third-inner2'>
              Pili SDK 根据移动应用直播场景进行多方面优化，不<br/>
              止支持多平台直播使用，更独立开发了多方面新增性<br/>
              能，帮你更好更快接入优良的直播体系。
            </div>
            <div className='hp-third-inner3'>
              <Button type="primary" className='hp-third-btn'>功能特性</Button>
            </div>
          </div>
        </div>
        <div className='hp-third-right'>
          <div className='Hp-third-imgbox'>
            <img  src={scene}/>
          </div>
        </div>
      </div>
    );
  }
}

Hpthird.defaultProps = {
};

export default Hpthird;
