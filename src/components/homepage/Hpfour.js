require('../../styles/homepage/Hpfour.less');

import React from 'react';

let meipai = '../../images/homepage/meipai.png';
let miaopai = '../../images/homepage/miaopai.png';
let panda = '../../images/homepage/panda.png';
let nice = '../../images/homepage/nice.png';
let wink = '../../images/homepage/wink.png';
let longzhu = '../../images/homepage/longzhu.png';


class Hpfour extends React.Component {

  render() {
    return (
      <div className='hp-four-box'>
        <div className='hp-four-slogan'>他们都在用</div>
        <div>
          <div>
            <div className='hp-four-line1'>
              <div className='hp-four-cell'>
                <img className='hp-four-imgsize' src={meipai}/><br/>
                <span>美拍</span>
              </div>
              <div className='hp-four-cell'>
                <img className='hp-four-imgsize' src={miaopai}/><br/>
                <span>秒拍</span>
              </div>
              <div className='hp-four-cell'>
                <img className='hp-four-imgsize' src={panda}/><br/>
                <span>熊猫 TV</span>
              </div>
              <div className='hp-four-cell'>
                <img className='hp-four-imgsize' src={longzhu}/><br/>
                <span>龙珠直播</span>
              </div>
              <div className='hp-four-cell'>
                <img className='hp-four-imgsize' src={nice}/><br/>
                <span>Nice</span>
              </div>
            </div>
            <div className='hp-four-line2'>
              <div className='hp-four-cell'>
                <img className='hp-four-imgsize' src={wink}/><br/>
                <span>Wink</span>
              </div>
              <div className='hp-four-cell'>
                <img className='hp-four-imgsize' src={meipai}/><br/>
                <span>美拍</span>
              </div>
              <div className='hp-four-cell'>
                <img className='hp-four-imgsize' src={longzhu}/><br/>
                <span>龙珠直播</span>
              </div>
              <div className='hp-four-cell'>
                <img className='hp-four-imgsize' src={panda}/><br/>
                <span>熊猫 TV</span>
              </div>
              <div className='hp-four-cell'>
                <img className='hp-four-imgsize' src={miaopai}/><br/>
                <span>秒拍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Hpfour.defaultProps = {
};

export default Hpfour;
