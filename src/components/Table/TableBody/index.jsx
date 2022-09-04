import variables from '@styles/theme';
import styled from 'styled-components';

const TableBody = props => {
  const { product, deleteProduct, setVisibleProduct } = props;

  return product?.map(item => (
    <Wrapper key={item.id}>
      <StyledTdId>{item.id}</StyledTdId>
      <StyledTdProduct>{item.name}</StyledTdProduct>
      <td>{item.price}</td>
      <td>
        <Button
          onClick={() => {
            deleteProduct(item.id);
          }}
        >
          삭제
        </Button>
      </td>
      <td>
        <Button
          onClick={() => {
            setVisibleProduct(item.id);
          }}
        >
          {item.is_visible ? '숨기기' : '보이기'}
        </Button>
      </td>
    </Wrapper>
  ));
};

const StyledTdId = styled.td`
  /* padding-left: 15px; */
  text-align: center;
`;

const StyledTdProduct = styled.td`
  width: 55%;
`;

const Button = styled.button`
  border: 0.2px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 5%;
  padding: 10%;
  background-color: white;
  :hover {
    background-color: ${variables.colors.lightGreen};
  }
`;

const Wrapper = styled.tr`
  margin-bottom: 5px;
  td {
    font-size: large;
  }
`;

export default TableBody;
