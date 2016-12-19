import React from 'react';
import '../stylesheet/header.scss'
export default class header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <div className="header">
        <div className="head">
            <div className="logo">
                <a href="#"><img src="./app/images/common/logo-white.png" alt="机构宝" /></a>
            </div>
            <div className="nav">
                <ul className="clearfix">
                    <li><a href="#">首页</a></li>
                    <li><a href="#">活期</a></li>
                    <li><a href="#">安全保障</a></li>
                    <li><a href="#">帮助中心</a></li>
                    <li><a href="#">我的账户</a></li>
                    <li><a href="#">注册</a></li>
                    <li><a href="#">登陆</a></li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
}
