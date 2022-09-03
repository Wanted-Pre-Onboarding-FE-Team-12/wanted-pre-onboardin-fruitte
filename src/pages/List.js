import Layout from '@layouts/index';
import React from 'react';
import IntroduceContent from '@components/introduceContent';
import styled from 'styled-components';

const List = () => {
  return (
    <Layout>
      <ListContainer>
        <IntroduceContent name="comment_header"></IntroduceContent>
        <IntroduceContent name="comment_footer"></IntroduceContent>
        <BlogLinkContent></BlogLinkContent>
      </ListContainer>
    </Layout>
  );
};

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const BlogLinkContent = styled.div`
  display: flex;
  max-width: 90%;
  min-width: 1080px;
  text-align: center;
  height: 100%;
`;

export default List;
