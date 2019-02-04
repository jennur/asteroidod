import React from 'react';

class TextBox extends React.Component {
  render(){
    return(
      <div className={`c-text-box c-text-box--${this.props.color}`}>
        <h3>{ this.props.headline }</h3>
        <p>{ this.props.children }</p>
      </div>
    );
  }
}

export default TextBox;