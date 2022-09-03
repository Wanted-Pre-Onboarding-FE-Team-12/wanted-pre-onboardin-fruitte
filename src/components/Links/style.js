import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  .page-link {
    letter-spacing: ${props => props.theme.text.spacing};
    text-transform: uppercase;
    cursor: pointer;
  }

  // 네비게이션 링크
  .nav-links {
    display: flex;
    .page-link {
      padding: 1rem 2rem;
      margin-right: 1rem;
      font-size: 2.4rem;
      font-weight: 300;

      transition: 0.25s;

      &:hover {
        transform: translateY(-5px);
      }
    }
  }

  // 관리자 페이지 링크
`;
