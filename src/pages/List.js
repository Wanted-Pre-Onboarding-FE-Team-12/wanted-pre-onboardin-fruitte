import Layout from '@layouts/index';
import React from 'react';
// import { useRecoilState } from 'recoil';
// import { productState } from 'src/store/store';
import IntroduceContent from '@components/introduceContent';
import IntroduceLink from '@components/IntroduceLink';
import CardContainer from '@components/CardContainer';
import styled from 'styled-components';

const List = () => {
  // const [product] = useRecoilState(productState);
  return (
    <Layout>
      <ListContainer>
        <IntroduceContent name="comment_header" />
        <CardContainer />
        <IntroduceContent name="comment_footer" />
        <IntroduceLink />
      </ListContainer>
    </Layout>
  );
};

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5%;
`;

export default List;
