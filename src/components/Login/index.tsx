import { FormEvent, useState } from 'react';
import { Data } from '../../types';
import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';
import { setName } from '../../state/userSlice';
import { useDispatch } from 'react-redux';
import logo from '../../../public/logo.png';
import iconUrl from '../../../public/wave (3).svg'
export const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/data/access/access.json');
      const data: Data = await response.json();
      
      const user = data.users.find(user => user.username === username && user.password === password);
      
      if (user) {
        dispatch(setName(user.name));
        console.log(user.name)
        navigate('/home');
      } else {
        setMessage('Wrong User/Pass');
      }
    } catch (error) {
      setMessage('Fail to load data');
    } finally {
      console.log('Hello');
    }
  };

  return ( 

   <Styled.Separators>
          <Styled.H3>Events Metrics Manager </Styled.H3>
    <Styled.Main>

       <Styled.Messages>
        <img src={logo} alt="Cepa Logo"/>
      </Styled.Messages>
           <Styled.Form onSubmit={handleLogin}>
        <Styled.Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder='Name'
        />
        <Styled.Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder='Password'
        />
        <button type="submit">Login</button>
        <p>{message}</p>
      </Styled.Form>
      
    </Styled.Main>
   
    <Styled.Img>
    <img src={iconUrl}  />
    </Styled.Img>
    
    </Styled.Separators>
  );
}
