import styled from 'styled-components';
import variables from '@styles/theme';
/**
 * @param {number} total - 해당 페이지의 총 개수
 * @param {number} limit - 페이지 당 보여줄 항목의 개수
 * @param {number} page - 현재 페이지
 * @param {React.Dispatch<React.SetStateAction<number>>} setPage - 페이지 조정할 setState 함수
 * @return {React.Component}
 */
function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 8px;
  margin: 0;
  background: white;
  color: black;
  font-size: 1rem;

  &:hover {
    background: ${variables.colors.lightGreen};
    cursor: pointer;
    color: black;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: rgba(0, 0, 0, 0.2);
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: ${variables.colors.lightGreen};
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
