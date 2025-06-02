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
      jpeg:"Icons/tonto_icon.jpg",
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

export const twitter_url = "https://x.com/meitonto37"
