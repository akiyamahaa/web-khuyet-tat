import React from "react";

function Footer() {
  return (
    <div style={{ backgroundColor: "#D7DEFE" }} >
      <div className=" flex justify-center ">
        <div className="container flex justify-between items-center">
          <div className="my-10">
            <div className="text-3xl font-bold">LOGO</div>
            <div className="font-bold">Câu lạc bộ người khuyết tật</div>
          </div>
          <div className="my-10">
            <div>Địa chỉ: Trung Hòa, Cầu Giấy, Hà Nội</div>
            <div>Hotline: 0923 456 789</div>
            <div>Email: info@gmail.com</div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center"
        style={{ borderTop: "1px solid #3758F9" }}
      >
        <div className="container flex justify-between items-center my-8">
          <div className="text-center font-bold">
            © 2024 Cau lac bo nguoi khuyet tat
          </div>
          <div className="text-center font-bold ">
            Made with by Nguyen Van A
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
