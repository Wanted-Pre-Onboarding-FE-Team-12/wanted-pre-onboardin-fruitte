import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import { Wrapper } from './style';

const Links = () => {
  return (
    <Wrapper>
      <div className="nav-links">
        <Link className="page-link" to="/">
          Fruit Store
        </Link>
        <Link className="page-link" to="/admin">
          Fruit Admin
        </Link>
      </div>
    </Wrapper>
  );
};

export default Links;
