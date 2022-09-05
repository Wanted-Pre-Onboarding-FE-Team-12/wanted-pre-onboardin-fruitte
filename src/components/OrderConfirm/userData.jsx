import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CLIENT_DATA } from '../../constants/data/CLIENT_DATA';
import { OrderInfoWrapper, TableName, Delivery, DeleiverStatus } from './style';

const UserData = () => {
  const order = CLIENT_DATA;

  return (
    <OrderInfoWrapper>
      <TableContainer>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>
                <TableName>구매자 정보</TableName>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Delivery>
                  <DeleiverStatus>이름</DeleiverStatus>
                </Delivery>
              </TableCell>
              <TableCell align="center">
                <Delivery>
                  <DeleiverStatus>{order[0].user_info.name}</DeleiverStatus>
                </Delivery>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Delivery>
                  <DeleiverStatus>핸드폰 번호</DeleiverStatus>
                </Delivery>
              </TableCell>
              <TableCell align="center">
                <Delivery>
                  <DeleiverStatus>{order[0].user_info.phone_number}</DeleiverStatus>
                </Delivery>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Delivery>
                  <DeleiverStatus>이메일 주소</DeleiverStatus>
                </Delivery>
              </TableCell>
              <TableCell align="center">
                <Delivery>
                  <DeleiverStatus>{order[0].user_info.email}</DeleiverStatus>
                </Delivery>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </OrderInfoWrapper>
  );
};

export default UserData;
