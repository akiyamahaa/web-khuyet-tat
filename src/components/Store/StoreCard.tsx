import { Store } from '@/constants/stores'
import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import { Link } from 'react-router-dom'
type StoreProps = {
    store: Store
}
const StoreCard = ({store}: StoreProps) => {
    return (
        <div className='h-[401px] p-2 bg-secondary-100 rounded-2xl flex flex-col'>
          <img src={store.imgUrl} alt={store.title} className='w-full h-[200px] object-cover position rounded-2xl' />
          <div className='flex flex-col flex-1 space-y-2 justify-evenly'>
            <LinesEllipsis
                className="font-semibold text-[24px]"
                text={store.title}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="words"
            />
            <LinesEllipsis
                className="font-normal text-subtitle text-base"
                text={store.description}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="words"
            />
            <div className="flex flex-row items-center justify-between space-x-2 p-2 rounded-sm">
              <span className='mr-1 text-subtitle'>
                {store.quantity > 10 ? `${store.quantity}+ sản phẩm` : `${store.quantity} sản phẩm`}
              </span>
              <Link to={`/store/${store.id}/detail`} className='flex flex-row items-center justify-center cursor-pointer text-tile group relative'>
                <span className='mr-[3px] duration-500 hover:opacity-95 hover:mr-[0.5px]'>Xem cửa hàng</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.42498 17.2253C7.26665 17.2253 7.10831 17.1669 6.98331 17.0419C6.74165 16.8003 6.74165 16.4003 6.98331 16.1586L12.4166 10.7253C12.8166 10.3253 12.8166 9.67526 12.4166 9.27526L6.98331 3.84193C6.74165 3.60026 6.74165 3.20026 6.98331 2.95859C7.22498 2.71693 7.62498 2.71693 7.86665 2.95859L13.3 8.39193C13.725 8.81693 13.9666 9.39193 13.9666 10.0003C13.9666 10.6086 13.7333 11.1836 13.3 11.6086L7.86665 17.0419C7.74165 17.1586 7.58331 17.2253 7.42498 17.2253Z" fill="#3758F9"/>
                </svg>
                <div className="absolute top-[100%] left-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 group-hover:w-4/5"></div>
              </Link>
            </div>
          </div>
        </div>
    )
}

export default StoreCard