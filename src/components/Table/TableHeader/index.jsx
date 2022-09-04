const TableHeader = props => {
  const { titleArr } = props;

  return (
    <tr style={{ display: 'flex' }}>
      {titleArr.map((item, index) => (
        <th key={index} style={{ width: item.width }}>
          {item.name}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
