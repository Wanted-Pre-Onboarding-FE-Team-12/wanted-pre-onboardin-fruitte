import React from 'react';
import Links from '@components/Links';
import { adminLinks } from '@utils/links';
import { Wrapper } from './style';

const Sidebar = () => {
  return (
    <Wrapper>
      <Links styleClass="side-links" linkData={adminLinks} />
    </Wrapper>
  );
};

export default Sidebar;
