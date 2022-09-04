import styled from 'styled-components';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

/**
 * @param {Array} titleArr - 테이블의 헤더 항목
 * @param {Array} product - 현재 페이지에서 표현할 데이터
 * @param {(id)=>{}} deleteProduct - 데이터 삭제 함수
 * @param {(id)=>{}} setVisibleProduct - 데아터 보이기 여부 변경 함수
 * @return {React.Component}
 */
const Table = props => {
  const { titleArr, product, deleteProduct, setVisibleProduct } = props;

  return (
    <StyledTable>
      <thead>
        <TableHeader titleArr={titleArr} />
      </thead>
      <tbody>
        <TableBody
          product={product}
          deleteProduct={deleteProduct}
          setVisibleProduct={setVisibleProduct}
        />
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  width: 100%;
  height: 60vh;
  tbody tr:nth-child(2n + 1) {
    border-bottom: 0.2px solid;
  }
  tbody tr:nth-child(2n) {
    border-bottom: 0.2px solid;
    border-top: 0.2px solid;
  }
`;

export default Table;
