import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ScheduleIcon from "@material-ui/icons/Schedule";

export const Title = styled(Typography)`
  margin-bottom: 2vh;
`;

export const TimeStamp = styled(Typography)`
  margin-bottom: 2vh;
  opacity: 0.5;
`;

export const Summary = styled(Typography)`
  margin-top: 2vh;
`;

export const ArticleGrid = styled(Grid)`
  margin-bottom: 15vh;
`;

export const ScheduleIconStyled = styled(ScheduleIcon)`
  font-size: 100%;
  font-weight: 500;
  font-style: normal;
`;
