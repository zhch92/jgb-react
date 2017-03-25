import React from 'react';

export default class register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>

    );
  }
}

// const Welcome=React.createClass({
//   render(){
//      return (   
//       <div id="register">
//     <div class="register form">
//         <div class="content">
//             <div class="title"><span>注册</span></div>
//             <div class="clearfix">
//                 <div class="left-box">
//                     <div class="head">
//                         <p>注册账户</p>
//                     </div>
//                     <div class="row">
//                         <div class="left">
//                             <span>
//                             公司名称:
//                             <em>*</em>
//                         </span>
//                         </div>
//                         <div class="middle">
//                             <input type="text" id="company" placeholder="请输入公司名称">
//                         </div>
//                         <div class="right"></div>
//                     </div>
//                     <div class="row">
//                         <div class="left">
//                             <span>真实姓名:</span>
//                         </div>
//                         <div class="middle">
//                             <input type="text" id="user" placeholder="方便与您联系">
//                         </div>
//                         <div class="right"></div>
//                     </div>
//                     <div class="row">
//                         <div class="left">
//                             <span>
//                             手机号码:
//                             <em>*</em>
//                         </span>
//                         </div>
//                         <div class="middle">
//                             <input type="text" id="mobile" placeholder="输入您的手机号码，将作为登陆账号">
//                         </div>
//                         <div class="right"></div>
//                     </div>
//                     <div class="row">
//                         <div class="left">
//                             <span>
//                             图片验证:
//                             <em>*</em>
//                         </span>
//                         </div>
//                         <div class="middle">
//                             <input type="text" id="captcha" maxlength="4" placeholder="请输入4位图片验证码">
//                             <img class="captcha" src="/jgb-web/v1/captcha">
//                         </div>
//                         <div class="right">
//                             <a id="change-captcha" @click="changeCaptch">换一张</a>
//                         </div>
//                     </div>
//                     <div class="row">
//                         <div class="left">
//                             <span>
//                             手机验证码:
//                             <em>*</em>
//                         </span>
//                         </div>
//                         <div class="middle">
//                             <input type="tel" id="smscode" maxlength="6" placeholder="请输入验证码">
//                             <button class="send-sms" @click="sendSms($event)">点击获取</button>
//                         </div>
//                         <div class="right"></div>
//                     </div>
//                     <div class="row">
//                         <div class="left">
//                             <span>
//                             设置密码:
//                             <em>*</em>
//                         </span>
//                         </div>
//                         <div class="middle">
//                             <input type="password" id="password" placeholder="6-10位数字" @input="difficultyCheck($event)">
//                             <div id="fzd">
//                                 <ul>
//                                     <li>低</li>
//                                     <li>中</li>
//                                     <li>高</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div class="right"></div>
//                     </div>
//                     <div class="row">
//                         <div class="left">
//                             <span>
//                             确认密码:
//                             <em>*</em>
//                         </span>
//                         </div>
//                         <div class="middle">
//                             <input type="password" id="verify-pwd" placeholder="6-10位数字">
//                         </div>
//                         <div class="right"></div>
//                     </div>
//                     <div class="row rule">
//                         <i id="rule" class="fa fa-check-square active" @click="agreeRule($event)"></i>
//                         <span class="rule-text">
//                         注册即同意
//                         <a @click="pageNo = 1">《机构宝服务协议》</a>
//                     </span>
//                     </div>
//                     <div class="row">
//                         <a class="submit btn" @click="submit">
//                             <em>提交注册</em>
//                         </a>
//                     </div>
//                 </div>
//                 <div class="right-box">
//                     <div class="text">
//                         <p>机构宝-机构个性化现金管理工具</p>
//                         <div class="row">对接持牌资产管理公司优质资产，为机构理财助理</div>
//                         <div class="row">货币基金收益远超银行活期存款利息</div>
//                         <div class="row">投资高流动性、安全性的短期货币工具</div>
//                         <div class="row">不仅支持T+1取现，还支持快速取现，资金秒速到账</div>
//                     </div>
//                     <div class="img">
//                         <img src="../assets/images/common/qrcode.jpg" alt="二维码"><span>关注机构宝微信:jigoubao</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="register agreement" >
//         <div class="head">
//             <p>机构宝服务协议</p>
//         </div>
//         <div class="content">
//             <p>机构宝用户服务协议（本协议）是上海基智信息咨询有限公司（本公司）与机构宝用户(您/投资者)就机构宝服务相关事项所订立的协议。</p>
//             <p>您通过网络页面点击确认或以其他方式选择接受本协议，即表示您与本公司已达成协议并同意接受本协议的全部约定内容以及与本协议有关的各项规则及本公司网站所包含的其他与本协议或本协议项下各项规则的条款和条件有关的各项规定。如果您不同意本协议的任何内容，或者无法准确理解本公司对条款的解释，请立即停止使用本服务。在接受本协议之前，请您仔细阅读本协议的全部内容（特别是以粗体下划线标注的内容）。如果您不同意本协议所包含的任意条款内容，或者无法准确理解该条款的含义，请不要进行后续操作。</p>
//             <h3>第一条 定义</h3>
//             <p>除非本协议另有约定，本协议下列术语定义如下：</p>
//             <p>机构宝：指由本公司开发并运营的，基于法律法规规定、及本公司与第三方机构间的协议约定，面向企业及机构提供包含金融产品信息、投融资需求等的金融信息类中介服务。</p>
//             <h3>第二条 声明与承诺</h3>
//             <p>您承诺为合法成立且具备法律主体地位的经营主体。</p>
//             <p>您承诺按照本公司及合作第三方机构的要求提供相关主体资质文件，并对所提供材料信息的真实性、准确性、完整性负责。</p>
//             <p>您承诺不为任何非法目的或以任何非法方式使用机构宝服务，并承诺遵守中国相关法律、法规及互联网之使用惯例。</p>
//             <p>您同意并承诺，对您所注册使用的机构宝账户及密码信息进行妥善保管，并承诺确保获取相应使用权限的人员已获取您授权委托。</p>
//             <p>您同意，在交易达成或交易申请提交后不得变更、撤回或撤销，但本协议另有约定或您签署的其他协议另有约定的除外。</p>
//             <p>您理解并同意，本公司所运营的机构宝仅提供信息中介服务。与交易相关的资金及账户服务，由您所选择的交易对手及相应金融机构完成，所产生的任何纠纷及责任与本公司无关。</p>
//             <h3>第三条 服务对象范围</h3>
//             <p>机构宝服务仅向符合中华人民共和国法律法规规定，在中华人民共和国范围内注册的企业提供。您必须按照本网站的注册要求提供真实、准确及完整的信息，并负责对信息及时更新。本公司视本网站所有用户已就上述各项条件与要求作出承诺，保证身份的合法性，以及所提供信息的真实性、准确性、完整性和非过时性。</p>
//             <p>若您提供任何不真实、不准确、不完整或已变更的身份信息，或者本公司有合理理由怀疑您所提供的信息为不真实、不准确、不完整或已变更的，本公司有权中止（或终止）向您提供服务，并拒绝您现在或未来使用本服务之各项服务之全部或部分功能，对此本公司不承担任何责任。同时，因此所产生的任何直接或间接的支出、损失、费用、处罚将由您来承担。 若由于您未及时更新您信息，而导致本服务无法提供或本服务的有关流程及操作发生任何错误，您不得以此为由取消交易、拒绝支付交易款项和服务手续费或采取其它不当行为，并将独立承担因此产生的所有责任和后果。</p>
//             <h3>第四条 风险提示</h3>
//             <p>您知晓并同意，您通过机构宝平台所从事的交易可能面临如下风险，该些风险需由您自行承担：</p>
//             <ol>
//                 <li>监管风险：有关法律、法规及相关政策、规则发生变化，导致无法实现您的投融资交易，您由此可能遭受损失；</li>
//                 <li>违约风险：因您的交易对手无力或无意愿按时足额履约，您由此可能遭受损失；</li>
//                 <li>预期收益风险：您所投资的交易因特定原因无法实现预期收益，您由此无法获得更多收益；</li>
//                 <li>成交风险：您所申请的投融资交易可能无法最终达成，您由此无法获得收益或融资。</li>
//                 <li>本协议约定的不可抗力因素导致的风险；</li>
//                 <li>因您的过错导致的任何损失，该过错包括但不限于：决策失误、操作不当、遗忘或泄露账户密码、密码被他人破解、您使用的计算机系统被第三方侵入、您委托他人代理交易时他人恶意或不当操作而造成的损失。</li>
//             </ol>
//             <p>本公司不对您及/或任何交易提供任何担保或条件。机构宝向您提供的各种信息及资料仅为参考，您应依其独立判断做出决策，您据此进行交易的，产生的风险由您自行承担，您无权据此向本公司提出任何法律主张。在交易过程中，您与交易对手之间发生的纠纷，由纠纷各方自行解决，交易平台不承担任何责任。</p>
//             <p>以上并不能揭示您通过本公司所提供信息及渠道进行交易的全部风险及市场的全部情形。您在做出交易决策前，应全面了解相关交易，谨慎决策，并自行承担全部风险。</p>
//             <h3>第五条 信息共享与保护</h3>
//             <p>本公司不会将您因使用机构宝而产生或留存的信息出租或出售给任何人。除以下情形外，未经您同意，本公司及本公司关联公司不会与任何第三方分享您信息：</p>
//             <ol>
//                 <li>向您提供我们的服务；</li>
//                 <li>维护和改善我们的服务；</li>
//                 <li>遵守适用的法律法规；</li>
//                 <li>遵守司法机关命令或其他法律程序的规定；</li>
//                 <li>遵守相关行政机关的要求；</li>
//                 <li>在及时履行通知义务后，为维护各方合法权益所做的必要披露。</li>
//             </ol>
//             <h3>通知</h3>
//             <p>本协议履行过程中，本公司向您发出的书面通知方式包括但不限于邮寄纸质通知、电子邮件、客户端通知、手机短信和传真等方式。如本公司以邮寄方式向您发出书面通知的，则在本公司按照您留存的通讯地址交邮后的第三个自然日即视为送达。如以电子邮件、客户端通知、手机短信和传真等电子方式发出书面通知的，则在通知发送成功即视为送达。</p>
//             <h3>其他</h3>
//             <p>本服务所有内容均由本公司公司或其他权利人依法拥有知识产权，非经本公司或其他权利人书面同意任何人不得擅自使用、修改、复制、公开传播、改变、散布、发行本网站程序或内容。尊重知识产权是您应尽的义务，如有违反，您应对本公司承担直接及间接损失赔偿责任（包括且不限于律师费、鉴定费、公证费、第三方损失赔偿费及监管机构罚金等）。</p>
//             <p>本公司有权随时修改本服务条款，并通过公司机构宝官网公布最新的约定事项。相关约定事项的变更或更新，将不另行个别通知。若您在本服务条款修改后继续使用本服务，则视为您已阅读、了解并同意接受修改，若您不同意则应立即停用本服务。</p>
//         </div>
//         <a class="back btn" @click="pageNo = 0">
//                 返回
//             </a>
//     </div>
//     <div class="review" v-if="pageNo == 2">
//         <img src="../assets/images/register/face.png">
//         <span>我们已收到注册请求，会有运营人员与您进行沟通！</span>
//     </div>
// </div>
// );
//   }
// })