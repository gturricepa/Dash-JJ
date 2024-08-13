import styled from "styled-components";


export const Header = styled.header`
width:100%;
height: 3rem;
border-bottom: 2px solid transparent;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
display: flex;
justify-content: flex-end;
position: fixed;
top: 0;
background: rgba(255, 255, 255, 0.1); 
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px); 
  z-index: 5555;
  padding-bottom: 10px;
`
export const button = styled.button`
  all: unset; 
  display: inline;
  cursor: pointer;
  padding: 15px;
 //border: 1px solid black;


  &:hover{
    background-color:white;
    color: #747bff;
  }
`

