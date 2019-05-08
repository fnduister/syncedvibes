import React from "react";
import { ButtonStyled } from "./styled";
class Button extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
    this.onToggle = e => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
      this.setState(state => ({ active: !state.active }));
    };
  }
  render() {
    return (
      <ButtonStyled
        active={this.state.active ? this.state.active : null}
        onMouseDown={this.onToggle}
      >
        {this.props.label}
      </ButtonStyled>
    );
  }
}

export default Button;
