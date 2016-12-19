import React from 'react';
import $ from 'jquery'

import './stylesheet/main.scss';

export default class main extends React.Component {
  constructor(props) {
    super(props);
  }
   
  render() {
    return (
        <div  className='swiper-container'>
        <div className='swiper-wrapper' >
           <div className="main1-bg swiper-slide">
        <div className="main1 clearfix">
            <div className="left">
                <div className="box">
                    <div className="left-l">机构宝</div>
                    <div className="left-m"></div>
                    <div className="left-r">
                        <span>对接持牌资产管理公司优质资产，</span>
                        <br/>
                        <span>为机构理财助力。</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <from>
                    <div className='user'><span></span>
                        <input type="text" placeholder="请输入您的账号" />
                    </div>
                    <div className='pwd'><span></span>
                        <input type="password" placeholder="请输入您的密码" />
                    </div>
                    <div className='handle'><span>记住用户名</span><a href="#">忘记密码？</a></div>
                    <div>
                        <button>登录</button>
                    </div>
                    <div className="register"><a href="#">快速注册</a></div>
                </from>
            </div>
        </div>
    </div>
    <div className="main2-bg swiper-slide">
        <div className="main2">
            <h3>我们的优势</h3>
            <div className="advantage-img">
                <div className='active'></div>
                <div></div>
                <div></div>
            </div>
            <div className="advantage-text">
                <p>国内基金销售行业排名第二的数米基金网业务团队联合国内资金管理数据和服务实力团队倾力打造。</p>
                <p>针对机构客户的专业需求，为客户打造使客户投资安心，操作便捷的企业理财专业平台。</p>
                <p>十多年基金营销、销售和技术管理经验团队为您在安全性、流动性基础上，筛选匹配您需求的多种类固定收益产品。</p>
            </div>
        </div>
    </div>
    <div className="main3-bg swiper-slide">
        <div className="main3 ">
            <h3>合作伙伴</h3>
            <div className="company">
                <img src="../app/view/images/index/changxin-hover.png" alt="" />
                <img src="../app/view/images/index/guangfa-hover.png" alt="" />
                <img src="../app/view/images/index/liantai-hover.png" alt="" />
            </div>
        </div>
        <div className="footer">
            <span>上海市徐汇区乐山路33号1号楼210室</span>
            <span>021-64859676 <time>(9:00-18:00)</time></span>
            <span>机构宝微信:jigoubao</span>
        </div>
    </div>
        </div>
    <div className="swiper-pagination"></div></div>

    );
  }
  componentDidMount(){
  	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        speed:1000
    });
    $('.advantage-img>div').on('mouseover',function(){
    	let _self=$(this);
    	let index=_self.index();
    	_self.addClass("active").siblings().removeClass("active");
    	$('.advantage-text>p').hide().eq(index).show();
    })
  }
}




