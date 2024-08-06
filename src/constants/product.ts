export interface Product {
    id: number;
    storeId: number;
    title: string;
    imgUrl?: string;
    price?: number;
    isFavorite?: boolean;
    informations?: Informations
}
export interface Informations {
    size: string;
    author: string;
    topic: string;
    code: string;
    desc: string;
  }
export const products:Product[] = [
    {
        id: 1,
        storeId: 1,
        title: "Tranh sơn dầu - Vào thu",
        price: 100,
        isFavorite: true,
        imgUrl: "https://s3-alpha-sig.figma.com/img/321a/4df9/944ae13c55153572f28793affbb9ca03?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o3jtCvTzWoyul2Kf-bsi34FTCzl2GQu7FF5HYEoj1SrS7uKHsIAs5XQZ9xlDYmO0H7xf0j9d-y83DQacCV6APWpPhIU5qJGHv37wj4mJQTR9Iy6CJtYvkrjp3pDPKj~nwe9iNL2PnH8m6bp5AAnHXSI5xSYGG38HoiOFWRrnqPRL45Ia27MXXEuYH1eeNHEqa9-1TcF0gJrhqk31x8DV5CzfQaHc6AWb44~Cot4QMmei74pfg07UzMX2AK-PznC630vZFBdC30LW1l74ukY1FgZq6JV44VmPKMLZo-b7fy20CX~4FCpzxD-KKxEO0DBf1YcFVjoDmvyPr-fOaijpcQ__",
    },
    {
        id: 2,
        storeId: 1,
        price: 150,
        title: "Tranh sơn dầu - Xuân",
        imgUrl: "https://s3-alpha-sig.figma.com/img/1d80/8657/cf4eda8c0b6312e51a3100eef6339d25?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OoTMmxlhjatYxX10R5cnd2I9XgsA4ZB3sutQzPpDbctbxG5a~cGpoMYBbzXNASRupT8mAG9lPsDHQYe0xCgMcVlj6ty6KwhzSqPTRxgfhz2KxogzhN7AMpsh0ok4UhVViVLy340Vmd96N~m52AM6x1A8js9AUpLkMyhvGw6aLzRoY9c8cnqV8uUYUgdXwWlZC1F9tV25Ob4IqTP2UqXFi1VJBWTPr2hqoj8SdVeVlzVU9wmNEMp8kcqhYTAVNtWc~zFoJNBAKA7kdfshQENxYEFqNgmGDP~lvxPtnf5EUY1ThW~Gac7OQCbkiTqmi6mxKWsLZvjLdrqGQcAMbo-gIA__",
    },
    {
        id: 3,
        storeId: 1,
        price: 120,
        isFavorite: true,
        title: "Tranh sơn dầu - Xóm nhỏ",
        imgUrl: "https://s3-alpha-sig.figma.com/img/f440/9372/ff53510281eae4262158282c73ec3eaa?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G~JEmSK058cPLd1gY02-Z7wfF6jFIjnof5YXjvXo1xdP7X-POVzLCQfE23K3Tmb0N264LCPboqUELrTEyGSBAnGhBZV0JAOypjtEeYcxvNd7XBGhgx50JTSVyuz46WPDLzdJErEJRFOeGoHYuulkDUw~T1vw0zMC4rTNd62ZS9sCLYiU0VO44g2MQ3nxSTFcOgUQZ1F6B4OyofJfC6p8G-6y8pJK7NrLTN~0fu8s1VsdOvz3fIPA87FEXb93MJiXTNxf4vrnJHpIXbxDO3YTbhIfhJED9GiFmukPH2Hs7rGJWXDxJvGER5k0SqywNx174NU-fbnwDmw6p-nx8pH0Pg__",
    },
    {
        id: 4,
        storeId: 1,
        price: 240,
        title: "Tranh sơn dầu - Trưa hè",
        imgUrl: "https://s3-alpha-sig.figma.com/img/b870/3bfa/cefad00817e188d1839b22488e660be9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HliIKSdjq8UEPcO6945uhU2bE6KQX3LqarsTWzRuu31d6Y06ua7pUzlE6Hr1jUA7IPZwzhSJXHuynph-B8qabu125Sc2wUMIHV3KX9nAEf2F97slLDanrKKwa0rFIwDf-uY-ncoie905SaOSwFHQfkrcPBC0ptZ4jZkqPcA-0Zc5SL8bFTWi5tIKaRZnGDb0J0Hh--OTkGAXGK6sVhafZg1lmQpPquYWWG-fLocZgap-NrB1a~Qf7iIjf-QLp8HSNl8esHbvZuE2Zu~yOaKBYEyyp7yUhmC45uOqVVF4-2gelviCWg7UwgyqeiDIgl3ezgq-ZIWXNNjgIdvZ4Yvd9g__",
    },
    {
        id: 5,
        storeId: 1,
        isFavorite: true,
        price: 178,
        title: "Túi Xách 4 Cạnh Vuông",
        imgUrl: "/images/products/img_1.png",
    },
    {
        id: 6,
        storeId: 3,
        title: "Túi Thời Trang",
        imgUrl: "/images/products/img_3.png",
        price: 143,
        informations: {
            size: "70x70 cm",
            author: "NGUYỄN VĂN CHIẾN",
            topic: "VÀO THU",
            code: "CO-NVC34V",
            desc: "Các sản phẩm tranh sơn dầu do chúng tôi cung cấp là những sản phẩm của các bạn khuyết tật kém may mắn vẽ, Kính mong được sự ủng hộ của Quý khách hàng\n\nTất cả những sản phẩm của chúng tôi đều được làm bởi các thành viên Nhà May Mắn. Đây là một tổ chức bảo trợ xã hội dành cho các trẻ em mồ côi, những người bất hạnh, khuyết tật tại Việt Nam. Chúng tôi đều đề cao chất lượng và giá trị sản phẩm. Chúng tôi luôn kiểm tra và đóng gói đơn hàng kỹ lưỡng trước khi gửi đến các bạn để sản phẩm khi đến tay các bạn luôn có chất lượng tốt nhất và đơn hàng được chuyển giao một cách nhanh nhất mỗi khi bạn đặt hàng…"
        }
    },
    {
        id: 7,
        storeId: 1,
        price: 503,
        title: "Túi Thời Trang",
        imgUrl: "/images/products/img_4.png",
    },
    {
        id: 8,
        storeId: 2,
        price: 127,
        title: "Tranh sơn dầu - Vào thu",
        imgUrl: "/images/products/img_5.png",
    },
    {
        id: 9,
        storeId: 1,
        price: 512,
        title: "Tranh Sơn Dầu Để Bàn 19",
        imgUrl: "/images/products/img_5.png",
    },
    {
        id: 10,
        storeId: 2,
        price: 351,
        isFavorite: true,
        title: "Tranh sơn dầu để bàn 20",
        imgUrl: "/images/products/img_4.png",
    },
    {
        id: 11,
        storeId: 3,
        price: 247,
        title: "Tranh sơn dầu để bàn 20",
        imgUrl: "/images/products/img_2.png",
    },

]