import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import IntroduceContent from '@components/introduceContent';
import styled from 'styled-components';

const List = () => {
  const [introduceComment, setIntroduceComment] = useState([]);

  useEffect(() => {
    getIntroduceData();
  }, []);

  const getIntroduceData = async () => {
    axios
      .get('http://localhost:3000/data/introduce_comment.json')
      .then(data => setIntroduceComment(data))
      .catch(e => {
        // API 호출이 실패한 경우
        console.error(e); // 에러표시
      });
  };
  console.info(introduceComment.data);

  return (
    <ListContainer>
      {introduceComment && (
        <>
          <div>{introduceComment[0]}</div>
          <IntroduceContent comment={introduceComment[0]}></IntroduceContent>
          <IntroduceContent comment={introduceComment[1]}></IntroduceContent>
          <BlogLinkContent>1234</BlogLinkContent>
        </>
      )}
    </ListContainer>
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
