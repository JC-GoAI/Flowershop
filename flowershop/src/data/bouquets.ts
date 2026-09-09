export type Bouquet = {
  slug: string;
  name: string;
  nameEn: string;
  price: number;
  image: string;
  poetic: string;
  occasion: string;
  stems: string;
  wrapping: string;
  size: string;
  care: string;
};

export const bouquets: Bouquet[] = [
  {
    slug: "peach-dawn",
    name: "蜜桃晨光",
    nameEn: "Peach Dawn",
    price: 680,
    image: "/images/peach-dawn.jpg",
    poetic: "杏色晨光，溫柔得剛剛好。",
    occasion: "生日、探訪、第一次見面",
    stems: "蜜桃色玫瑰、非洲菊、淺色配葉",
    wrapping: "杏色霧面花紙，奶白絲帶",
    size: "標準束（約 35–40cm）",
    care: "斜剪花莖、每日換水，遠離冷氣出風口。",
  },
  {
    slug: "mist-blue",
    name: "霧藍",
    nameEn: "Mist Blue",
    price: 780,
    image: "/images/mist-blue.jpg",
    poetic: "一抹霧藍，像午後未散的雲。",
    occasion: "告白、紀念日、祝賀",
    stems: "淺藍色繡球、淡粉玫瑰",
    wrapping: "薄荷綠花紙，奶白絲帶",
    size: "標準束（約 35–40cm）",
    care: "繡球喜水，花頭可微噴霧，每日換清水。",
  },
  {
    slug: "spring-pom",
    name: "春日",
    nameEn: "Spring Day",
    price: 620,
    image: "/images/spring-pom.jpg",
    poetic: "粉與嫩綠相遇，像春天剛開門。",
    occasion: "祝賀、畢業、自家擺放",
    stems: "粉紅非洲菊、玫瑰、青綠乒乓菊",
    wrapping: "奶油色花紙，柔粉絲帶",
    size: "標準束（約 35–40cm）",
    care: "斜剪花莖、每日換水，避免陽光直射。",
  },
  {
    slug: "lavender-dusk",
    name: "薄暮",
    nameEn: "Lavender Dusk",
    price: 720,
    image: "/images/lavender-dusk.jpg",
    poetic: "薰衣草色的黃昏，靜靜靠在粉紙上。",
    occasion: "生日、慰問、溫柔告白",
    stems: "薰衣草玫瑰、白玫瑰、淺紫洋桔梗",
    wrapping: "褶紋粉紙，奶白絲帶",
    size: "標準束（約 35–40cm）",
    care: "斜剪花莖、每日換水，置陰涼通風處。",
  },
  {
    slug: "daylight",
    name: "白晝",
    nameEn: "Daylight",
    price: 580,
    image: "/images/daylight.jpg",
    poetic: "純白與橄欖綠，把光留在桌上。",
    occasion: "開業、探訪、日常自用",
    stems: "白玫瑰、青綠配花",
    wrapping: "純白花紙，橄欖綠絲帶",
    size: "標準束（約 35–40cm）",
    care: "斜剪花莖、每日換水，遠離熟果與直射陽光。",
  },
  {
    slug: "afternoon",
    name: "午後",
    nameEn: "Afternoon",
    price: 760,
    image: "/images/afternoon.jpg",
    poetic: "奶油黃與淺紫，一段慢慢的午後。",
    occasion: "紀念日、感謝、家居擺花",
    stems: "奶油黃玫瑰、薰衣草玫瑰、白玫瑰",
    wrapping: "奶油褶紋花紙，柔色絲帶",
    size: "標準束（約 35–40cm）",
    care: "斜剪花莖、每日換水，可加少量花糧。",
  },
];

export function getBouquet(slug: string) {
  return bouquets.find((item) => item.slug === slug);
}

export const occasions = [
  { label: "生日", hint: "剛剛好的驚喜" },
  { label: "告白", hint: "一句未說完的話" },
  { label: "祝賀", hint: "把喜悅遞出去" },
  { label: "探訪", hint: "輕聲到訪" },
  { label: "自家用", hint: "把花留在桌上" },
] as const;
