import styled from 'styled-components';

const TableBody = props => {
  const { product, deleteProduct, setVisibleProduct } = props;

  return product?.map(item => {
    return (
      <Wrapper key={item.id}>
        <td style={{ width: '50px' }}>{item.id}</td>
        <td style={{ width: '250px' }}>{item.name}</td>
        <td style={{ width: '50px' }}>{item.price}</td>
        <td>
          <button
            onClick={() => {
              deleteProduct(item.id);
            }}
          >
            삭제
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              setVisibleProduct(item.id);
            }}
          >
            {item.is_visible ? '숨기기' : '보이기'}
          </button>
        </td>
      </Wrapper>
    );
  });
};

const Wrapper = styled.tr`
  display: flex;
  margin-bottom: 5px;
`;

export default TableBody;
