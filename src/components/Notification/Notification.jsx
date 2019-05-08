import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import WarningIcon from "@material-ui/icons/Warning";
import { connect } from "react-redux";
import { closeNotification } from "./reducer";
import {
  SnackbarStyled,
  Message,
  MessageBox,
  SnackbarContentStyled
} from "./styled";
import { IconButton } from "@material-ui/core";
class Notification extends Component {
  variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon
  };

  render() {
    const Icon = this.variantIcon[this.props.variant];
    console.log("dans la notification");
    return (
      <SnackbarStyled
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={this.props.open}
        autoHideDuration={4000}
        onClose={this.props.closeNotificationHandler}
        message="heddd asdfasd  sadf"
      >
        <SnackbarContentStyled
          aria-describedby="client-snackbar"
          variant={this.props.variant}
          message={
            <MessageBox>
              <Icon />
              <Message variant="primary">{this.props.message}</Message>
            </MessageBox>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              onClick={this.props.closeNotificationHandler}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </SnackbarStyled>
    );
  }
}

const enhance = connect(
  state => ({
    open: state.global.notification.open,
    variant: state.global.notification.variant,
    message: state.global.notification.message
  }),
  {
    closeNotificationHandler: () => closeNotification()
  }
);

export default enhance(Notification);
