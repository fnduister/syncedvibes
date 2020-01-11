import styled from 'styled-components';
import InputButton from '../Videos/InputButton';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';

export const ButtonStyled = styled.span`
  margin: 0.5em;
  color: ${(props) => (props.active ? '#3b4956' : '#fff')};
  cursor: pointer;
  &:hover {
    color: #5dd;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const VideoIconStyled = styled(MusicVideoIcon)`
  color: white;
  transition: color 0.5s ease;

  &:hover {
    color: red;
  }
`;
export const InputStyled = styled.input`
  border: none;
  width: 100%;
  height: 2em;
  background: rgba(255, 255, 255, 0);
  padding: .5em;
  outline: none;
  color: white;

  &:focus{
  background: rgba(255, 255, 255, 0.2);
    
  }
`;
