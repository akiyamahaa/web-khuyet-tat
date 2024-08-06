import styled from '@emotion/styled';
import { Pagination } from '@mui/material';
import React from 'react'

export const CustomPagination = styled(Pagination)`
  & .MuiPagination-ul li {
    padding: 0 8px;
  }
  & .MuiPagination-ul {
    justify-content: space-between
  }
`;