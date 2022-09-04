import React from 'react';
import { Form, DropDown, Button } from './style';
import { useRecoilValue, useRecoilState } from 'recoil';
import ProductSelectList from '@components/ProductSelectList';

export const ProductOrder = ({ option, optionSelectState }) => {
    
    const [optionSelect, setOptionSelect] = useRecoilState(optionSelectState);
    const optionSelectList = useRecoilValue(optionSelectState); // id : price, count

    
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
                    optionSelectList={optionSelectList}
                    setOptionSelect={setOptionSelect}
                />
            }
            <div className="orderButtons">
                <Button>구매하기</Button>
                <Button cart>장바구니</Button>
            </div>
        </section>
    );
};

export default ProductOrder;