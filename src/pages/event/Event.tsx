import Banner from '@/components/Banner/Banner'
import ListEvent from '@/components/Event/ListEvent'
import React from 'react'

const Event = () => {
  return (
    <div className='bg-secondary-200 w-full'>
      <Banner name = "Sự kiện" imgUrl='./images/events/event.png'/>
      <ListEvent />
    </div>
  )
}

export default Event