import BreadCrumb from "@/common/BreadCrumb";
import { dataEvents, Event } from "@/constants/events";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const contentStyle = {
  whiteSpace: "pre-line",
};
const EventDetail = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<Event>();
  useEffect(() => {
    const eventData = dataEvents.find((item) => item.id === Number(id));
    setData(eventData);
  }, [id]);
  return (
    <div className="bg-secondary-200 w-full m-auto">
      <div className="w-[75%] m-auto">
        <BreadCrumb
          className="pt-[6rem] pl-[3%]"
          customPaths={{ events: "Sự kiện" }}
          customTitles={{
            [`/events/${data?.id}`]: data?.title || "Chi tiết Sự kiện",
          }}
        />
        <div className="pt-[4rem] pb-[4rem] flex flex-col md:flex-row justify-center">
          <div className="flex flex-col gap-y-4 items-center w-100% md:gap-x-8 pt-[4rem]">
            <p className="text-normal text-[30px] font-bold text-center">
              {data?.title}
            </p>
            <p className=" text-[18px] text-center">{data?.description}</p>
            <i className="text-subtitle text-[14px]">
              Thực hiện vào {""}
              {data?.day}
            </i>
            <img src="" alt="" className="w-full" />
            {data?.subContent &&
              data.subContent.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-y-4 items-center w-100%"
                >
                  <div className="text-center">
                    <img src={item?.imageUrl} alt="" className="w-full" />
                    <span className=" text-subtitle  text-[14px]">
                      {item?.descImage}
                    </span>
                  </div>
                  <p style={contentStyle}>{item?.content}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
