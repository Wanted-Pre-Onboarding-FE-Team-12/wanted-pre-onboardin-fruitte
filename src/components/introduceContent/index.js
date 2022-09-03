import React from 'react';
import styled from 'styled-components';
import COMMENT_LIST from './CommentData';

const IntroduceContent = props => {
  const { name } = props;
  return (
    <ContentContainer>
      <Title>
        <img
          src="https://cdn.imweb.me/upload/S201907022014f7de8adf6/075897ae563f4.png"
          alt="TitleImg"
        />
        <div>{COMMENT_LIST[name].title}</div>
      </Title>
      {COMMENT_LIST[name].comment.map(data => (
        <Comment key={data.id}>{data.comment}</Comment>
      ))}
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  text-align: center;
  max-width: 90%;
  min-width: 1080px;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
  font-size: 30px;
  img {
    width: 50px;
    height: 50px;
    margin: 15px 0;
  }
`;

const Comment = styled.div`
  font-size: 15px;
  font-weight: 100;
  margin: 10px 0;
`;

export default IntroduceContent;
