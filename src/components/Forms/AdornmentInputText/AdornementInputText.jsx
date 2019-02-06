import React, { PureComponent } from "react";
import { TextInput } from "./styled";
import { InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from '@material-ui/icons';

export default class AdornementInputText extends PureComponent {
  state = {
    showPassword: false
  };

  handlePasswordVisibility = () => this.setState((state) => ({showPassword: !state.showPassword}));

  render() {
    return (
      <TextInput
      {...this.props}
        type={this.state.showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={this.handlePasswordVisibility}
              >
                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    );
  }
}
