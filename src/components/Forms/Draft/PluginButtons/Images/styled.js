import styled from "styled-components";
import InputButton from '../video/InputButton';
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

  & > input{
    display: none
  }
`;

export const ImageIconStyled = styled(InsertPhotoIcon)`
  color: white;
  transition: color .5s ease;

  &:hover{
    color: red;
  }
`;
export const InputStyled = styled.input`
  border: none;
  background-color: none;
`;

