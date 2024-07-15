export interface Event {
    id: number;
    imgUrl: string;
    title: string;
    description: string;
    dateTime: string;
}

export const dataEvents:Event[] = 
    [
        {
            id: 1,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/dad9/d877/23d08ad2911c6469ba1a6b4e1ffc466d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbGLP5jvPDeBCCbsb~A1U2B1SB4a4aMGNS8aRUXT44IQEcv2zbgyAXDS9KDnTsEzhtza72P77rQvDJONyIKdTJwIeim6SZuUGJgd27mvUzNnVDUOB5Sye0m8rBcaJoS4yYx55haNTc0O0mPiqRw5bELULW36lk2i~NVcR4SrqKFM-INOAoz1pRnx9NtcYQFpdapvEAlfsZtxJA8Gt11aXUvKWQju6PV2F7lnch1lk8E-8qwqhyZyWQJ-TSKOvTEzYLdGFCkHFZ12doG-N6EZQARs8F8QDO3oWmh-zyGkccOhzNylfTyS0obq571Q2N2Jv3wAnZLXKlQNjjYbMydA-w__',
            title: 'Tư vấn pháp luật và hoà nhập xã hội miễn phí cho người khuyết tật',
            description: 'Đoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai...',
            dateTime: '8 phút trước',
        },
        {
            id: 2,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/457a/3aab/1c61f44dde4338a6f8f2b1e407124944?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bd2YdURKKL4pedd4nVf3owuRz5OlWhWvEtoAtR~0ozide283VmFF8yLvcn4mh2wC-BgYR3FReTSBOICp4xAxm-n9Hq~2T0PpSRZmdIYF3DDuiT0~QLzB7SDSd~bAHxBjam5XYc5nPODOBIRYrftKfQDdRd87Db6bLohJAS04J1P5ewkgwobOQ6~Bx4dqfCbfXqHXpI4O4-GyEur9SYnEqhZ5dafaMaPGlEjazY-OBe3Fylwrof3O2bsp7B03EacewOocQNFS4KxK96upj08j5eQZxoL2Gx26mFDasTCoi36PB3SJe5l5XkxKoFvjSmLCgG5m53JPRpRRoyYbwSMNKA__',
            title: 'Hội thảo Chia sẻ kinh nghiệm và tham vấn kế hoạch hỗ trợ người khuyết tật',
            description: 'Ngày 31/05/2024 vừa qua, hơn 80 đại biểu bao gồm lãnh đạo các Sở, ban, ngành...',
            dateTime: '8 phút trước',
        },
        {
            id: 3,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/b2f3/9fe6/4840fe5a3c341d0c706703b9a2523271?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aWMETt7ifeF8qnMTtIc7De6u98C0Mqf1wTtmwdPJZkYU8hFEtKP0x2NMY1~iDkuzQV1v5Kl6tBUqUo3ifTsSF92dksbt~ESR5Vpw69QDZvT~RWW05tdwhHaXcTcVEvjVct0fo0ooKJpfRi0dOMyRtiv6Zo9vsBFpE4LR0CyTwZPMZ5AJ-PzboEm~3h0P5pKGL4i3qJloUQkorxn1L708N3CtQSogYmQ6tK-TCg7ZMWsCyxNVnj1hAOaXcb4N1kanFvqs2plmqJC-SFvkijP5Rq3~skU0x8QLxSsk1HimlDrleqRfO5aC0OkoxwuBlR1fgoVRlBXMRZuh7Htfx-jcPg__',
            title: 'Sự kiện chia sẻ kiến thức về “Phòng chống xâm hại tình dục đối với trẻ khuyết tật”',
            description: 'Trong buổi sự kiện chia sẻ này, các học sinh được đào tạo cách tiếp cận những kiến thức...',
            dateTime: '8 phút trước',
        },
        {
            id: 4,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/40de/27d5/9da5bd41c4ea9b4847cbf646f43d147f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMySwCiju26Bqu1m38CAWzvpe5ilKBpzEO82RT2HlSmhNKnxaqNRHQf0twXMFkPizQIEHGsof0pFAa9Unu8h2u9GZEjVNNuS7T8stBSJ2R1mRytJeF1t2D9Ez4U0PcHhjNxRvIMJ7fbmkQ~laB9wyOxQ8pZ7~BvP5~72F3g-MLS-Uc2E2QqG01RnLYd4fqUlybNSwmqlkrxA-VGkAjTEjIvuvxp~phw3~CzDNuElyfbuTFpno4Mqd06rlulJxvEcyiX6tha8bdne0jt7Emy3p5g2JOvIJ7oP-gXbacRP~SQ33jbvLwQ0lyiYc3iMIdBQ2D80Y0NBGzIO0ezIe2ikRQ__',
            title: 'Phục hồi chức năng và chăm sóc tại nhà cho người khuyết tật - Kinh nghiệm từ dự án Hòa nhập 1',
            description: 'Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện Nghiên cứu phát triển cộng đồng...',
            dateTime: '8 phút trước',
        },
        {
            id: 5,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/fe99/a54a/eb3fc1a7fa52400d777ad10e43887d11?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=orEH8hZXnUv7ESvvr8nDzNi6TxPOrk0IkdR1eTO2~llki7GQO~wwb1J4G1KU6qI7lnBq1qjg0lEXjfcBNBiiBNj0eJWDcfm0F~xL7Ty9r-jeEc~u~0KAF7sP9diSXECf835b2oTpjtoKG~IC~CeCxXggE9gM1ehion3dO0pf-QPEOB3NCwZYz55tbeoq5dYny-gwKsDTTcXITQnZTeV6Rv2miO-2XHc4imCpiZHUAZ8m2brhb6wH3gE2IWcbdmIOTtSRc~EXuibahvmG3-AxGILVjFxRnwK-OVUUL6fKYXxMv2QHs3dL8aa2cPKF8frsBKoh0vOlGUL7zvQaF99F2A__',
            title: 'Quảng Nam: Kỷ niệm ngày người khuyết tật Việt Nam 18/4',
            description: 'Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện ACDC thực hiện và dự án Hòa nhập...',
            dateTime: '8 phút trước',
        },
        {
            id: 6,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/ec16/967e/b3fb15a875f90aa656efbe17475ebb02?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qd5oWaZNGO87ut3Zjxx-WjiCqF1UmOQkwOV9l5UPG5n7HQzQbfNzdo51tMgzrIwn7WABHGUto3pj9zlEzzldnKqhqDclNS~rHuvufZkCpSKwQoGFoc0uDqo0cEcP0MwbRT85ORCSkON2wf3t9DCHfPX4kKPB6jhTZsr-1Pghi6prxT7lxQ2grR-k7dwAgH5dPEKqrHOeGBuleYFNBIWA6KADCTD-ssv9lyDLcGv0MObJ0SZJz2V~e2OhTYYduY2-0SVe9ENAa~orGVIbVAbJCohZoxI2JMbeGtPPbRBEXmXlJ9kP7-wC2NgLXd4VedpOb8ZxF8RmNlJjOkwzHcTrsw__',
            title: 'Thừa Thiên Huế: Lễ kỷ niệm Ngày người khuyết tật Việt Nam 18/4 với sự tham gia của nhiều đơn vị',
            description: 'Ngày 14/4/2024 vừa qua, tại thành phố Huế, Viện Nghiên cứu phát triển cộng đồng...',
            dateTime: '8 phút trước',
        },
        {
            id: 7,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/dad9/d877/23d08ad2911c6469ba1a6b4e1ffc466d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbGLP5jvPDeBCCbsb~A1U2B1SB4a4aMGNS8aRUXT44IQEcv2zbgyAXDS9KDnTsEzhtza72P77rQvDJONyIKdTJwIeim6SZuUGJgd27mvUzNnVDUOB5Sye0m8rBcaJoS4yYx55haNTc0O0mPiqRw5bELULW36lk2i~NVcR4SrqKFM-INOAoz1pRnx9NtcYQFpdapvEAlfsZtxJA8Gt11aXUvKWQju6PV2F7lnch1lk8E-8qwqhyZyWQJ-TSKOvTEzYLdGFCkHFZ12doG-N6EZQARs8F8QDO3oWmh-zyGkccOhzNylfTyS0obq571Q2N2Jv3wAnZLXKlQNjjYbMydA-w__',
            title: 'Ngày người khuyết tật Việt Nam 2024: Cùng hành động để người khuyết tật hoà nhập',
            description: 'Nhằm thúc đẩy một xã hội tiếp cận và hoà nhập cho tất cả mọi người, chương trình...',
            dateTime: '8 phút trước',
        },
        {
            id: 8,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/97bf/1cf8/253394ccb2d30545d62e7dc8cb8ef0b8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=erjD-A696nu-X7nQHMc5t2LOfpmXXhTrC3KQNzotRZyj8AnteWqxeShQlba7kSEt5I4rNY6HhBTRbv8r6ibG--6PHFfv-dtqsV3QX3G~KF8nizMx6ul9R2xtxnNWLU6HDaHUPoLkkcomvCi1Cw448b1lyUKsDSFD5FKyMaL0HSgP1zibrzlE~tzC78JBqu5PXttn9sY4J7eoK8QcfsDE0Rt7KQoALv0lNduX0PtnKEf~mKgM3SQLV-TK4ltLAl4egvVZkHz--gnbwcct~3jRpVVrV02qb5ARt9Ozpov3AVlYyB5oqy4Ip7WOwID1RC38OV8wOwvboXDJYniqeOo6ng__',
            title: 'Quảng Trị: Tư vấn sống độc lập cho người khuyết tật tại nhà',
            description: 'Vừa bước chân vào nhà ông N.D.T – người khuyết tật đang sống tại xã Quảng Trị...',
            dateTime: '8 phút trước',
        },
        {
            id: 9,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/ec16/967e/b3fb15a875f90aa656efbe17475ebb02?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qd5oWaZNGO87ut3Zjxx-WjiCqF1UmOQkwOV9l5UPG5n7HQzQbfNzdo51tMgzrIwn7WABHGUto3pj9zlEzzldnKqhqDclNS~rHuvufZkCpSKwQoGFoc0uDqo0cEcP0MwbRT85ORCSkON2wf3t9DCHfPX4kKPB6jhTZsr-1Pghi6prxT7lxQ2grR-k7dwAgH5dPEKqrHOeGBuleYFNBIWA6KADCTD-ssv9lyDLcGv0MObJ0SZJz2V~e2OhTYYduY2-0SVe9ENAa~orGVIbVAbJCohZoxI2JMbeGtPPbRBEXmXlJ9kP7-wC2NgLXd4VedpOb8ZxF8RmNlJjOkwzHcTrsw__',
            title: 'Bình Định: Hỗ trợ người khuyết tật cải thiện các tiện nghi sinh hoạt tại nhà',
            description: 'Nằm trong khuôn khổ Dự án hòa nhập 1b, với mục tiêu nâng cao sức khỏe cho người khuyết tật...',
            dateTime: '8 phút trước',
        },
        {
            id: 10,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/dad9/d877/23d08ad2911c6469ba1a6b4e1ffc466d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbGLP5jvPDeBCCbsb~A1U2B1SB4a4aMGNS8aRUXT44IQEcv2zbgyAXDS9KDnTsEzhtza72P77rQvDJONyIKdTJwIeim6SZuUGJgd27mvUzNnVDUOB5Sye0m8rBcaJoS4yYx55haNTc0O0mPiqRw5bELULW36lk2i~NVcR4SrqKFM-INOAoz1pRnx9NtcYQFpdapvEAlfsZtxJA8Gt11aXUvKWQju6PV2F7lnch1lk8E-8qwqhyZyWQJ-TSKOvTEzYLdGFCkHFZ12doG-N6EZQARs8F8QDO3oWmh-zyGkccOhzNylfTyS0obq571Q2N2Jv3wAnZLXKlQNjjYbMydA-w__',
            title: 'Tư vấn pháp luật và hoà nhập xã hội miễn phí cho người khuyết tật',
            description: 'Đoàn tư vấn pháp luật và hỗ trợ hoà nhập có sự tham gia của bà Vũ Thị Tuyết Mai...',
            dateTime: '8 phút trước',
        },
        {
            id: 11,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/457a/3aab/1c61f44dde4338a6f8f2b1e407124944?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bd2YdURKKL4pedd4nVf3owuRz5OlWhWvEtoAtR~0ozide283VmFF8yLvcn4mh2wC-BgYR3FReTSBOICp4xAxm-n9Hq~2T0PpSRZmdIYF3DDuiT0~QLzB7SDSd~bAHxBjam5XYc5nPODOBIRYrftKfQDdRd87Db6bLohJAS04J1P5ewkgwobOQ6~Bx4dqfCbfXqHXpI4O4-GyEur9SYnEqhZ5dafaMaPGlEjazY-OBe3Fylwrof3O2bsp7B03EacewOocQNFS4KxK96upj08j5eQZxoL2Gx26mFDasTCoi36PB3SJe5l5XkxKoFvjSmLCgG5m53JPRpRRoyYbwSMNKA__',
            title: 'Hội thảo Chia sẻ kinh nghiệm và tham vấn kế hoạch hỗ trợ người khuyết tật',
            description: 'Ngày 31/05/2024 vừa qua, hơn 80 đại biểu bao gồm lãnh đạo các Sở, ban, ngành...',
            dateTime: '8 phút trước',
        },
        {
            id: 12,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/b2f3/9fe6/4840fe5a3c341d0c706703b9a2523271?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aWMETt7ifeF8qnMTtIc7De6u98C0Mqf1wTtmwdPJZkYU8hFEtKP0x2NMY1~iDkuzQV1v5Kl6tBUqUo3ifTsSF92dksbt~ESR5Vpw69QDZvT~RWW05tdwhHaXcTcVEvjVct0fo0ooKJpfRi0dOMyRtiv6Zo9vsBFpE4LR0CyTwZPMZ5AJ-PzboEm~3h0P5pKGL4i3qJloUQkorxn1L708N3CtQSogYmQ6tK-TCg7ZMWsCyxNVnj1hAOaXcb4N1kanFvqs2plmqJC-SFvkijP5Rq3~skU0x8QLxSsk1HimlDrleqRfO5aC0OkoxwuBlR1fgoVRlBXMRZuh7Htfx-jcPg__',
            title: 'Sự kiện chia sẻ kiến thức về “Phòng chống xâm hại tình dục đối với trẻ khuyết tật”',
            description: 'Trong buổi sự kiện chia sẻ này, các học sinh được đào tạo cách tiếp cận những kiến thức...',
            dateTime: '8 phút trước',
        },
        {
            id: 13,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/40de/27d5/9da5bd41c4ea9b4847cbf646f43d147f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMySwCiju26Bqu1m38CAWzvpe5ilKBpzEO82RT2HlSmhNKnxaqNRHQf0twXMFkPizQIEHGsof0pFAa9Unu8h2u9GZEjVNNuS7T8stBSJ2R1mRytJeF1t2D9Ez4U0PcHhjNxRvIMJ7fbmkQ~laB9wyOxQ8pZ7~BvP5~72F3g-MLS-Uc2E2QqG01RnLYd4fqUlybNSwmqlkrxA-VGkAjTEjIvuvxp~phw3~CzDNuElyfbuTFpno4Mqd06rlulJxvEcyiX6tha8bdne0jt7Emy3p5g2JOvIJ7oP-gXbacRP~SQ33jbvLwQ0lyiYc3iMIdBQ2D80Y0NBGzIO0ezIe2ikRQ__',
            title: 'Phục hồi chức năng và chăm sóc tại nhà cho người khuyết tật - Kinh nghiệm từ dự án Hòa nhập 1',
            description: 'Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện Nghiên cứu phát triển cộng đồng...',
            dateTime: '8 phút trước',
        },
        {
            id: 14,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/fe99/a54a/eb3fc1a7fa52400d777ad10e43887d11?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=orEH8hZXnUv7ESvvr8nDzNi6TxPOrk0IkdR1eTO2~llki7GQO~wwb1J4G1KU6qI7lnBq1qjg0lEXjfcBNBiiBNj0eJWDcfm0F~xL7Ty9r-jeEc~u~0KAF7sP9diSXECf835b2oTpjtoKG~IC~CeCxXggE9gM1ehion3dO0pf-QPEOB3NCwZYz55tbeoq5dYny-gwKsDTTcXITQnZTeV6Rv2miO-2XHc4imCpiZHUAZ8m2brhb6wH3gE2IWcbdmIOTtSRc~EXuibahvmG3-AxGILVjFxRnwK-OVUUL6fKYXxMv2QHs3dL8aa2cPKF8frsBKoh0vOlGUL7zvQaF99F2A__',
            title: 'Quảng Nam: Kỷ niệm ngày người khuyết tật Việt Nam 18/4',
            description: 'Trong khuôn khổ dự án Hòa nhập 1 – Hợp phần do Viện ACDC thực hiện và dự án Hòa nhập...',
            dateTime: '8 phút trước',
        },
        {
            id: 15,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/ec16/967e/b3fb15a875f90aa656efbe17475ebb02?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qd5oWaZNGO87ut3Zjxx-WjiCqF1UmOQkwOV9l5UPG5n7HQzQbfNzdo51tMgzrIwn7WABHGUto3pj9zlEzzldnKqhqDclNS~rHuvufZkCpSKwQoGFoc0uDqo0cEcP0MwbRT85ORCSkON2wf3t9DCHfPX4kKPB6jhTZsr-1Pghi6prxT7lxQ2grR-k7dwAgH5dPEKqrHOeGBuleYFNBIWA6KADCTD-ssv9lyDLcGv0MObJ0SZJz2V~e2OhTYYduY2-0SVe9ENAa~orGVIbVAbJCohZoxI2JMbeGtPPbRBEXmXlJ9kP7-wC2NgLXd4VedpOb8ZxF8RmNlJjOkwzHcTrsw__',
            title: 'Thừa Thiên Huế: Lễ kỷ niệm Ngày người khuyết tật Việt Nam 18/4 với sự tham gia của nhiều đơn vị',
            description: 'Ngày 14/4/2024 vừa qua, tại thành phố Huế, Viện Nghiên cứu phát triển cộng đồng...',
            dateTime: '8 phút trước',
        },
        {
            id: 16,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/dad9/d877/23d08ad2911c6469ba1a6b4e1ffc466d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbGLP5jvPDeBCCbsb~A1U2B1SB4a4aMGNS8aRUXT44IQEcv2zbgyAXDS9KDnTsEzhtza72P77rQvDJONyIKdTJwIeim6SZuUGJgd27mvUzNnVDUOB5Sye0m8rBcaJoS4yYx55haNTc0O0mPiqRw5bELULW36lk2i~NVcR4SrqKFM-INOAoz1pRnx9NtcYQFpdapvEAlfsZtxJA8Gt11aXUvKWQju6PV2F7lnch1lk8E-8qwqhyZyWQJ-TSKOvTEzYLdGFCkHFZ12doG-N6EZQARs8F8QDO3oWmh-zyGkccOhzNylfTyS0obq571Q2N2Jv3wAnZLXKlQNjjYbMydA-w__',
            title: 'Ngày người khuyết tật Việt Nam 2024: Cùng hành động để người khuyết tật hoà nhập',
            description: 'Nhằm thúc đẩy một xã hội tiếp cận và hoà nhập cho tất cả mọi người, chương trình...',
            dateTime: '8 phút trước',
        },
        {
            id: 17,
            imgUrl: 'https://s3-alpha-sig.figma.com/img/97bf/1cf8/253394ccb2d30545d62e7dc8cb8ef0b8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=erjD-A696nu-X7nQHMc5t2LOfpmXXhTrC3KQNzotRZyj8AnteWqxeShQlba7kSEt5I4rNY6HhBTRbv8r6ibG--6PHFfv-dtqsV3QX3G~KF8nizMx6ul9R2xtxnNWLU6HDaHUPoLkkcomvCi1Cw448b1lyUKsDSFD5FKyMaL0HSgP1zibrzlE~tzC78JBqu5PXttn9sY4J7eoK8QcfsDE0Rt7KQoALv0lNduX0PtnKEf~mKgM3SQLV-TK4ltLAl4egvVZkHz--gnbwcct~3jRpVVrV02qb5ARt9Ozpov3AVlYyB5oqy4Ip7WOwID1RC38OV8wOwvboXDJYniqeOo6ng__',
            title: 'Quảng Trị: Tư vấn sống độc lập cho người khuyết tật tại nhà',
            description: 'Vừa bước chân vào nhà ông N.D.T – người khuyết tật đang sống tại xã Quảng Trị...',
            dateTime: '8 phút trước',
        }
    ];
