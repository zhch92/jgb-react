import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Main from './index/main.jsx';
import './stylesheet/global.scss';

export class Index extends Component {
    render() {
        return (
        	<div className='swiper-container'> 
               <Header />
               <Main />
               <div className="swiper-pagination"></div>
        	</div>
        	)
    }
}

ReactDOM.render(<Index /> , document.getElementById('content'))



