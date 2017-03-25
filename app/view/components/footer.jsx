import React from 'react';
import { Router, Route, Link ,hashHistory} from 'react-router'
 
 import '../stylesheet/footer.scss'


export default class footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="footer"  >
        <div className="first">
            <div className="content clearfix">
                <div className="left">
                    <div className="block">
                       <Link to="index">机构宝首页</Link>
                        <Link to="help" >帮助中心</Link>
                    </div>
                    <div className="block">
                        <div className="row">
                            <span>联系我们</span>
                        </div>
                        <div className="row">
                            <img src="app/view/images/common/footer-weixin.png" alt="图" />
                            <span>微信公众号：机构宝微信:jigoubao</span>
                        </div>
                        <div className="row">
                            <img src="app/view/images/common/footer-address.png" alt="图" />
                            <span>公司地址：上海市徐汇区乐山路33号1号楼210室</span>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="row">
                        <span>客服电话(工作时间: 9:00-18:00)</span>
                    </div>
                    <div className="row">
                    <span>
                        <i className="fa fa-phone"></i>
                        021-64859676
                    </span>
                    </div>
                </div>
                <div className="right">
                    <img src="app/view/images/common/qrcode.jpg" alt="二维码" />
                    <span>机构宝微信:jigoubao</span>
                </div>
            </div>
            <div className="copyright">
            <span>Copyright© 2014-2016 jigoubao All Rights Reserved 版权所有: 上海基智信息咨询有限公司</span>
            </div>
        </div>
      
    </div>
    );
  }
}
