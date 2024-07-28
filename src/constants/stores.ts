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
        imgUrl: 'https://s3-alpha-sig.figma.com/img/5707/d4de/95111083e6750da82b9a08051dd99324?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOOVD9BvEY72ysAk6v4-mwMNfE3LO~djGUBvH-bym925MWXv6Yx2nnnkwL3S4W959G2iSL6EZmKgndh0Ppdj8WN1EfAL7lKR6yInUJJyAwanX8aUxlUmex0WBZPQHfphze7-O~KA6ogggVdmdwr9Xbci7QE7gHarKJtdzUhHtIeIzn7DbmklQlzoU3dZLkcFscXD8O2t9-wnG3vX7XmiOkql-5APtSmVUOWLigzPA9E2jHyWQHRCDi6S40525Xb1GJln8vhp8lQdtDejY6y10dX9dTO1mOPs0XdkuglUm8CJesTGGlmPXZwtPM1fcPvMxipQrrLWOXHBWD~KAoifxw__',
        title: 'Việt 54',
        description: 'Kênh bán hàng online các sản phẩm do người Việt Nam sản xuất. Với tâm niệm mong muốn góp phần tạo công ăn việc làm cho bà con cô bác ở các vùng miền khác nhau ở Việt Nam,',
        quantity: 500,
        introduce: "Việt 54 - Viet54.vn là kênh bán hàng online các sản phẩm do người Việt Nam sản xuất. Với tâm niệm mong muốn góp phần tạo công ăn việc làm cho bà con cô bác ở các vùng miền khác nhau ở Việt Nam, từ các thành thị đến những vùng sâu vùng xa đầy khó khăn, Viet54 quyết tâm mang những hàng hóa chất lượng cao này của người Việt lan tỏa khắp Việt Nam và các nước trên Thế giới.",
        address: "220 Lê Niệm, Phường Phú Thạnh, Quận Tân Phú, Thành phố Hồ Chí Minh.",
        phone: "1900 8154",
        email: "info@viet54.vn",
        company: "Công ty Cổ phần Việt 54",
        website: "www.viet54.vn",
        openHours: [
            { startTime: "08:00", endTime: "22:00" },
        ]
    },
    {
        id: 2,
        imgUrl: 'https://s3-alpha-sig.figma.com/img/e211/fe77/b9b31718d1fba07d3dec73ad8c268f55?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mz5E3CqWXpMRbSroZrFxFDvetf5er9EDY3lId8sqsEkayyFEJpW3HyQWu2Mq9kiGw5-FK7OCN6V6YePa~2CioPiMCmMtfJg63vHSHsxAtnj7rkK3pVppuIoip-JK7OLpSI4psY2ZgKHommxpHFpEKuOAqBK3RoY~CNSG0otQalgZZznp0IqSQDZHt2hT4DFkiDWVHmlXMOeSKv0wS9x3QjTL0eBMbz6LddNNCEexkLGu8xsnt60sOOeShCWv7JT6vos2rxbocuYg~m4wV7bpNxIvQACBY2LP3s-lWw8alJ3~aelDIMlO4K7Y1jXbAhOx~W2SlESXQGSUqz0TmL3ydw__',
        title: 'Chạm vào xanh',
        company: "Công ty TNHH Chạm vào xanh",
        description: 'Doanh nghiệp được người khuyết tật sáng lập và điều hành.',
        quantity: 9,
        introduce: "Chạm vào xanh cầu nối đưa những sản phẩm mà người khuyết tật làm đến với cộng đồng để qua đó cải thiện đời sống tinh thần, vật chất của người khuyết tật cũng như lan tỏa thông điệp: “Khuyết tật không có nghĩa là sống buồn, là đầu hàng số phận”; “Khuyết tật là bất tiện, chứ không phải bất hạnh”",
        address: "chung cư N04B2 phố Thành Thái, quận Cầu Giấy, Hà Nội.",
        phone: "1900 1672",
        email: "chamvaoxanh@info.vn",
        openHours: [
            { startTime: "09:00", endTime: "19:00" },
        ]
    },
    {
        id: 3,
        imgUrl: 'https://s3-alpha-sig.figma.com/img/d420/06b5/7d7cae47ea9f3077d5a8a16f4e59ea27?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jxs8IwyF6MR1YBOa5cw5uohkIKGQtbfouZAka3z8yx2nU3hxMEC1HR1t80B3LnXgT3Zmc52F3PC8CfBzDwm98-ijuqczLi~9Dz6gNL0yXVvMl0DNtpWdoDhYxEJVn9WuYj32SeNfHju-bfsxl0XBs0mcj0cCjerBKucbmre7mMFdXGH093gd8cdkxmQgTGu0E6-ZksVHxz-MlIereRVKxcor~spWrxrmoi-C2X9EFJMvLlqvFvGaMrNRN0ToE4c3OTbySCZmKQzZEEWq7U4lT6BTqrrxr4MOdGOWrW~OvF-R1RDa8OcCdPCSbebcT89wJRZ3V5~MI2Z7IZUMxsvjng__',
        title: 'Kym Việt',
        company: "Doanh Nghiệp SX Hàng Thủ Công Sáng Tạo Kym Việt",
        description: 'Chúng tôi là những người khuyết tật vận động, nên hơn ai hết chúng tôi là những người thấu hiểu và đồng cảm sâu sắc với những khao khát được làm việc, được cống hiến và làm chủ cuộc sống của người khuyết tật. Kymviet từ đó ra đời và là nơi tiếp nhận, đào tạo nghề, tổ chức sản xuất quy mô nhỏ, tạo nên một môi trường đặc biệt phù hợp với người khuyết tật.',
        quantity: 30,
        introduce: "Việt 54 - Viet54.vn là kênh bán hàng online các sản phẩm do người Việt Nam sản xuất. Với tâm niệm mong muốn góp phần tạo công ăn việc làm cho bà con cô bác ở các vùng miền khác nhau ở Việt Nam, từ các thành thị đến những vùng sâu vùng xa đầy khó khăn, Viet54 quyết tâm mang những hàng hóa chất lượng cao này của người Việt lan tỏa khắp Việt Nam và các nước trên Thế giới.",
        address: "123 Đ. Trung Văn, Trung Văn, Nam Từ Liêm, Hà Nội 12011.",
        phone: "0984 089 990",
        email: "kymviet@vn.com",
        openHours: [
            { startTime: "08:00", endTime: "17:30" },
        ]
    },
]