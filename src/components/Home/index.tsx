
import React from 'react';
import { Header } from '../Header'; 
//import { Section } from '../Section';
//import { useSelector } from 'react-redux';
//import { RootState } from '../../state/store';
import { DataViz } from '../DataViz';
import * as Styled from './styles'



export const Home: React.FC = () => {
  
    //const type = useSelector((state: RootState) => state.user.type)
 
    //WHERE WAS A CONDITIONAL RENDERING OF DATAVIZ AND REPORT....
    return (
        <Styled.Holder>
        <Header />
        <DataViz/>
        </Styled.Holder>
    );
};
