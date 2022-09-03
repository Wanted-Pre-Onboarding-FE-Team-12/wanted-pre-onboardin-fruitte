import React from 'react';
import { Wrapper } from './style';

const Footer = () => {
  return (
    <Wrapper>
      <p>Copyright &copy; {new Date().getFullYear()} 프루떼-오늘도프룻해! All rights reserved.</p>
    </Wrapper>
  );
};

export default Footer;
