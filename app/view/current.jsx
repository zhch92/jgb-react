import React from 'react';
import Fetch from 'react-fetch'
import $ from 'jquery'

import Footer from './components/footer'
import  './stylesheet/current.scss'

export default class current extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <Currents />
       <Footer />
      </div>
    );
  }
}
// http://localhost:8080/jgb-web/v1/products/rec
// http://localhost:8787/jgb-web/v1/products/rec
const Currents=React.createClass({
  getInitialState: function() {
    return {currentObj:''};
    
  },
componentWillMount:function(){
  const _this=this;
  var url='./jgb-web/v1/products/rec';
   fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {
            var reData=data.data;
            console.log(reData)
            if (reData) {
             _this.setState({currentObj:reData})
            }
      }).catch(function(e) {
        console.log("Oops, error");
      });

  // const _this=this;
  // $.ajax({
  //       url: './jgb-web/v1/products/rec',
  //       type: 'GET',
  //       dataType: 'json',
  //       success: function(re) {
  //           var reData=re.data;
  //           console.log(reData)
  //           if (reData) {
  //            _this.setState({currentObj:reData})
  //           }

  //       }
  //   })  
},
  render(){
    const currentInfo=this.state.currentObj;
    return (
     <div id="current">
        <div className="first section">
            <div className="container">
                <div className="left">
                    <div className="content">
                        <div className="top">
                            <span>活期机构宝</span>
                        </div>
                        <div className="bottom">
                            <div className="row"><div></div><span>收益远超银行活期</span></div>
                            <div className="row"><div></div><span>支持随存随取</span></div>
                            <div className="row"><div></div><span>安全合规无风险</span></div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="content">
                        <div className="top">
                            <span>2016.12.19</span>
                            <span>机构宝七日年化收益率</span>
                        </div>
                        <div className="middle">
                            <span>{currentInfo.seventhYearYield*100}00%</span>
                        </div>
                        <div className="bottom">
                            <button >已登录</button>
                            <button>快速注册</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="second section">
            <div className="title">
                <p>为您优选的货币基金</p>
            </div>
            <div className="product">
                <div className="icon">
                    <img src="app/view/images/current/icon.png" />
                </div>
                <div className="name">
                    <p>{currentInfo.decription}</p>
                </div>
                <div className="week">
                    <p>{currentInfo.seventhYearYield*100}00%</p>
                    <p>7日年化收益率</p>
                </div>
                <div className="day">
                    <p>{currentInfo.yieldPerMillion}元</p>
                    <p>日万份收益</p>
                </div>
                <div className="time">
                    <p>{(currentInfo.endDate==null)?'实时到账':'T+1到账'}</p>
                    <p>取现到账时间</p>
                </div>
                <div className="buy">
                <button>立即投资</button>
                </div>
            </div>
            <div className="imgs">
                <div className="left block">
                    <img src="app/view/images/current/img001.png" alt="收益" />
                    <p>收益远超活期</p>
                    <p>机构宝货币基金收益远超银行活期存款利息，日日复利，每日结转。一分起存，轻松享受企业理财收益。</p>
                </div>
                <div className="middle block">
                    <img src="app/view/images/current/img002.png" alt="安全" />
                    <p>安全高 放心存</p>
                    <p>机构宝货币基金仅投资高流动性、安全性的短期货币工具，不参与股票投资，是企业闲置资金理财的好选择。</p>
                </div>
                <div className="right block">
                    <img src="app/view/images/current/img003.png" alt="流动" />
                    <p>流动强 随心取</p>
                    <p>机构宝货币基金不仅支持T+1取现，还支持快速取现，资金秒速到账。所有交易线上完成轻松便捷。</p>
                </div>
            </div>
        </div>
        <div className="third section">
            <div className="title">
                <p>准备以下资料，立即开户吧</p>
            </div>
            <div className="progress">
                <div className="img">
                    <img src="app/view/images/current/img004.png" alt="开户步骤" />
                </div>
                <div className="open">
                    <button>预约咨询（请联系：021-64859676）</button>
                    <button>自助开户</button>
                </div>
            </div>
        </div>
        </div>        )
   
  }
})