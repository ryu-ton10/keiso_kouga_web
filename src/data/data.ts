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
                webp: "MajorWorks/tuki/tuki_work_sasebo.webp",
                jpeg: "MajorWorks/tuki/tuki_work_sasebo.jpg",
            },
            {
                webp: "MajorWorks/tuki/tuki_work_seaside.webp",
                jpeg: "MajorWorks/tuki/tuki_work_seaside.jpg",
            },
            {
                webp: "MajorWorks/tuki/tuki_work_watchahead.webp",
                jpeg: "MajorWorks/tuki/tuki_work_watchahead.jpg",
            },
        ],
        twitter_url: "https://twitter.com/moonrabbitphoto/",
        keywords: ["夜空", "建造物"],
        camera: "α7 III"
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
                webp: "MajorWorks/tonto/tonto_work_e6.webp",
                jpeg: "MajorWorks/tonto/tonto_work_e6.jpg",
            },
            {
                webp: "MajorWorks/tonto/tonto_work_chayagai.webp",
                jpeg: "MajorWorks/tonto/tonto_work_chayagai.jpg",
            },
            {
                webp: "MajorWorks/tonto/tonto_work_sea.webp",
                jpeg: "MajorWorks/tonto/tonto_work_sea.jpg",
            },
        ],
        twitter_url: "https://twitter.com/tsu7ma4_10nto/",
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
            jpeg: "Publishments/tsumugi.jpeg"
        },
        url: "https://www.amazon.co.jp/dp/B08RY6VBMP/ref=cm_sw_r_tw_awdb_c_x_GxP8FbQ43252P",
    },
]
