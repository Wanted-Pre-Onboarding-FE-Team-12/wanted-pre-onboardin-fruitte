import variables from '@styles/theme';
import styled from 'styled-components';

const TableHeader = props => {
  const { titleArr } = props;

  return (
    <Wrapper>
      {titleArr.map((item, index) => (
        <th key={index}>{item.name}</th>
      ))}
      <th></th>
      <th></th>
    </Wrapper>
  );
};

const Wrapper = styled.tr`
  font-size: large;
  font-weight: bold;
  background-color: ${variables.colors.lightGreen};
  th {
    padding: 2rem;
  }
`;

export default TableHeader;
