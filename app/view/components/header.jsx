import React from 'react';
import { Router, Route, Link ,hashHistory} from 'react-router'
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
                <Link to="index"><img src="app/view/images/common/logo-white.png" alt="机构宝" /></Link>
            </div>
            <div className="nav">
                <ul className="clearfix">
                    <li><Link to="index">首页</Link></li>
                    <li><Link to="current">活期</Link></li>
                    <li><Link to="safe">安全保障</Link></li>
                    <li><Link to="help/index">帮助中心</Link></li>
                    <li><Link to="account">我的账户</Link></li>
                    <li><Link to="register">注册</Link></li>
                    <li><Link to="login">登录</Link></li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
}
