import React, { useEffect, useState } from 'react'
import StoreCard from './StoreCard'
import { dataStores } from '@/constants/stores'
import { CustomPagination } from '@/common/CustomPagination'

const ListStore = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(6)
  const [data, setData] = useState(dataStores)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }
  useEffect(() => {
    const start = (page - 1) * pageSize
    const end = page * pageSize
    setData(dataStores.slice(start, end))
  }, [page, pageSize])
  return (
    <div className='w-[75%] m-auto pt-[6rem] pb-[8rem] flex flex-col justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {
          data && data.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))
        }
      </div>
      <CustomPagination className='mt-16 w-full md:w-auto mx-auto  space-x-4' count={Math.ceil(dataStores.length / pageSize)} variant="outlined" onChange={handleChange} page={page} color="primary" />
    </div>
  )
}

export default ListStore