import React from 'react';

import Links from '@components/Links';

// CSS
import { Wrapper, NavLogo } from './style';

const Navbar = () => {
  return (
    <Wrapper>
      <NavLogo>
        <img
          className="logo-image"
          src="https://cdn.imweb.me/thumbnail/20210215/9c484dd3f6e7f.jpg"
          alt="logo"
        />
      </NavLogo>
      <Links />
    </Wrapper>
  );
};

export default Navbar;
