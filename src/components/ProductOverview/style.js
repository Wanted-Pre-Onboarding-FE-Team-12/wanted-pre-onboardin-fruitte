import styled from 'styled-components';
import variables from '@styles/theme';

export const Overview = styled.div`
    display:flex;
    padding: ${variables.text.spacing};
    margin: 2rem;
`;

export const Thumbnail = styled.div`
    flex: 1 1 0;
    padding: 1.5rem;
`;

export const ThumbnailImage = styled.img`
    width: 100%;
    display: block; 
    border-radius: 5px;
`;

export const Selling = styled.div`
    flex: 1 1 0;
    padding: 1.5rem;
`;

export const SellingHeader = styled.section`
    display:flex;
    align-items:center;
`;

export const ProductActs = styled.div`
    display: flex;
    align-items: center;
`;

export const SaveProduct = styled.button`
    border: none;
    background-color: green;
    color: ${variables.colors.white};
    border-radius: 30px;
    font-size: 0.5rem;
    padding: 0.5rem;
`;

export const ShareProduct = styled(SaveProduct)`
`;

export const Description = styled.section`
    width: 50%;
    margin: ${variables.sideSpace.contentSmall} 0;
`;

export const DeliveryInfo = styled.div`
    margin: ${variables.sideSpace.contentSmall} 0;
`;

export const SpanStrong = styled.span`
    font-weight: 700;
    margin-right: 1rem;
`;

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    margin-bottom: 1rem;
`;

export const DropDown = styled.select`
    font-size: 1.3rem;
`;

export const Button = styled.button`
    background-color: ${props => props.cart ? `${variables.colors.darkGreen};` : `${variables.colors.white}`};
    border:none;
    color: ${props => props.cart ? `${variables.colors.white}` : `${variables.colors.darkGreen};`};
    padding: 2rem;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 5px;
    border: 1px solid ${variables.colors.darkGreen};
`;