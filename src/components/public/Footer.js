import React from 'react';
import { Link } from 'react-router';
require('../../styles/Footer.less')


let qiniuFooter = '../images/public/qiniuFooter.png';

class Footer extends React.Component {

  render() {
    return (
      <div className='footer-outbox'>
        <div className='footer-midbox1'>
          <div className='footer-map'>
            <div className='footer-mapbox'>
              <div>
                <span>产品</span>
              </div>
              <div>
                <Link to="/update">
                  更新日志
                </Link>
              </div>
              <div>功能预览</div>
            </div>
          </div>
          <div className='footer-map'>
            <div className='footer-mapbox'>
              <div>
                <span>开发</span>
              </div>
              <div>开发文档</div>
              <div>常见问题</div>
              <div>GITHUB</div>
            </div>
          </div>
          <div className='footer-map'>
            <div className='footer-mapbox'>
              <div>
                <span>团队</span>
              </div>
              <div>WECHAT</div>
              <div>加入我们</div>
              <div>
                <Link to="/about">
                  关于七牛
                </Link>
              </div>
            </div>
          </div>
          <div className='footer-map'></div>
        </div>
        <div className='footer-midbox2'>
          <div className='fooer-layer'></div>
          <div className='footer-mid2-left'>
            <span>© 2011–2016 QINIU, INC.&nbsp;&nbsp;&nbsp;&nbsp;
            备案：沪 B1.B2-20090185</span>
          </div>
          <div className='footer-mid2-right'>
            <img src={qiniuFooter}/>
          </div>
        </div>
      </div>
    );
  }
}

Footer.defaultProps = {
};

export default Footer;
