import React from 'react';
import { useState, useEffect } from 'react';
import { getBlogLink } from '@api/BlogLinkApi';
import styled from 'styled-components';

const IntroduceLink = () => {
  const [blogLink, setBlogLink] = useState([]);

  useEffect(() => {
    getBlogLink().then(res => {
      setBlogLink(res);
    });
  }, []);

  return (
    <>
      <Title>프룻파머 인터뷰</Title>
      <LinkContainer>
        {blogLink?.map(data => (
          <a key={data.id} href={data.url} target="_blank" rel="noopener noreferrer">
            <LinkImage src={data.src} alt={data.name} />
            <div>{data.title}</div>
          </a>
        ))}
      </LinkContainer>
    </>
  );
};

const Title = styled.div`
  margin: 25px;
  font-size: x-large;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 1080px;
  text-align: center;
  height: 300px;
  div {
    margin-top: 20px;
    font-size: small;
    font-weight: 700;
  }
`;

const LinkImage = styled.img`
  width: 80%;
  max-width: 280px;
  height: 100%;
`;

export default IntroduceLink;
