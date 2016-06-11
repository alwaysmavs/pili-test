require('../../styles/Nav.less');

import React from 'react';
import {Menu,Icon,Dropdown} from 'antd';
import { Link } from 'react-router';
let logowhite = require('../../images/public/logowhite.svg');

const menuwhite = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/pushsdk">
        推流 SDK &nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/playsdk">
        播放器 SDK&nbsp;
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      七牛云&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Menu.Item>
  </Menu>
);

class Navwhite extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color1:false,
      color2:false,
      color3:false
    }
  }

  handleClick(e) {
    var objId = e.target.id;
    switch (objId){
      case 'enterprisew':
        this.setState({ color1: true });
        this.setState({ color2: false });
        this.setState({ color3: false });
        break;
      case 'developw':
        this.setState({ color1: false });
        this.setState({ color2: true });
        this.setState({ color3: false });
        break;
      case 'problemw':
        this.setState({ color1: false });
        this.setState({ color2: false });
        this.setState({ color3: true });
        break;
    }
  }

  render() {

    const test1 = this.state.color1 ? 'nav-active-w nav-cell-w' : 'nav-cell-w';
    const test2 = this.state.color2 ? 'nav-active-w nav-cell-w' : 'nav-cell-w';
    const test3 = this.state.color3 ? 'nav-active-w nav-cell-w' : 'nav-cell-w';

    return (
      <div className='nav-box'>
        <div className='nav-imgbox'>
          <Link to="/">
            <img className='nav-imgsize' src={logowhite}/>
          </Link>
        </div>
        <div className='nav-right-w'>
          <div className="nav-cell-w">
            <Dropdown overlay={menuwhite} trigger={['click']}>
                  <span className="ant-dropdown-link"  href="#">
                      产品 <Icon type="down" />
                  </span>
            </Dropdown>
          </div>
          <Link to="/enterprise">
            <div className={test1} onClick={this.handleClick.bind(this)} id='enterprisew'>
                企业服务
            </div>
          </Link>
          <div className={test2} onClick={this.handleClick.bind(this)} id='developw'>开发文档</div>
          <div className={test3} onClick={this.handleClick.bind(this)} id='problemw'>常见问题</div>
          <div className="nav-cell-w" >
            <span className="nav-begin">立即开始</span>
          </div>
        </div>
      </div>
    );
  }
}

Navwhite.defaultProps = {
};

export default Navwhite;
