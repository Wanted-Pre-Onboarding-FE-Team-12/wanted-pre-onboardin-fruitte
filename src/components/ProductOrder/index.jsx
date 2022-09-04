import React, { useEffect, useState } from 'react';
import { Form, DropDown, Button, TotalPrice } from './style';
import ProductSelectList from '@components/ProductSelectList';

export const ProductOrder = ({ option, goToOrderHandle }) => {
    
    const [optionSelect, setOptionSelect] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        console.log(totalPrice)
    },[totalPrice])
    const handleChange = (event) => {
        const targetKey = event.target.value;
        if (targetKey === 'default'){
            return
        }
        if (optionSelect && !optionSelect.find(item => item.id === option[targetKey].id)){
            const currentSelected  = {...option[targetKey], 'count':1};
            setOptionSelect((oldSelectList)=> [
                ...oldSelectList,
                currentSelected
            ])
            console.log(currentSelected)
            setTotalPrice(old=>old+currentSelected.price)
        }
    }

    return (
        <section className="order">
            <Form>
                <label>*필수선택</label>
                <DropDown onChange={handleChange}>
                    <option value="default">필수선택입니다.</option>
                    {Object.keys(option).map((key) => {
                        let { id, name, price } = option[key];
                        return <option key={id} value={key}>{name} {price}</option>;
                    })}
                </DropDown>
            </Form>
            {optionSelect.length !== 0 && 
                <ProductSelectList
                    optionSelect={optionSelect}
                    setOptionSelect={setOptionSelect}
                    setTotalPrice={setTotalPrice}
                    totalPrice={totalPrice}
                />
            }
            <TotalPrice>
                <span>total: </span>
                <span>{totalPrice}</span>
                <span>원</span>
            </TotalPrice>
            <div className="orderButtons">
                <Button onClick={goToOrderHandle}>구매하기</Button>
                <Button cart>장바구니</Button>
            </div>
        </section>
    );
};

export default ProductOrder;