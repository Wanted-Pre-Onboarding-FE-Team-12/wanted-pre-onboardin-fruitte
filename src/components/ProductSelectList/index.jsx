import React from 'react';
import { SelectList, ListItem, ItemRow } from './style';

export const ProductSelectList = ({ optionSelectList, setOptionSelect }) => {
    const handleClick = (event) => {
        const deleteClickedId = +event.target.parentNode.parentNode.id;
        const updatedList = []
        optionSelectList.map((oldItem)=>{
            if (oldItem.id !== deleteClickedId){
                updatedList.push(oldItem)
            }
        })
        setOptionSelect(updatedList)
    }
    return (
        <SelectList>
            {optionSelectList && optionSelectList.map((option)=>(
                <ListItem key={option.name} id={option.id}>
                    <ItemRow>
                        <h3>{option.name} {option.price}원</h3>
                        <button onClick={handleClick}>X</button>
                    </ItemRow>
                    <ItemRow>
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <h3>가격: {option.price}</h3>
                    </ItemRow>
                </ListItem>
            ))}
        </SelectList>
    );
};

export default ProductSelectList;