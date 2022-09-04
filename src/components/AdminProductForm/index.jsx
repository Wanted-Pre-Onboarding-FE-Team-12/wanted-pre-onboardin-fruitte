import React from 'react';

import useInput from '@hooks/useInput';

// CSS
import { Header, Form, Label, Input, Error, Section, Container, AccordionWrapper } from './style';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Typography,
  Button,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AdminProductForm = () => {
  const {
    value: productName,
    hasError: productNameHasError,
    valueChangeHandler: onChangeProductName,
    inputBlurHandler: onBlurProductName,
  } = useInput(value => value.trim() !== '');

  const {
    value: productPrice,
    hasError: productPriceHasError,
    valueChangeHandler: onChangeProductPrice,
    inputBlurHandler: onBlurProductPrice,
  } = useInput(value => value.trim() !== '');

  const formSubmitHandler = () => {};
  return (
    <Section>
      <div>
        <Header>상품 추가</Header>

        <Form onSubmit={formSubmitHandler}>
          <Container>
            <Label id="productName-label" error={productNameHasError}>
              <span>상품 이름</span>
              <div>
                <Input
                  type="text"
                  id="productName"
                  name="productName"
                  value={productName}
                  placeholder="상품명"
                  onChange={onChangeProductName}
                  onBlur={onBlurProductName}
                  error={productNameHasError}
                  required
                />
              </div>
              {productNameHasError && <Error>상품명을 입력해주세요.</Error>}
            </Label>
            <Label id="productPrice-label" error={productPriceHasError}>
              <span>가격</span>
              <div>
                <Input
                  type="text"
                  id="productPrice"
                  name="productPrice"
                  value={productPrice}
                  placeholder="상품명"
                  onChange={onChangeProductPrice}
                  onBlur={onBlurProductPrice}
                  error={productPriceHasError}
                  required
                />
              </div>
              {productPriceHasError && <Error>상품 가격을 입력해주세요.</Error>}
            </Label>
          </Container>
          <Container>
            <FormControlLabel
              control={<Checkbox />}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              label={<Typography sx={{ fontSize: 18 }}>품절 여부</Typography>}
            />
            <FormControlLabel
              control={<Checkbox />}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              label={<Typography sx={{ fontSize: 18 }}>세일 여부</Typography>}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              label={<Typography sx={{ fontSize: 18 }}>상품 목록 표시 여부</Typography>}
            />
          </Container>

          <AccordionWrapper>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontSize: 20 }}>원산지 정보</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Label>
                  <span>원산지 정보</span>
                  <Input placeholder="원산지 정보를 입력해 주세요." />
                </Label>
                <Label>
                  <span>배송가능</span>
                  <Input placeholder="가능하면 true 아니면 false를 입력해 주세요." />
                </Label>
                <Label>
                  <span>배송비</span>
                  <Input placeholder="배송비를 입력해 주세요." />
                </Label>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography sx={{ fontSize: 20 }}>옵션</Typography>
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
          </AccordionWrapper>

          <Button variant="contained" color="success">
            <Typography sx={{ fontSize: 20 }}>상품 추가하기</Typography>
          </Button>
        </Form>
      </div>
    </Section>
  );
};

export default AdminProductForm;
