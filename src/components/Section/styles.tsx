import styled from "styled-components";

export const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 25rem;

`


export const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 20rem;
height: 7rem;

cursor: pointer;
border-radius: 24px;
background: #fffafa;
box-shadow:  -32px 32px 43px #d6d2d2,
             32px -32px 43px #ffffff;

margin: 15px;
`
export const CardHolder = styled.div`
margin-top: 15px;
display: flex;
justify-content: center;

`