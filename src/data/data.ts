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
      jpeg:"Icons/tonto_icon.jpeg",
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
    twitter_url: "https://twitter.com/27ma4_ton10/",
    keywords: ["列車", "神社仏閣"],
    camera: "D3100"
  },
  {
    id: nanoid(),
    name: "燐",
    icon: {
      webp:"Icons/rin_icon.webp",
      jpeg:"Icons/rin_icon.jpeg",
    },
    works: [
      {
        id: nanoid(),
        url: "MajorWorks/rin/rin_work_1_prev.jpeg",
      },
      {
        id: nanoid(),
        url: "MajorWorks/rin/rin_work_2_prev.jpeg",
      },
      {
        id: nanoid(),
        url: "MajorWorks/rin/rin_work_3_prev.jpeg",
      },
    ],
    twitter_url: "https://twitter.com/SekiRinphoto",
    keywords: ["天体", "夜景"],
    camera: "α7RⅡ / D5300"
  },
  {
    id: nanoid(),
    name: "千鈴",
    icon: {
      webp:"Icons/chirin_icon.webp",
      jpeg:"Icons/chirin_icon.jpeg",
    },
    works: [
      {
        id: nanoid(),
        url: "MajorWorks/chirin/chirin_work_1_prev.jpeg",
      },
      {
        id: nanoid(),
        url: "MajorWorks/chirin/chirin_work_2_prev.jpeg",
      },
      {
        id: nanoid(),
        url: "MajorWorks/chirin/chirin_work_3_prev.jpeg",
      },
    ],
    twitter_url: "https://twitter.com/ChirinPhoto",
    keywords: ["天体", "夜景"],
    camera: "α7RⅢ / D5500"
  },
]

export const books = [
  {
    id: nanoid(),
    title: "紬 -つむぎ-",
    description: "珪素光画の第1作目として刊行された作品。日本各地の風景を撮影したものを集め、まるで1つの旅をしているかのように紡いだ１冊です。",
    image: {
      webp: "Publishments/tsumugi.webp",
      jpeg: "Publishments/tsumugi.jpeg",
      pre_webp: "Publishments/tsumugi_prev.webp",
      pre_jpeg: "Publishments/tsumugi_prev.jpeg",
    },
    url: "https://www.amazon.co.jp/dp/B08RY6VBMP/ref=cm_sw_r_tw_awdb_c_x_GxP8FbQ43252P",
  },
]

export const privacy_policy = "当サイトでは、データ収集のために Google アナリティクスを利用しています。このデータは匿名で収集されるものであり、個人を特定するものではありません。また、この機能は Cookie を無効にすることで収集を拒否することが出来ます。"

export const twitter_url = "https://twitter.com/27ma4_ton10"
