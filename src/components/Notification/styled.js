import styled from "styled-components";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";

const variantTheme = variant => {
    switch (variant) {
        case "success":
            return "#6BC13A";
        case "warning":
            return "#DD4944";
        case "error":
            return "red";
        default:
        return "green";
    }
}

export const SnackbarStyled = styled(Snackbar)`
    /* background-color: ${props => variantTheme(props.variant)}; */
`;

export const SnackbarContentStyled = styled(SnackbarContent)`
    background-color: ${props => variantTheme(props.variant)};
`;

export const MessageBox = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Message = styled(Typography)`
    margin-left: .4em;
`;