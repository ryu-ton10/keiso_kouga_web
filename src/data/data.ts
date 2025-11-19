import { nanoid } from 'nanoid';

export const members = [
  {
    id: nanoid(),
    name: "つきうさぎ",
    icon: {
      webp:"Icons/tuki_icon.webp",
      jpeg:"Icons/tuki_icon.jpeg",
    },
    works: [
      {
        id: nanoid(),
        url: "MajorWorks/tuki/tuki_work_sasebo_prev.jpeg",
      },
      {
        id: nanoid(),
        url: "MajorWorks/tuki/tuki_work_seaside_prev.jpeg",
      },
      {
        id: nanoid(),
        url: "MajorWorks/tuki/tuki_work_watchahead_prev.jpeg",
      },
    ],
    twitter_url: "https://twitter.com/moonrabbitphoto/",
    keywords: ["夜空", "建造物"],
    camera: "α7RⅢ "
  },
  {
    id: nanoid(),
    name: "とんと",
    icon: {
      webp:"Icons/tonto_icon.webp",
      jpeg:"Icons/tonto_icon.JPG",
    },
    works: [
      {
        id: nanoid(),
        url: "MajorWorks/tonto/tonto_work_1_prev.jpg",
      },
      {
        id: nanoid(),
        url: "MajorWorks/tonto/tonto_work_2_prev.JPG",
      },
      {
        id: nanoid(),
        url: "MajorWorks/tonto/tonto_work_3_prev.JPG",
      },
    ],
    twitter_url: "https://x.com/meitonto37",
    keywords: ["列車", "神社仏閣"],
    camera: "D3100"
  },
]

export const books = [
  {
    id: nanoid(),
    title: "TraveLog Vol.1 IKESHIMA",
    description: "",
    image: {
      webp: "Publishments/ikeshima.webp",
      jpeg: "Publishments/ikeshima.jpg",
    },
  },
  {
    id: nanoid(),
    title: "TraveLog Vol.2 NIIGATA",
    description: "",
    image: {
      webp: "Publishments/niigata.webp",
      jpeg: "Publishments/niigata.jpg",
    },
  },
  {
    id: nanoid(),
    title: "おんぼら〜っと 金沢",
    description: "",
    image: {
      webp: "Publishments/kanazawa.webp",
      jpeg: "Publishments/kanazawa.png",
    },
  },
]

export const privacy_policy = "当サイトでは、データ収集のために Google アナリティクスを利用しています。このデータは匿名で収集されるものであり、個人を特定するものではありません。また、この機能は Cookie を無効にすることで収集を拒否することが出来ます。"

export const twitter_url = "https://x.com/meitonto37"
