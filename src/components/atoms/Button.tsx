import React, { Component } from 'react';

interface ButtonProps {
  text: string;
}

class Button extends Component<ButtonProps> {
  render() {
    return (
      <div>{ this.props.text }</div>
    );
  }
}

export default Button;
