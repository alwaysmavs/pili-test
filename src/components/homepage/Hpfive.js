require('../../styles/homepage/Hpfive.less');

import React from 'react';



class Hpfive extends React.Component {

  render() {
    return (
      <div className='hp-five-box'>
        <div className='hp-five-title'>立即开始，让你的应用拥抱直播</div>
        <div className='hp-five-btn'>立即开始</div>
      </div>
    );
  }
}

Hpfive.defaultProps = {
};

export default Hpfive;
