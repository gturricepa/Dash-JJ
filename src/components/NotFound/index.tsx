import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';

export const NotFound: React.FC = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleClick = () => {
    navigate('/home'); // Navega para a página inicial
  };

  return (
    <Styled.Holder>
      <Styled.H1>Page Not Found...</Styled.H1>
      <button onClick={handleClick}>Go to Home</button> {/* Adiciona um texto ao botão */}
    </Styled.Holder>
  );
};
