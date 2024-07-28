import React from 'react'

type BannerProps = {
    name: string,
    imgUrl: string
}

const Banner = ({name, imgUrl}:BannerProps) => {
  return (
    <div className="w-full h-[352px] relative bg-cover" style={{ backgroundImage: `url(${imgUrl})`, backgroundPosition: "bottom 51% center" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <div className="text-white text-[28px] uppercase font-bold">{name}</div>
        <div className="w-16 h-1 bg-blue-500 mt-2"></div>
      </div>
    </div>
  )
}

export default Banner