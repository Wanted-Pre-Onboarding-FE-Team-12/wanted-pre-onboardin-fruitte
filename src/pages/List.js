import Layout from '@layouts/index';
import React from 'react';
import IntroduceContent from '@components/introduceContent';
import IntroduceLink from '@components/IntroduceLink';
import CardList from '@components/CardList';
import styled from 'styled-components';

const List = () => {
  return (
    <Layout>
      <ListContainer>
        <IntroduceContent name="comment_header"></IntroduceContent>
        <CardList></CardList>
        <IntroduceContent name="comment_footer"></IntroduceContent>
        <IntroduceLink></IntroduceLink>
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

export default List;
