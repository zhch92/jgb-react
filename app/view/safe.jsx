import React from 'react';
import Footer from './components/footer'

import  './stylesheet/safe.scss'
export default class safe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
      <div id="safe">
        <div className="banner">
        <div className="content">
            <div className="text">
                <h3>机构宝</h3>
                <p>| 机构个性化现金管理工具</p>
                <p>帮助机构精选优质理财产品，满足企业个性化投资需求，为各类企业提供现金管理综合解决方案。</p>
            </div>
            <div className="img">
                <img src="app/view/images/safe/dun.png" alt="图片" />
            </div>
        </div>

        </div>
        <div className="first section">
            <div className="head">
                <p>资金安全</p>
                <p><strong>机构宝</strong>为机构客户提供面向金融标准品投资理财的居间顾问服务，客户投资资金直接投向金融机构。</p>
            </div>
            <div className="content">
                <img src="app/view/images/safe/zijin.png" alt="资金" />
            </div>
        </div>
        <div className="second section">
            <div className="head">
                <p>合作伙伴</p>
            </div>
            <div className="content">
                <div className="block">
                    <img src="app/view/images/safe/yh.png" alt="银行" />
                    <p>商业银行</p>
                </div>
                <div className="block">
                    <img src="app/view/images/safe/qs.png" alt="券商" />
                    <p>证券公司</p>
                </div>
                <div className="block">
                    <img src="app/view/images/safe/gmjj.png" alt="公募基金" />
                    <p>公募基金</p>
                </div>
                <div className="block">
                    <img src="app/view/images/safe/jjzgs.png" alt="基金子公司" />
                    <p>基金子公司</p>
                </div>
            </div>
        </div>
        <div className="third section">
            <div className="head">
                <p>精选资产</p>
            </div>
            <div className="content">
                <div className="block">
                    <img src="app/view/images/safe/hbjj.png" alt="货币基金" />
                    <p>货币基金</p>
                </div>
                <div className="block">
                    <img src="app/view/images/safe/jhlcjh.png" alt="集合理财计划" />
                    <p>券商集合理财计划</p>
                </div>
                <div className="block">
                    <img src="app/view/images/safe/yhxyck.png" alt="银行协议存款" />
                    <p>银行协议存款</p>
                </div>
                <div className="block">
                    <img src="app/view/images/safe/jghjj.png" alt="结构化基金" />
                    <p>结构化基金</p>
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </div>

    );
  }
}
