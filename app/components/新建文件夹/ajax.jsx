import React from 'react';
import $ from 'jquery';
export default class Ajax extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div><UserGist source="./app/components/ajax.json" /></div>
    );
  }
}

var UserGist = React.createClass({
        getInitialState: function() {
          return {
            arrInit: [1]
          };
        },
        componentDidMount: function() {
          var _this=this;
          this.serverRequest = $.ajax({
                    url: this.props.source,
                    type: 'post',
                    dataType: 'json',
                    success:function(result){
                      const newArr=result;
                      console.log('11111111')
                      _this.setState({
                        arrInit: result
                      });
                    }
                  })
 

      
        },
        componentWillUnmount: function() {
          this.serverRequest.abort();
        },
        render: function() {
          const {arrInit}=this.state;
          const list=arrInit;
          console.log(list)
          return (
            <ul>
              
            </ul>
              
          );
        }
      });