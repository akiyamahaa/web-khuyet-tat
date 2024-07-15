import React, { useEffect, useState } from 'react'
import CardEvent from './CardEvent'
import { dataEvents } from '@/constants/events'
import { Pagination } from '@mui/material'
import styled from '@emotion/styled'
const CustomPagination = styled(Pagination)`
  & .MuiPagination-ul li {
    padding: 0 8px;
  }
`;
const ListEvent = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(6)
  const [data, setData] = useState(dataEvents)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }
  useEffect(() => {
    const start = (page - 1) * pageSize
    const end = page * pageSize
    setData(dataEvents.slice(start, end))
  }, [page])
  return (
    <div className='w-[75%] m-auto pt-[6rem] pb-[8rem] flex flex-col justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {
          data && data.map((event) => (
            <CardEvent key={event.id} event={event} />
          ))
        }
      </div>
      <CustomPagination className='mt-16 mx-auto space-x-4' count={Math.ceil(dataEvents.length / pageSize)} variant="outlined" onChange={handleChange} page={page} color="primary" />
    </div>
  )
}

export default ListEvent