import React from 'react';

class Button extends React.Component {
    constructor() {
      super();
      this.onToggle = e => {
        e.preventDefault();
        this.props.onToggle(this.props.style);
      };
    }
    render() {

      return (
        <span onMouseDown={this.onToggle}>
          {this.props.label}
        </span>
      );
    }
}
  
export default Button;