import React from 'react';
import styled from 'styled-components';

const IntroduceContent = props => {
  return (
    <ContentContainer>
      <Title>{props.title}asdfasdf</Title>
      {/* {props.map(data => (
        <>
          <Comment>{data.comment}</Comment>
        </>
      ))} */}
      <Title></Title>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  text-align: center;
  max-width: 90%;
  min-width: 1080px;
  height: 100%;
`;

const Title = styled.div``;

export default IntroduceContent;
