require('../../styles/Nav.less');

import React from 'react';
import {Menu,Icon,Dropdown} from 'antd';
import { Link } from 'react-router';
let logo = require('../../images/public/logo.svg');

const menu = (
    <Menu>
        <Menu.Item key="0">
            推流 SDK &nbsp;&nbsp;&nbsp;&nbsp;
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

class Nav extends React.Component {
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
      case 'enterprise':
        this.setState({ color1: true });
        this.setState({ color2: false });
        this.setState({ color3: false });
        break;
      case 'develop':
        this.setState({ color1: false });
        this.setState({ color2: true });
        this.setState({ color3: false });
        break;
      case 'problem':
        this.setState({ color1: false });
        this.setState({ color2: false });
        this.setState({ color3: true });
        break;
    }
  }

  render() {

    const test1 = this.state.color1 ? 'nav-active nav-cell' : 'nav-cell';
    const test2 = this.state.color2 ? 'nav-active nav-cell' : 'nav-cell';
    const test3 = this.state.color3 ? 'nav-active nav-cell' : 'nav-cell';

    return (
      <div className='nav-box'>
        <div className='nav-imgbox'>
          <Link to="/">
            <img className='nav-imgsize' src={logo}/>
          </Link>
        </div>
        <div className='nav-right'>
          <div className="nav-cell">
              <Dropdown overlay={menu} trigger={['click']}>
                  <span className="ant-dropdown-link"  href="#">
                      产品 <Icon type="down" />
                  </span>
              </Dropdown>
          </div>
          <div className={test1} onClick={this.handleClick.bind(this)} id='enterprise' >企业服务</div>
          <div className={test2} onClick={this.handleClick.bind(this)} id='develop'>开发文档</div>
          <div className={test3} onClick={this.handleClick.bind(this)} id='problem'>常见问题</div>
          <div className="nav-cell" >
              <span className="nav-begin-w">立即开始</span>
          </div>
        </div>
      </div>
    );
  }
}

Nav.defaultProps = {
};

export default Nav;
