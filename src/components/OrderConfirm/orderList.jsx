import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  IsBest,
  OrderedGoodsImg,
  OrderedInfo,
  IsSale,
  LabelWrap,
  PriceWrap,
  PrevPrice,
  CurrPrice,
  ProductHeader,
  OrderIdWrap,
} from './style';
import { CONFIRM_DATA } from 'src/constants/data/CONFIRM_DATA';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const OrderList = () => {
  const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  const goods = CONFIRM_DATA;

  return (
    <TableContainer component={Paper} style={{ width: '1200px' }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" style={{ fontSize: '18px' }}>
              상품정보
            </StyledTableCell>
            <StyledTableCell align="right" style={{ fontSize: '18px' }}>
              <ProductHeader>주문일자</ProductHeader>
            </StyledTableCell>
            <StyledTableCell align="right" style={{ fontSize: '18px' }}>
              주문번호
            </StyledTableCell>
            <StyledTableCell align="right" style={{ fontSize: '18px' }}>
              주문금액(수량)
            </StyledTableCell>
            <StyledTableCell
              align="right"
              style={{ fontSize: '18px', paddingRight: '25px' }}
            ></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {goods?.map(
            ({ id, name, price, delivery_info, sale_price, imgUrl, option, is_best, is_sale }) => (
              <StyledTableRow key={id}>
                <StyledTableCell component="th" scope="row" style={{ display: 'flex' }}>
                  <OrderedGoodsImg src={imgUrl} alt="goods" />
                  <OrderedInfo>
                    <span>{delivery_info[0].origin}</span>
                    <span>{name}</span>
                    <span>옵션 : {option[0].name}</span>
                  </OrderedInfo>
                </StyledTableCell>
                <StyledTableCell align="right" style={{ textAlign: 'center' }}>
                  {randomDate(new Date(2022, 7, 1), new Date()).toLocaleDateString()}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <OrderIdWrap>{id}</OrderIdWrap>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <PriceWrap>
                    <PrevPrice>
                      {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                    </PrevPrice>
                    <CurrPrice>
                      {(price * sale_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                    </CurrPrice>
                  </PriceWrap>
                </StyledTableCell>

                <StyledTableCell align="right">
                  <LabelWrap>
                    {is_best && <IsBest>BEST</IsBest>}
                    {is_sale && <IsSale>SALE</IsSale>}
                  </LabelWrap>
                </StyledTableCell>
              </StyledTableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderList;
