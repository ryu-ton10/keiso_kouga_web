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
                jpeg: "MajorWorks/tuki/tuki_work_sasebo.jpeg",
            },
            {
                webp: "MajorWorks/tuki/tuki_work_seaside.webp",
                jpeg: "MajorWorks/tuki/tuki_work_seaside.jpeg",
            },
            {
                webp: "MajorWorks/tuki/tuki_work_watchahead.webp",
                jpeg: "MajorWorks/tuki/tuki_work_watchahead.jpeg",
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
    {
        id: nanoid(),
        name: "燐",
        icon: {
            webp:"Icons/rin_icon.webp",
            jpeg:"Icons/rin_icon.jpeg",
        },
        works: [
            {
                webp: "MajorWorks/rin/rin_work_hawk.webp",
                jpeg: "MajorWorks/rin/rin_work_hawk.jpeg",
            },
            {
                webp: "MajorWorks/rin/rin_work_tourou.webp",
                jpeg: "MajorWorks/rin/rin_work_tourou.jpeg",
            },
            {
                webp: "MajorWorks/rin/rin_work_3.webp",
                jpeg: "MajorWorks/rin/rin_work_3.jpeg",
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
                webp: "MajorWorks/chirin/chirin_work_1.webp",
                jpeg: "MajorWorks/chirin/chirin_work_1.jpeg",
            },
            {
                webp: "MajorWorks/chirin/chirin_work_2.webp",
                jpeg: "MajorWorks/chirin/chirin_work_2.jpeg",
            },
            {
                webp: "MajorWorks/chirin/chirin_work_3.webp",
                jpeg: "MajorWorks/chirin/chirin_work_3.jpeg",
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
            jpeg: "Publishments/tsumugi.jpeg"
        },
        url: "https://www.amazon.co.jp/dp/B08RY6VBMP/ref=cm_sw_r_tw_awdb_c_x_GxP8FbQ43252P",
    },
]
