import { useNavigate } from 'react-router-dom';
import * as Styled from './styles'
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { setType, setName } from '../../state/userSlice';
import { useDispatch } from 'react-redux';

export const Header = () =>{
    const navigate = useNavigate();
    const name = useSelector((state: RootState) => state.user.name)
    const dispatch = useDispatch();

    const handleClick = () => {
      navigate('/'); 
      dispatch(setType(null));
      dispatch(setName(null))
    };
    return (
        <Styled.Header>
          <p>Welcome, {name} </p>
       <Styled.button onClick={handleClick}>  &#x21AA; Logout</Styled.button>
        </Styled.Header>
    )
}