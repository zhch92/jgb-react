import React from 'react';

export default class active extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="active-wrap">
        <div>
            
            <div className="left"><img src="../assets/images/active/left.png" ></div>
            <div className="right"><img src="../assets/images/active/right.png" alt=""></div>
            <div className="middle"><img src="../assets/images/active/middle.png"  alt=""></div>
            <div className="btn">
                <button>进入机构宝</button>
            </div>
        </div>
    </div>
    );
  }
}
