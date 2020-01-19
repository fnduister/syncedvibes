import styled from "styled-components";
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

export const ButtonStyled = styled.span`
  margin: 0.5em;
  color: ${props => props.active ? "#3b4956" : "#fff"};
  cursor: pointer;
  &:hover {
    color: #5dd;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #333;
  color: #ddd;
  font-size: 18px;
  border: 0;
  padding-top: 5px;
  vertical-align: bottom;
  height: 34px;
  width: 36px;
  border-radius: 4px;

  &:hover, &:focus{
    background: #444;
    outline: 0; /* reset for :focus */
  }

  & > input{
    display: none
  }
`;

export const ImageIconStyled = styled(InsertPhotoIcon)`
  color: #ddd;
`;
export const InputStyled = styled.input`
  border: none;
  background-color: none;
`;

