import styled from '@emotion/styled';
export const Main = styled.main`
  height: 100%;
`;

export const Section = styled.section`
  padding-top: 40px;
  height: 100%;
  width: 70rem;
  margin: 0 auto;
  > div {
    padding: 10rem 0;
  }
`;

export const Header = styled.header`
  text-align: left;
  font-size: 2rem;
  font-weight: 600;
  line-height: 5rem;
  border-bottom: 1px solid #dadce0;
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  & > button {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  margin-bottom: 1.6rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  > button {
    margin-bottom: 1rem;
  }
  > span {
    color: ${props => (props.error ? `#f77` : `#111`)};
    display: block;
    text-align: left;
    padding-bottom: 0.8rem;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 600;
  }
`;

export const Input = styled.input`
    border-radius: 4px;
    font-size: 1.5rem;
    border: 1px solid ${props => (props.error ? `#f77` : `#dbdbdb`)};
    transition: border 80ms ease-out, box-shadow 80ms ease-out;
    box-sizing: border-box;
    margin: 0 0 2rem;
    width: 32rem;
    color: 
    background-color: 
    padding: 1.2rem;
    height: 4.2rem;
    padding: 1.3rem;
    &:focus {
        box-shadow: 0 0 0 5px ${props =>
          props.error ? `rgba(255, 199, 199, 0.5)` : `rgb(212, 237, 218)`};
    }
`;

export const Error = styled.div`
  font-size: 1.4rem;
  color: #f77;
  margin-top: -1rem;
  margin-bottom: 1.5rem;
`;

export const Success = styled.div`
  color: #2eb67d;
`;

export const AccordionWrapper = styled.div`
  margin: 2rem 0;
  input {
    width: 40rem;
  }
`;
