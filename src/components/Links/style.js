import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  .page-link {
    letter-spacing: ${props => props.theme.text.spacing};
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.25s;
  }

  // 네비게이션 링크
  .nav-links {
    display: flex;
    .page-link {
      padding: 1rem 2rem;
      margin-right: 1rem;
      font-size: 2.4rem;
      font-weight: 300;

      &:hover {
        transform: translateY(-5px);
      }
    }
  }

  // 관리자 페이지 링크
  .side-links {
    display: flex;
    flex-direction: column;
    align-items: center;

    .page-link {
      width: 100%;
      padding: 2rem 1rem;
      text-align: center;
      font-size: 3rem;
      font-weight: 300;

      &:hover {
        background: ${props => props.theme.colors.darkGreen};
      }
    }
  }
`;
