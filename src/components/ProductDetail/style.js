import styled from 'styled-components';
import variables from '@styles/theme';

//Main sections
export const Wrapper = styled.div`
`;

export const Navigation = styled.nav`
    display:flex;
    border: 1px solid lightgray;
    border-radius: 2px;
    padding: ${variables.sideSpace.small};
`;

export const ProductFeature = styled.div`
`;


// Navigation
export const NavButton = styled.button`
    background-color: transparent;
    border:none;
    font-size: ${variables.sideSpace.small};
    flex: 1 1 auto;
`;
//ProductFeature
export const Content = styled.div`
    width: auto;
    display: block;
`;
export const Review = styled.div`
    /* 높이, 배경색 작업 전 구역 확인 위해서 임의지정해놓음 */
    height: 300px; 
    background-color: lightBlue;
`;
export const Question = styled.div`
    /* 높이, 배경색 작업 전 구역 확인 위해서 임의지정해놓음 */
    height: 300px;
    background-color: lightPink;
`;
