import React from 'react';
import $ from 'jquery'
import './stylesheet/login.scss'
import Footer from './components/footer'

export default class login extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
    	<div>
     
	     <LoginFrom />
	     <Footer />
	    </div>
    );
  }
}

const LoginFrom=React.createClass({
  getInitialState: function() {
    return {tel: '', pwd: '',count:0};
  },
  testClick:function(){
  	let tel=this.state.tel;
  	let pwd=this.state.pwd;
  	if (tel!='' && pwd !='') {
  		console.log(tel+'------'+pwd);
  		$.ajax({
  			url:'./jgb-web/v1/organ/login',
  			type:'post',
  			dataType:'json',
  			data:{passwd:pwd,telphone:tel},
  			success:function(re){
        if (re.status===1) {
              console.log('登录成功')
        }else{
              console.log('登录失败')

        }

  			}
  		})
  	} else {
  		console.log('账号或密码不能为空')
  	};
  },



  telChange: function(e) {
      this.setState({tel: e.target.value});
    },
  pwdChange: function(e) {
	  this.setState({pwd: e.target.value});
	},
  render() {
    return (
    	<div id="login">
        <div className="login-form">
            <div className="content">
                <div className="title"><span>登录</span></div>
                <div className="clearfix">
                    <div className="left">
                        <div className="head">
                            <p>登录</p>
                        </div>
                        <div className="row">
                            <span>手机号码:</span>
                            <input type="tel" id="username" placeholder="您的手机号码" value={this.state.tel} onChange={this.telChange} />
                        </div>
                        <div className="row">
                            <span>登录密码:</span>
                            <input type="password" id="password" placeholder="您的登录密码" value={this.state.pwd}  onChange={this.pwdChange} />
                            <div className="forget">
                                <span>忘记密码？</span>
                            </div>
                        </div>
                        <div className="row">
                            <a className="login btn" onClick={this.testClick}>
                                <em>登录</em>
                            </a>
                        </div>
                        <div className="register">
                            没有账号？
                            <a href="#">立即注册</a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="text">
                            <p>机构宝-机构个性化现金管理工具</p>
                            <div className="row">对接持牌资产管理公司优质资产，为机构理财助理</div>
                            <div className="row">货币基金收益远超银行活期存款利息</div>
                            <div className="row">投资高流动性、安全性的短期货币工具</div>
                            <div className="row">不仅支持T+1取现，还支持快速取现，资金秒速到账</div>
                        </div>
                        <div className="img">
                            <img src="app/view/images/common/qrcode.jpg" alt="二维码" /><span>关注机构宝微信:jigoubao</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
})