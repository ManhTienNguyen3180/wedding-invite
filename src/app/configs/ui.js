import images from "../images";

const WISH_API_LINK = "https://sheetdb.io/api/v1/b58ygr1yuuhag"; // use mock api
const cdnLink = "https://res.cloudinary.com/pktax4er/image/upload";

// common

// config Confetti

const configConfetti = {
  angle: "188",
  spread: 360,
  startVelocity: "50",
  elementCount: "133",
  dragFriction: 0.12,
  duration: 3000,
  stagger: "0",
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

// Nhà Trai
const groomInfo = {
  time: {
    date: "22/12",
    year: "2026",
    time: "11:00",
    full: "Chủ nhật, Ngày 22 Tháng 12 năm 2026",
  },
  address: "Trung tâm tiệc cưới An Khánh, An Lão, Hải Phòng",
  street: "QJ83+5JG, Chợ Tứ Nghi, Minh Khai, An Khánh, Hải Phòng, Việt Nam",
  phone: "0375 889 827",
};

// Nhà Gái
const brideInfo = {
  time: {
    date: "22/12",
    year: "2026",
    time: "11:00",
    full: "Chủ nhật, Ngày 22 Tháng 12 năm 2026",
  },
  address: "Nghệ An",
  street: "Tổ 23A, xã Tân Lập, huyện Đồng Phú, tỉnh Bình Phước",
  phone: "0375 889 827",
};

// Legacy — giữ lại để không break các chỗ khác
const weddingInfo = [groomInfo];
const weddingInfoB = [brideInfo];
const weddingInfoG = [groomInfo];

// December
const daysInMonth = [
  {
    title: "mon",
    days: [0, 2, 9, 16, 23, 30],
  },
  {
    title: "tue",
    days: [0, 3, 10, 17, 24, 31],
  },
  {
    title: "wed",
    days: [0, 4, 11, 18, 25, 0],
  },
  {
    title: "thu",
    days: [0, 5, 12, 19, 26, 0],
  },
  {
    title: "fri",
    days: [0, 6, 13, 20, 27, 0],
  },
  {
    title: "sat",
    days: [0, 7, 14, 21, 27, 0],
  },
  {
    title: "sun",
    days: [1, 8, 15, 22, 29, 0],
  },
];

// invitation intro (first section)
const introSection = {
  mainImage: "https://res.cloudinary.com/pktax4er/image/upload/thumb.jpg",
  brideFirstLetter: "H",
  groomFirstLetter: "Đ",
};

// profile section

const profileSection = {
  description:
    "Hôn nhân không phải là một điểm đến mà là một cuộc hành trình nơi mà hai người cùng xây dựng và phát triển",
  profiles: [
    {
      title: "bride",
      name: "Nguyễn Thanh Huyền",
      avatar: `${cdnLink}/codau.jpg`,
      images: [`${cdnLink}/codau.jpg`, `${cdnLink}/codau3.jpg`],
    },
    {
      title: "groom",
      name: "Nguyễn Thành Đạt",
      avatar: `${cdnLink}/chure.jpg`,
      images: [`${cdnLink}/chure2.jpg`, `${cdnLink}/chure.jpg`],
    },
  ],
};

// invitation section

const invitationSection = {
  imgs: [
    `${cdnLink}/anhdoi.jpg`,
    `${cdnLink}/anhdoi.jpg`,
    `${cdnLink}/anhdoi.jpg`,
  ],
  activeDay: 22,
};

// album section

const albumSection = {
  images: [
    `${cdnLink}/codau3.png`,
    `${cdnLink}/codau3.png`,
    `${cdnLink}/anhdoi.jpg`,
    `${cdnLink}/codau3.png`,
    `${cdnLink}/codau3.png`,
    `${cdnLink}/anhdoingang.png`,
  ],
};

// guestbook section

const guestbookSection = {
  image: `${cdnLink}/cuoi.jpg`,
  time: "12/12/2026",
};

// gift section

const giftSection = {
  image: "https://res.cloudinary.com/pktax4er/image/upload/anhdoingang.png",
  brideBank: {
    name: "Nguyễn Thanh Huyền",
    bankName: "Vietinbank ",
    qr: images.qr2.default.src,
    bankNumber: "999999999",
  },
  groomBank: {
    name: "Nguyễn Thành Đạt",
    bankName: "MB BANK",
    qr: images.qr.default.src,
    bankNumber: "8888888888",
  },
};

// timer
const timerSection = {
  weddingTime: {
    year: 2026,
    day: 22,
    month: 12,
  },
};

// final section

const finalSection = {
  images: [
    `${cdnLink}/final2.jpg`,
    `${cdnLink}/final2.jpg`,
    `${cdnLink}/final2.jpg`,
    `${cdnLink}/final2.jpg`,
  ],
};

// Album Page

const albumPage = {
  topImage: `${cdnLink}/final2.jpg`,
  bottomImage: `${cdnLink}/anhdoingang.jpg`,
  mainImage: `${cdnLink}/final.jpg`,
};

const albumA = [
  {
    imgs: [
      {
        id: 1,
        img: `${cdnLink}/e1`,
      },

      {
        id: 2,
        img: `${cdnLink}/e4`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 3,
        img: `${cdnLink}/e3`,
      },
      {
        id: 4,
        img: `${cdnLink}/e5`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 5,
        img: `${cdnLink}/e6`,
      },
      {
        id: 6,
        img: `${cdnLink}/e7`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 7,
        img: `${cdnLink}/e8`,
      },
      {
        id: 8,
        img: `${cdnLink}/groom3`,
      },
    ],
  },
];

const albumB = [
  {
    imgs: [
      {
        id: 9,
        img: `${cdnLink}/e9`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 10,
        img: `${cdnLink}/e13`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 11,
        img: `${cdnLink}/e10`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 12,
        img: `${cdnLink}/e11`,
      },
    ],
  },
];

const albumC = [
  {
    imgs: [
      {
        id: 13,
        img: `${cdnLink}/e15`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 14,
        img: `${cdnLink}/e14`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 15,
        img: `${cdnLink}/e16`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 16,
        img: `${cdnLink}/e17`,
      },
    ],
  },
];

const albums = [...albumA, ...albumB, ...albumC]; // for preview

const metaData = {
  main: {
    title: "Báo Hỉ Đạt - Huyền | Kính Mời",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730558395/wedding5/",
  },

  wish: {
    title: "Tất cả lời chúc dành cho Đạt - Huyền",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730558395/wedding5/",
  },

  invitation: {
    title: "Báo Hỉ | Form Nhập Tên",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730394150/wedding5_1/",
  },
  album: {
    title: "Album của Đạt - Huyền`",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730558395/wedding5/",
  },
};

export {
  weddingInfo,
  weddingInfoB,
  weddingInfoG,
  daysInMonth,
  albumPage,
  albumA,
  albumB,
  albumC,
  albums,
  configConfetti,
  introSection,
  profileSection,
  invitationSection,
  albumSection,
  guestbookSection,
  giftSection,
  timerSection,
  finalSection,
  WISH_API_LINK,
  metaData,
};
