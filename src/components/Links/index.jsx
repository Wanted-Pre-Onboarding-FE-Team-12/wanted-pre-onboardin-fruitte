import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import { Wrapper } from './style';

const Links = ({ styleClass, linkData }) => {
  return (
    <Wrapper>
      <div className={styleClass}>
        {linkData.map((link, index) => (
          <Link className="page-link" to={link.path} key={index}>
            {link.title}
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};

export default Links;
