import React from 'react';
import { SelectList, ListItem, ItemRow } from './style';

export const ProductSelectList = ({ optionSelect, setOptionSelect, setTotalPrice }) => {
  const handleClick = event => {
    const deleteClickedId = +event.target.parentNode.parentNode.id;
    const updatedList = [];
    optionSelect.map(oldItem => {
      if (oldItem.id !== deleteClickedId) {
        updatedList.push(oldItem);
      }
    });
    setOptionSelect(() => {
      return updatedList;
    });
  };

  const updateTotalPrice = () => {
    let newTotalPrice = optionSelect.reduce(function (prev, current) {
      return prev + current.count * current.price;
    }, 0);
    setTotalPrice(() => {
      return newTotalPrice;
    });
  };

  const handleChange = event => {
    const changedQuantity = event.target.value;
    const changedItem = event.target.parentNode.parentNode;

    let findItem = optionSelect.find(item => item.id === +changedItem.id);
    findItem = { ...findItem, count: +changedQuantity };

    const newOptionSelect = [];
    optionSelect.map(option => {
      console.log(option.id, +changedItem.id);
      if (option.id !== +changedItem.id) {
        newOptionSelect.push(option);
      } else {
        newOptionSelect.push(findItem);
      }
    });
    setOptionSelect(() => {
      return newOptionSelect;
    });
    updateTotalPrice();
  };
  return (
    <SelectList>
      {optionSelect &&
        optionSelect.map(option => (
          <ListItem key={option.name} id={option.id}>
            <ItemRow>
              <h3>
                {option.name} {option.price}원
              </h3>
              <button onClick={handleClick}>X</button>
            </ItemRow>
            <ItemRow>
              <select onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <h3>가격: {option.count * option.price}</h3>
            </ItemRow>
          </ListItem>
        ))}
    </SelectList>
  );
};

export default ProductSelectList;
