import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;

`

export const Form = styled.form`
justify-content: center;
 display: flex;
 display: flex;
 flex-direction: column;
 gap: 35px;
padding: 75px;
width: 50%;
margin-top: 25px;
`

export const Input = styled.input`
height: 35px ;
border-radius: 5px;
border: 2px solid#747bff;
padding: 3px;
outline: none;
&:focus {

    box-shadow: none; 
  }
`

export const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-bottom: 100px;


`

export const Separators = styled.div`
display: flex;
flex-direction: column;
justify-content:center ;
align-items: center;
height: 100vh;


`
export const Messages = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-content: center;
padding: 75px;
margin-bottom: 25px;
width: 50%;


`

export const H3 = styled.h1`
border-bottom: 3px solid transparent;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
padding: 35px;
width: 50%;
border-radius: 15px;
display: flex;
justify-content: center;

`
export const Img = styled.div`
position: fixed;
bottom: 0;
width: 100%;
height: 30%;
z-index: -999;


`