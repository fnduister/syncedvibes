import React from "react";
import Typography from "@material-ui/core/Typography";
import { TitleBox } from "./styled";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Title = ({ onMobile }) => {
  return (
    <TitleBox>
      <Typography variant={onMobile ? "h2" : "h1"} gutterBottom color="inherit">
        SyncedVibes
      </Typography>
      <Typography variant={onMobile ? "h5" : "h4"} gutterBottom color="inherit">
        What do you want!
      </Typography>
    </TitleBox>
  );
};

export default Title;
