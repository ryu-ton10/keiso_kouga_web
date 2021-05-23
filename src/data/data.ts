import { nanoid } from 'nanoid';

export const members = [
    {
        id: nanoid(),
        name: "とんと",
        image: "tonto_icon.webp",
        works: ["gallery_1.webp", "gallery_2.webp"],
        twitter_url: "https://twitter.com/tsu7ma4_10nto/",
    },
    {
        id: nanoid(),
        name: "つきうさぎ",
        image: "tuki_icon.webp",
        works: ["gallery_1.webp", "gallery_2.webp"],
        twitter_url: "https://twitter.com/moonrabbitphoto/",
    },
]

export const books = [
    {
        id: nanoid(),
        title: "紬 -つむぎ-",
        description: "珪素光画の第1作目として刊行された作品。日本各地の風景を撮影したものを集め、まるで1つの旅をしているかのように紡いだ１冊です。",
        image: "tsumugi.webp",
        url: "https://www.amazon.co.jp/dp/B08RY6VBMP/ref=cm_sw_r_tw_awdb_c_x_GxP8FbQ43252P",
    },
]

export const photos = [
    {
        id: nanoid(),
        path: "Gallery/gallery_1.webp"
    },
    {
        id: nanoid(),
        path: "Gallery/gallery_2.webp"
    },
    {
        id: nanoid(),
        path: "Gallery/gallery_3.webp"
    },
    {
        id: nanoid(),
        path: "Gallery/gallery_4.webp"
    },
]
