export interface Event {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  dateTime: string;
  day?: string;
  subContent?: SubContent[];
}

interface SubContent {
  id: string | number;
  imageUrl: string;
  descImage: string;
  content: string;
}
export const dataEvents: Event[] = [
  {
    id: 1,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/dad9/d877/23d08ad2911c6469ba1a6b4e1ffc466d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbGLP5jvPDeBCCbsb~A1U2B1SB4a4aMGNS8aRUXT44IQEcv2zbgyAXDS9KDnTsEzhtza72P77rQvDJONyIKdTJwIeim6SZuUGJgd27mvUzNnVDUOB5Sye0m8rBcaJoS4yYx55haNTc0O0mPiqRw5bELULW36lk2i~NVcR4SrqKFM-INOAoz1pRnx9NtcYQFpdapvEAlfsZtxJA8Gt11aXUvKWQju6PV2F7lnch1lk8E-8qwqhyZyWQJ-TSKOvTEzYLdGFCkHFZ12doG-N6EZQARs8F8QDO3oWmh-zyGkccOhzNylfTyS0obq571Q2N2Jv3wAnZLXKlQNjjYbMydA-w__",
    title: "Tư vấn pháp luật và hoà nhập xã hội miễn phí cho người khuyết tật",
    description:
      "Đoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai...",
    dateTime: "8 phút trước",
    day: "Ngày 31/05/2024",
    subContent: [
      {
        id: 1,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b0d8/d56f/c1806f8883cbd4c5998f024877c5c3dd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=chBwMqRwQ3QcpdnOWqGo4bNLveTN7k02KhlgBxXquDyqgGd2RnuQSM87y27KtbiV1lV0wq7-BjXdbdgVjTjF-YcYHFQTEe4dQEBM52gokeqSE4Iy4rfHeRKGQgEmK8IepgDpG1dYXZcc0b6lBWogMzMclZ57LhkNgxgQkCQ9FbxK~MGQZSiXveT-JTgBmAL~UhguyGCeYkO4NKdMeMd4JrtZYfyx0eWLfcm~6vzDGesFQvBdcACLEX4WXNjzhMKBHM-NMAchV7psP4353qnJyxdgj0s19ttftwtY~wwX~ZMwOWljsl4AEiCKROO~SpWREe5VIPrWXGzfbY3XZxZwMA__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Ngày 03-04/5/2024, Viện ACDC phối hợp cùng Sở Lao động – Thương binh và Xã hội, Trung tâm Trợ giúp pháp lý tỉnh và các tổ chức hỗ trợ người khuyết tật tỉnh Bình Định tổ chức tư vấn pháp luật và hoà nhập xã hội cho người khuyết tật huyện Tây Sơn. Sự kiện được diễn ra trong khuôn khổ dự án Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam tại tỉnh Bình Định.\nĐoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai – Giám đốc dự án; bà Lê Hải Yến, Trưởng phòng Luật Viện ACDC; bà Nguyễn Thị Thúy Hằng, đại diện Sở Lao động – Thương binh và Xã hội tỉnh; ông Lê Thành Sơn – Phó Giám đốc Trung tâm Trợ giúp pháp lý nhà nước tỉnh; ông Bùi Trung Dũng – Phó Chủ tịch Hội Bảo trợ người khuyết tật và Bảo vệ quyền trẻ em tỉnh; bà Nguyễn Thị Kim Vân – Phó Giám đốc Trung tâm giáo dục nghề nghiệp tỉnh; bà Trần Thị Thúy Nga – Phó Giám đốc Phòng Giao dịch Ngân hàng Chính sách xã hội huyện Tây Sơn.\nMục tiêu của hoạt động nhằm nâng cao hiểu biết cho người khuyết tật hoặc gia đình người khuyết tật về các chính sách, pháp luật hiện hành liên quan đến người khuyết tật; giúp tư vấn, giải đáp trực tiếp các câu hỏi, vụ việc liên quan đến pháp luật như cho người khuyết tật hoặc gia đình của người khuyết tật có nhu cầu.\nChia sẻ tại buổi tư vấn, ông Nguyễn Hữu Vinh, Trưởng phòng pháp luật về lao động xã hội, Trung tâm Trợ giúp pháp lý tỉnh Bình Định: Người dân đến tham gia hoạt động rất đông, và có nhiều thắc mắc không hiểu, cần được giải đáp. Người khuyết tật và người thân do tôi tư vấn đa phần là vấn đề thừa kế, về thủ tục làm giấy chứng nhận quyền sử dụng đất, tài sản trên đất… Hình thức tư vấn trực tiếp như thế này vô cùng hiệu quả và thiết thực với người khuyết tật.`,
      },
      {
        id: 2,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/433c/42af/8f00633cf3ad3948ac1fd4b1f9b48b2e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqBy209rek5vAr7PipdOUY5dxsElHDF7Kg~aMDOOS4SahN-~jPkfKg7g9a6ygsAcoUMkjdjt9P-pqc5csMXg5ZZG5l7820KpXRcin9T~dp-FWVnrVwluPHW1zt-eVhk7DruLB2Lw1XayV80NB8HkldZ~oO7G30rKx7OJaEe1qeBZs9OtNmjxLQ8KX1Bycz3IwyFPfPDAgM4TZ~EvBRa32KhJ0URMx9IselOYdM9AIgW~Nbb6rktwUftFw8hhSV~LIEsC2rogqPTCsljaphMXd6WLYwTsyo3SSfst-aML8yz~PHeNKjH0euT6RoVfBYTnAq5extgKypQsEmgAkBdvJQ__",
        descImage:
          "Đoàn công tác đang chia sẻ về các chính sách pháp luật và hoà nhập khuyết tật",
        content: `Chia sẻ sau khi được tư vấn, chị N.T.N.L, người nhà của người khuyết tật tại xã Bình Nghi cho biết: Tôi hôm nay đến với mong muốn giải đáp câu hỏi về tăng trợ cấp cho người khuyết tật. Sau khi được tư vấn, tôi hiểu rõ được mức trợ cấp hiện tại là mức cao nhất của tỉnh. Tôi rất hài lòng với cách tư vấn tận tình và cặn kẽ của đoàn.\n\nÔng V.T, người khuyết tật xã Bình Hoà nói: Từ lâu, tôi đã băn khoăn về quyền thừa kế của mình nhưng không biết hỏi ai. Giờ được đoàn tư vấn quy trình thực hiện, tôi sẽ làm theo hướng dẫn và biết tìm đến đâu để được hỗ trợ.\nChị T.T.C, người khuyết tật vui mừng chia sẻ: Đây là lần đầu tiên tôi được tham gia một sự kiện như thế này. Buổi tư vấn vô cùng bổ ích vì được giải đáp từng vấn đề riêng của từng người. Tôi mong có nhiều hơn nữa hoạt động như thế này, vì người khuyết tật chúng tôi tiếp cận thông tin rất hạn chế. Tôi vô cùng biết ơn đoàn tư vấn đã đến tận nơi, hỗ trợ tận tình cho chúng tôi.\nHoạt động nằm trong khuôn khổ dự án “Hỗ trợ cải thiện chất lượng sống của người khuyết tật tại các tỉnh bị phun rải nặng chất da cam” (gọi tắt là Dự án Hoà nhập II) tại tỉnh Bình Định và Kon Tum giai đoạn 2023 – 2026, do Cơ quan Phát triển Quốc tế Hoa Kỳ (USAID) tài trợ, Trung tâm hành động quốc gia khắc phục hậu quả chất độc hóa học và môi trường (NACCET) thuộc Bộ Quốc phòng làm Chủ dự án. Viện ACDC là một trong các đối tác triển khai các hoạt động dưới sự quản lý của Humanity & Inclusion (HI).`,
      },
    ],
  },
  {
    id: 2,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/457a/3aab/1c61f44dde4338a6f8f2b1e407124944?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bd2YdURKKL4pedd4nVf3owuRz5OlWhWvEtoAtR~0ozide283VmFF8yLvcn4mh2wC-BgYR3FReTSBOICp4xAxm-n9Hq~2T0PpSRZmdIYF3DDuiT0~QLzB7SDSd~bAHxBjam5XYc5nPODOBIRYrftKfQDdRd87Db6bLohJAS04J1P5ewkgwobOQ6~Bx4dqfCbfXqHXpI4O4-GyEur9SYnEqhZ5dafaMaPGlEjazY-OBe3Fylwrof3O2bsp7B03EacewOocQNFS4KxK96upj08j5eQZxoL2Gx26mFDasTCoi36PB3SJe5l5XkxKoFvjSmLCgG5m53JPRpRRoyYbwSMNKA__",
    title:
      "Hội thảo Chia sẻ kinh nghiệm và tham vấn kế hoạch hỗ trợ người khuyết tật",
    description:
      "Ngày 31/05/2024 vừa qua, hơn 80 đại biểu bao gồm lãnh đạo các Sở, ban, ngành...",
    dateTime: "8 phút trước",
  },
  {
    id: 3,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/b2f3/9fe6/4840fe5a3c341d0c706703b9a2523271?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aWMETt7ifeF8qnMTtIc7De6u98C0Mqf1wTtmwdPJZkYU8hFEtKP0x2NMY1~iDkuzQV1v5Kl6tBUqUo3ifTsSF92dksbt~ESR5Vpw69QDZvT~RWW05tdwhHaXcTcVEvjVct0fo0ooKJpfRi0dOMyRtiv6Zo9vsBFpE4LR0CyTwZPMZ5AJ-PzboEm~3h0P5pKGL4i3qJloUQkorxn1L708N3CtQSogYmQ6tK-TCg7ZMWsCyxNVnj1hAOaXcb4N1kanFvqs2plmqJC-SFvkijP5Rq3~skU0x8QLxSsk1HimlDrleqRfO5aC0OkoxwuBlR1fgoVRlBXMRZuh7Htfx-jcPg__",
    title:
      "Sự kiện chia sẻ kiến thức về “Phòng chống xâm hại tình dục đối với trẻ khuyết tật”",
    description:
      "Trong buổi sự kiện chia sẻ này, các học sinh được đào tạo cách tiếp cận những kiến thức...",
    dateTime: "8 phút trước",
  },
  {
    id: 4,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/40de/27d5/9da5bd41c4ea9b4847cbf646f43d147f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMySwCiju26Bqu1m38CAWzvpe5ilKBpzEO82RT2HlSmhNKnxaqNRHQf0twXMFkPizQIEHGsof0pFAa9Unu8h2u9GZEjVNNuS7T8stBSJ2R1mRytJeF1t2D9Ez4U0PcHhjNxRvIMJ7fbmkQ~laB9wyOxQ8pZ7~BvP5~72F3g-MLS-Uc2E2QqG01RnLYd4fqUlybNSwmqlkrxA-VGkAjTEjIvuvxp~phw3~CzDNuElyfbuTFpno4Mqd06rlulJxvEcyiX6tha8bdne0jt7Emy3p5g2JOvIJ7oP-gXbacRP~SQ33jbvLwQ0lyiYc3iMIdBQ2D80Y0NBGzIO0ezIe2ikRQ__",
    title:
      "Phục hồi chức năng và chăm sóc tại nhà cho người khuyết tật - Kinh nghiệm từ dự án Hòa nhập 1",
    description:
      "Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện Nghiên cứu phát triển cộng đồng...",
    dateTime: "8 phút trước",
  },
  {
    id: 5,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/fe99/a54a/eb3fc1a7fa52400d777ad10e43887d11?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=orEH8hZXnUv7ESvvr8nDzNi6TxPOrk0IkdR1eTO2~llki7GQO~wwb1J4G1KU6qI7lnBq1qjg0lEXjfcBNBiiBNj0eJWDcfm0F~xL7Ty9r-jeEc~u~0KAF7sP9diSXECf835b2oTpjtoKG~IC~CeCxXggE9gM1ehion3dO0pf-QPEOB3NCwZYz55tbeoq5dYny-gwKsDTTcXITQnZTeV6Rv2miO-2XHc4imCpiZHUAZ8m2brhb6wH3gE2IWcbdmIOTtSRc~EXuibahvmG3-AxGILVjFxRnwK-OVUUL6fKYXxMv2QHs3dL8aa2cPKF8frsBKoh0vOlGUL7zvQaF99F2A__",
    title: "Quảng Nam: Kỷ niệm ngày người khuyết tật Việt Nam 18/4",
    description:
      "Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện ACDC thực hiện và dự án Hòa nhập...",
    dateTime: "8 phút trước",
  },
  {
    id: 6,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/ec16/967e/b3fb15a875f90aa656efbe17475ebb02?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qd5oWaZNGO87ut3Zjxx-WjiCqF1UmOQkwOV9l5UPG5n7HQzQbfNzdo51tMgzrIwn7WABHGUto3pj9zlEzzldnKqhqDclNS~rHuvufZkCpSKwQoGFoc0uDqo0cEcP0MwbRT85ORCSkON2wf3t9DCHfPX4kKPB6jhTZsr-1Pghi6prxT7lxQ2grR-k7dwAgH5dPEKqrHOeGBuleYFNBIWA6KADCTD-ssv9lyDLcGv0MObJ0SZJz2V~e2OhTYYduY2-0SVe9ENAa~orGVIbVAbJCohZoxI2JMbeGtPPbRBEXmXlJ9kP7-wC2NgLXd4VedpOb8ZxF8RmNlJjOkwzHcTrsw__",
    title:
      "Thừa Thiên Huế: Lễ kỷ niệm Ngày người khuyết tật Việt Nam 18/4 với sự tham gia của nhiều đơn vị",
    description:
      "Ngày 14/4/2024 vừa qua, tại thành phố Huế, Viện Nghiên cứu phát triển cộng đồng...",
    dateTime: "8 phút trước",
  },
  {
    id: 7,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/dad9/d877/23d08ad2911c6469ba1a6b4e1ffc466d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbGLP5jvPDeBCCbsb~A1U2B1SB4a4aMGNS8aRUXT44IQEcv2zbgyAXDS9KDnTsEzhtza72P77rQvDJONyIKdTJwIeim6SZuUGJgd27mvUzNnVDUOB5Sye0m8rBcaJoS4yYx55haNTc0O0mPiqRw5bELULW36lk2i~NVcR4SrqKFM-INOAoz1pRnx9NtcYQFpdapvEAlfsZtxJA8Gt11aXUvKWQju6PV2F7lnch1lk8E-8qwqhyZyWQJ-TSKOvTEzYLdGFCkHFZ12doG-N6EZQARs8F8QDO3oWmh-zyGkccOhzNylfTyS0obq571Q2N2Jv3wAnZLXKlQNjjYbMydA-w__",
    title:
      "Ngày người khuyết tật Việt Nam 2024: Cùng hành động để người khuyết tật hoà nhập",
    description:
      "Nhằm thúc đẩy một xã hội tiếp cận và hoà nhập cho tất cả mọi người, chương trình...",
    dateTime: "8 phút trước",
  },
  {
    id: 8,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/97bf/1cf8/253394ccb2d30545d62e7dc8cb8ef0b8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=erjD-A696nu-X7nQHMc5t2LOfpmXXhTrC3KQNzotRZyj8AnteWqxeShQlba7kSEt5I4rNY6HhBTRbv8r6ibG--6PHFfv-dtqsV3QX3G~KF8nizMx6ul9R2xtxnNWLU6HDaHUPoLkkcomvCi1Cw448b1lyUKsDSFD5FKyMaL0HSgP1zibrzlE~tzC78JBqu5PXttn9sY4J7eoK8QcfsDE0Rt7KQoALv0lNduX0PtnKEf~mKgM3SQLV-TK4ltLAl4egvVZkHz--gnbwcct~3jRpVVrV02qb5ARt9Ozpov3AVlYyB5oqy4Ip7WOwID1RC38OV8wOwvboXDJYniqeOo6ng__",
    title: "Quảng Trị: Tư vấn sống độc lập cho người khuyết tật tại nhà",
    description:
      "Vừa bước chân vào nhà ông N.D.T – người khuyết tật đang sống tại xã Quảng Trị...",
    dateTime: "8 phút trước",
  },
  {
    id: 9,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/ec16/967e/b3fb15a875f90aa656efbe17475ebb02?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qd5oWaZNGO87ut3Zjxx-WjiCqF1UmOQkwOV9l5UPG5n7HQzQbfNzdo51tMgzrIwn7WABHGUto3pj9zlEzzldnKqhqDclNS~rHuvufZkCpSKwQoGFoc0uDqo0cEcP0MwbRT85ORCSkON2wf3t9DCHfPX4kKPB6jhTZsr-1Pghi6prxT7lxQ2grR-k7dwAgH5dPEKqrHOeGBuleYFNBIWA6KADCTD-ssv9lyDLcGv0MObJ0SZJz2V~e2OhTYYduY2-0SVe9ENAa~orGVIbVAbJCohZoxI2JMbeGtPPbRBEXmXlJ9kP7-wC2NgLXd4VedpOb8ZxF8RmNlJjOkwzHcTrsw__",
    title:
      "Bình Định: Hỗ trợ người khuyết tật cải thiện các tiện nghi sinh hoạt tại nhà",
    description:
      "Nằm trong khuôn khổ Dự án hòa nhập 1b, với mục tiêu nâng cao sức khỏe cho người khuyết tật...",
    dateTime: "8 phút trước",
  },
  {
    id: 10,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/dad9/d877/23d08ad2911c6469ba1a6b4e1ffc466d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbGLP5jvPDeBCCbsb~A1U2B1SB4a4aMGNS8aRUXT44IQEcv2zbgyAXDS9KDnTsEzhtza72P77rQvDJONyIKdTJwIeim6SZuUGJgd27mvUzNnVDUOB5Sye0m8rBcaJoS4yYx55haNTc0O0mPiqRw5bELULW36lk2i~NVcR4SrqKFM-INOAoz1pRnx9NtcYQFpdapvEAlfsZtxJA8Gt11aXUvKWQju6PV2F7lnch1lk8E-8qwqhyZyWQJ-TSKOvTEzYLdGFCkHFZ12doG-N6EZQARs8F8QDO3oWmh-zyGkccOhzNylfTyS0obq571Q2N2Jv3wAnZLXKlQNjjYbMydA-w__",
    title: "Tư vấn pháp luật và hoà nhập xã hội miễn phí cho người khuyết tật",
    description:
      "Đoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai...",
    dateTime: "8 phút trước",
  },
  {
    id: 11,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/457a/3aab/1c61f44dde4338a6f8f2b1e407124944?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bd2YdURKKL4pedd4nVf3owuRz5OlWhWvEtoAtR~0ozide283VmFF8yLvcn4mh2wC-BgYR3FReTSBOICp4xAxm-n9Hq~2T0PpSRZmdIYF3DDuiT0~QLzB7SDSd~bAHxBjam5XYc5nPODOBIRYrftKfQDdRd87Db6bLohJAS04J1P5ewkgwobOQ6~Bx4dqfCbfXqHXpI4O4-GyEur9SYnEqhZ5dafaMaPGlEjazY-OBe3Fylwrof3O2bsp7B03EacewOocQNFS4KxK96upj08j5eQZxoL2Gx26mFDasTCoi36PB3SJe5l5XkxKoFvjSmLCgG5m53JPRpRRoyYbwSMNKA__",
    title:
      "Hội thảo Chia sẻ kinh nghiệm và tham vấn kế hoạch hỗ trợ người khuyết tật",
    description:
      "Ngày 31/05/2024 vừa qua, hơn 80 đại biểu bao gồm lãnh đạo các Sở, ban, ngành...",
    dateTime: "8 phút trước",
  },
  {
    id: 12,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/b2f3/9fe6/4840fe5a3c341d0c706703b9a2523271?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aWMETt7ifeF8qnMTtIc7De6u98C0Mqf1wTtmwdPJZkYU8hFEtKP0x2NMY1~iDkuzQV1v5Kl6tBUqUo3ifTsSF92dksbt~ESR5Vpw69QDZvT~RWW05tdwhHaXcTcVEvjVct0fo0ooKJpfRi0dOMyRtiv6Zo9vsBFpE4LR0CyTwZPMZ5AJ-PzboEm~3h0P5pKGL4i3qJloUQkorxn1L708N3CtQSogYmQ6tK-TCg7ZMWsCyxNVnj1hAOaXcb4N1kanFvqs2plmqJC-SFvkijP5Rq3~skU0x8QLxSsk1HimlDrleqRfO5aC0OkoxwuBlR1fgoVRlBXMRZuh7Htfx-jcPg__",
    title:
      "Sự kiện chia sẻ kiến thức về “Phòng chống xâm hại tình dục đối với trẻ khuyết tật”",
    description:
      "Trong buổi sự kiện chia sẻ này, các học sinh được đào tạo cách tiếp cận những kiến thức...",
    dateTime: "8 phút trước",
  },
  {
    id: 13,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/40de/27d5/9da5bd41c4ea9b4847cbf646f43d147f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMySwCiju26Bqu1m38CAWzvpe5ilKBpzEO82RT2HlSmhNKnxaqNRHQf0twXMFkPizQIEHGsof0pFAa9Unu8h2u9GZEjVNNuS7T8stBSJ2R1mRytJeF1t2D9Ez4U0PcHhjNxRvIMJ7fbmkQ~laB9wyOxQ8pZ7~BvP5~72F3g-MLS-Uc2E2QqG01RnLYd4fqUlybNSwmqlkrxA-VGkAjTEjIvuvxp~phw3~CzDNuElyfbuTFpno4Mqd06rlulJxvEcyiX6tha8bdne0jt7Emy3p5g2JOvIJ7oP-gXbacRP~SQ33jbvLwQ0lyiYc3iMIdBQ2D80Y0NBGzIO0ezIe2ikRQ__",
    title:
      "Phục hồi chức năng và chăm sóc tại nhà cho người khuyết tật - Kinh nghiệm từ dự án Hòa nhập 1",
    description:
      "Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện Nghiên cứu phát triển cộng đồng...",
    dateTime: "8 phút trước",
  },
  {
    id: 14,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/fe99/a54a/eb3fc1a7fa52400d777ad10e43887d11?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=orEH8hZXnUv7ESvvr8nDzNi6TxPOrk0IkdR1eTO2~llki7GQO~wwb1J4G1KU6qI7lnBq1qjg0lEXjfcBNBiiBNj0eJWDcfm0F~xL7Ty9r-jeEc~u~0KAF7sP9diSXECf835b2oTpjtoKG~IC~CeCxXggE9gM1ehion3dO0pf-QPEOB3NCwZYz55tbeoq5dYny-gwKsDTTcXITQnZTeV6Rv2miO-2XHc4imCpiZHUAZ8m2brhb6wH3gE2IWcbdmIOTtSRc~EXuibahvmG3-AxGILVjFxRnwK-OVUUL6fKYXxMv2QHs3dL8aa2cPKF8frsBKoh0vOlGUL7zvQaF99F2A__",
    title: "Quảng Nam: Kỷ niệm ngày người khuyết tật Việt Nam 18/4",
    description:
      "Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện ACDC thực hiện và dự án Hòa nhập...",
    dateTime: "8 phút trước",
  },
  {
    id: 15,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/ec16/967e/b3fb15a875f90aa656efbe17475ebb02?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qd5oWaZNGO87ut3Zjxx-WjiCqF1UmOQkwOV9l5UPG5n7HQzQbfNzdo51tMgzrIwn7WABHGUto3pj9zlEzzldnKqhqDclNS~rHuvufZkCpSKwQoGFoc0uDqo0cEcP0MwbRT85ORCSkON2wf3t9DCHfPX4kKPB6jhTZsr-1Pghi6prxT7lxQ2grR-k7dwAgH5dPEKqrHOeGBuleYFNBIWA6KADCTD-ssv9lyDLcGv0MObJ0SZJz2V~e2OhTYYduY2-0SVe9ENAa~orGVIbVAbJCohZoxI2JMbeGtPPbRBEXmXlJ9kP7-wC2NgLXd4VedpOb8ZxF8RmNlJjOkwzHcTrsw__",
    title:
      "Thừa Thiên Huế: Lễ kỷ niệm Ngày người khuyết tật Việt Nam 18/4 với sự tham gia của nhiều đơn vị",
    description:
      "Ngày 14/4/2024 vừa qua, tại thành phố Huế, Viện Nghiên cứu phát triển cộng đồng...",
    dateTime: "8 phút trước",
  },
  {
    id: 16,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/dad9/d877/23d08ad2911c6469ba1a6b4e1ffc466d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbGLP5jvPDeBCCbsb~A1U2B1SB4a4aMGNS8aRUXT44IQEcv2zbgyAXDS9KDnTsEzhtza72P77rQvDJONyIKdTJwIeim6SZuUGJgd27mvUzNnVDUOB5Sye0m8rBcaJoS4yYx55haNTc0O0mPiqRw5bELULW36lk2i~NVcR4SrqKFM-INOAoz1pRnx9NtcYQFpdapvEAlfsZtxJA8Gt11aXUvKWQju6PV2F7lnch1lk8E-8qwqhyZyWQJ-TSKOvTEzYLdGFCkHFZ12doG-N6EZQARs8F8QDO3oWmh-zyGkccOhzNylfTyS0obq571Q2N2Jv3wAnZLXKlQNjjYbMydA-w__",
    title:
      "Ngày người khuyết tật Việt Nam 2024: Cùng hành động để người khuyết tật hoà nhập",
    description:
      "Nhằm thúc đẩy một xã hội tiếp cận và hoà nhập cho tất cả mọi người, chương trình...",
    dateTime: "8 phút trước",
  },
  {
    id: 17,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/97bf/1cf8/253394ccb2d30545d62e7dc8cb8ef0b8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=erjD-A696nu-X7nQHMc5t2LOfpmXXhTrC3KQNzotRZyj8AnteWqxeShQlba7kSEt5I4rNY6HhBTRbv8r6ibG--6PHFfv-dtqsV3QX3G~KF8nizMx6ul9R2xtxnNWLU6HDaHUPoLkkcomvCi1Cw448b1lyUKsDSFD5FKyMaL0HSgP1zibrzlE~tzC78JBqu5PXttn9sY4J7eoK8QcfsDE0Rt7KQoALv0lNduX0PtnKEf~mKgM3SQLV-TK4ltLAl4egvVZkHz--gnbwcct~3jRpVVrV02qb5ARt9Ozpov3AVlYyB5oqy4Ip7WOwID1RC38OV8wOwvboXDJYniqeOo6ng__",
    title: "Quảng Trị: Tư vấn sống độc lập cho người khuyết tật tại nhà",
    description:
      "Vừa bước chân vào nhà ông N.D.T – người khuyết tật đang sống tại xã Quảng Trị...",
    dateTime: "8 phút trước",
  },
];
