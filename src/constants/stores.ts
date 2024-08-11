export interface Store {
  id: number;
  imgUrl: string;
  title: string;
  description?: string;
  quantity: number;
  introduce?: string;
  address?: string;
  phone?: string;
  company?: string;
  email?: string;
  website?: string;
  openHours?: OpenHours[];
}
export interface OpenHours {
  startTime: string;
  endTime: string;
}
export const dataStores: Store[] = [
  {
    id: 1,
    imgUrl: "/images/Store/viet54.png",
    title: "Việt 54",
    description:
      "Kênh bán hàng online các sản phẩm do người Việt Nam sản xuất. Với tâm niệm mong muốn góp phần tạo công ăn việc làm cho bà con cô bác ở các vùng miền khác nhau ở Việt Nam,",
    quantity: 500,
    introduce:
      "Việt 54 - Viet54.vn là kênh bán hàng online các sản phẩm do người Việt Nam sản xuất. Với tâm niệm mong muốn góp phần tạo công ăn việc làm cho bà con cô bác ở các vùng miền khác nhau ở Việt Nam, từ các thành thị đến những vùng sâu vùng xa đầy khó khăn, Viet54 quyết tâm mang những hàng hóa chất lượng cao này của người Việt lan tỏa khắp Việt Nam và các nước trên Thế giới.",
    address:
      "220 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, Thành phố Hồ Chí Minh.",
    phone: "1900 8154",
    email: "info@viet54.vn",
    company: "Công ty Cổ phần Việt 54",
    website: "www.viet54.vn",
    openHours: [{ startTime: "08:00", endTime: "22:00" }],
  },
  {
    id: 2,
    imgUrl:
      "https://handmade.sgf.org.vn/assets/news/2021_10/su-kien-sgf-20-thang-10-ngay-dau-1.jpg",
    title: "SGF Handmade",
    company: "SGF Handmade",
    description:
      "Sản phẩm thủ công được trang trí bằng cách thêu, vẽ hoặc ứng dụng nghệ thuật giấy napkin",
    quantity: 9,
    introduce:
      "Sản phẩm thủ công được trang trí bằng cách thêu, vẽ hoặc ứng dụng nghệ thuật giấy napkin, nghệ nhân là người khuyết tật hoặc giáo viên dạy nghề cho người khuyết tật",
    address: "Số 40 Hoàng Hoa Thám, P. 10, Đà Lạt, Lâm Đồng",
    phone: "0972210842",
    email: "sgfvietnamkorea@gmail.com",
    openHours: [{ startTime: "09:00", endTime: "19:00" }],
  },
  {
    id: 3,
    imgUrl: "/images/Kym/Kym Viet.png",
    title: "Kym Việt",
    company: "Doanh Nghiệp SX Hàng Thủ Công Sáng Tạo Kym Việt",
    description:
      "Chúng tôi là những người khuyết tật vận động, nên hơn ai hết chúng tôi là những người thấu hiểu và đồng cảm sâu sắc với những khao khát được làm việc, được cống hiến và làm chủ cuộc sống của người khuyết tật. Kymviet từ đó ra đời và là nơi tiếp nhận, đào tạo nghề, tổ chức sản xuất quy mô nhỏ, tạo nên một môi trường đặc biệt phù hợp với người khuyết tật.",
    quantity: 30,
    introduce:
      "Việt 54 - Viet54.vn là kênh bán hàng online các sản phẩm do người Việt Nam sản xuất. Với tâm niệm mong muốn góp phần tạo công ăn việc làm cho bà con cô bác ở các vùng miền khác nhau ở Việt Nam, từ các thành thị đến những vùng sâu vùng xa đầy khó khăn, Viet54 quyết tâm mang những hàng hóa chất lượng cao này của người Việt lan tỏa khắp Việt Nam và các nước trên Thế giới.",
    address: "123 Đ. Trung Văn, Trung Văn, Nam Từ Liêm, Hà Nội 12011.",
    phone: "0984 089 990",
    email: "kymviet@vn.com",
    website: "www.kymviet.vn",
    openHours: [{ startTime: "08:00", endTime: "17:30" }],
  },
];
