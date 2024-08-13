import * as Styled from './styles';
import { setType } from '../../state/userSlice';
import { useDispatch } from 'react-redux';

export const Section = () => {
    const dispatch = useDispatch();

    const handleDataVizClick = () => {
        dispatch(setType('DataViz'));

    };

    const handleReportClick = () => {
        dispatch(setType('Report'));

    };

    return (
        <Styled.Section>
            <h2> 🌐 Select your type of data:</h2>
            <Styled.CardHolder>
                <Styled.Card onClick={handleDataVizClick}>
                    <h3 >DataViz</h3>
                </Styled.Card>
                <Styled.Card onClick={handleReportClick}>
                    <h3 >Report</h3>
                </Styled.Card>
            </Styled.CardHolder>
        </Styled.Section>
    );
};
