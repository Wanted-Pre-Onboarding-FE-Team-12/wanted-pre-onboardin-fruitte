import React from 'react';
import { Form, DropDown, Button } from './style';

export const ProductOrder = ({ option }) => {
    
    return (
        <section className="order">
            <Form>
                <label>*필수선택</label>
                <DropDown>
                    <option value="default">필수선택입니다.</option>
                    {Object.keys(option).map((key) => {
                        let { id, name, price } = option[key];
                        return <option key={id} value={name}>{name} {price}</option>;
                    })}
                </DropDown>

            </Form>
            <div className="orderButtons">
                <Button>구매하기</Button>
                <Button cart>장바구니</Button>
            </div>
        </section>
    );
};

export default ProductOrder;