export interface Product {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  detail: string;
  tag: string;
  img: string;
  description: string;
  benefits?: string[];
}

export const productsData: Record<string, Product[]> = {
  jams: [
    {
      slug: "durian-jam",
      name: "Durian Jam",
      price: 80000,
      detail: "280g Jar",
      tag: "SMALL BATCH",
      img: "/Salinan Durian 280 front.webp",
      description:
        "Our Durian Jam is crafted using hand-foraged durians from high-altitude slopes. We slow-simmer each batch in copper kettles with organic wildflower honey and a hint of lemon zest to preserve the vibrant, tart soul of the fruit.",
      benefits: ["Non-GMO", "No Refined Sugar", "Small Batch"],
    },
    {
      slug: "pink-guava-jam",
      name: "Pink Guava Jam",
      price: 70000,
      originalPrice: 280000,
      detail: "280g Jar",
      tag: "",
      img: "/Salinan P.G 280 front.webp",
      description:
        "Sweet, tropical pink guava reduced slowly to capture its vibrant aroma and natural sweetness. Perfect on toasted sourdough or mixed into yogurt.",
      benefits: ["Non-GMO", "No Refined Sugar", "Vegan"],
    },
    {
      slug: "pineapple-jam",
      name: "Pineapple Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/Salinan Pinneaple Jam 280g (2).webp",
      description:
        "Sun-ripened pineapples from Bali cooked down to a sweet, tangy spread. A bright, tropical burst of flavor for your morning toast.",
      benefits: ["Non-GMO", "Organic", "Vegan"],
    },
    {
      slug: "mulberry-mix-jam",
      name: "Mulberry Mix Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/Salinan Mulberry mix 280, 145 & box.webp",
      description:
        "A rich, complex mix of locally grown mulberries and complementary berries, offering a perfect balance of tartness and natural sweetness.",
      benefits: ["Non-GMO", "No Refined Sugar"],
    },
    {
      slug: "kintamani-orange-jam",
      name: "Kintamani Orange Jam",
      price: 70000,
      originalPrice: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/Salinan kintamani orange duo dgn buah.webp",
      description:
        "Made from the famous sweet Kintamani oranges, this marmalade-style jam brings a bright, citrusy zest with a beautifully balanced sweetness.",
      benefits: ["Non-GMO", "Organic", "Vegan"],
    },
    {
      slug: "mangga-lemongrass-jam",
      name: "Mangga Lemongrass Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/Salinan Mang lemongrass 280, lemon, & lemon ginger 145 (7).webp",
      description:
        "An exotic fusion of ripe mangoes and fragrant lemongrass. This unique jam offers a refreshing, aromatic twist on a tropical classic.",
      benefits: ["Non-GMO", "No Refined Sugar", "Small Batch"],
    },
    {
      slug: "mangga-passion-fruit-jam",
      name: "Mangga Passion Fruit Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/Salinan Mang. passionfruit 280, 145 (2).webp",
      description:
        "The sweetness of mango perfectly balanced by the sharp, tangy brightness of fresh passion fruit.",
      benefits: ["Non-GMO", "Organic", "Vegan"],
    },
    {
      slug: "mangga-jam",
      name: "Mangga Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/Salinan Mango Jam 280 (2).webp",
      description:
        "Pure, sweet mango jam made from the finest seasonal harvest. A simple, vibrant taste of the tropics.",
      benefits: ["Non-GMO", "Vegan"],
    },
    {
      slug: "mangga-vanilla-jam",
      name: "Mangga Vanilla Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/Salinan Mangvan 280 & straw 280 box (9).webp",
      description:
        "Smooth mango jam infused with real vanilla bean. A decadent, creamy flavor profile that feels like dessert.",
      benefits: ["Non-GMO", "No Refined Sugar"],
    },
    {
      slug: "Strawberry-jam",
      name: "Strawberry Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/Strawberry 280 g.webp",
      description:
        "A signature blend of mountain berries slow-cooked to perfection. Sweet, slightly tart, and incredibly versatile.",
      benefits: ["Non-GMO", "Organic", "Small Batch"],
    },
    {
      slug: "blueberry-mix-jam",
      name: "Blueberry Mix Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/Blueberry Mix 145 & 280 (2).webp",
      description:
        "A robust mixture of wild blueberries and dark fruits. Rich in antioxidants and deep in flavor.",
      benefits: ["Non-GMO", "No Refined Sugar", "Vegan"],
    },
    //selai 145gr
    {
      slug: "pink-guava-jam-145",
      name: "Pink Guava Jam (145g)",
      price: 42000,
      detail: "145g Jar",
      tag: "",
      img: "/Salinan P.G 145 front.webp",
      description:
        "Sweet, tropical pink guava reduced slowly to capture its vibrant aroma and natural sweetness.",
      benefits: ["Non-GMO", "No Refined Sugar", "Vegan"],
    },
    {
      slug: "blueberry-mix-jam-145",
      name: "Blueberry Mix Jam (145g)",
      price: 42000,
      detail: "145g Jar",
      tag: "",
      img: "/Blueberry 145 front.webp",
      description:
        "A robust mixture of wild blueberries and dark fruits. Rich in antioxidants and deep in flavor.",
      benefits: ["Non-GMO", "No Refined Sugar", "Vegan"],
    },
    {
      slug: "mangga-passion-fruit-jam-145",
      name: "Mangga Passion Fruit Jam (145g)",
      price: 42000,
      detail: "145g Jar",
      tag: "",
      img: "/Salinan Mang. passionfruit 280, 145 (2).webp",
      description:
        "The sweetness of mango perfectly balanced by the sharp, tangy brightness of fresh passion fruit.",
      benefits: ["Non-GMO", "Organic", "Vegan"],
    },
    //selai 30gr (mini)
    {
      slug: "mini-jam-gift-set-3-30",
      name: "Mini Jam Set (3 Pack)",
      price: 35000,
      detail: "30g Jar",
      tag: "GIFT SET",
      img: "/Box of 3 (2).webp",
      description:
        "A delightful set of our most popular jams in miniature 30g jars. Perfect for gifting or tasting.",
      benefits: ["Non-GMO", "Vegan"],
    },
    {
      slug: "mini-jam-gift-set-4-30",
      name: "Mini Jam Set (4 Pack)",
      price: 35000,
      detail: "30g Jar",
      tag: "GIFT SET",
      img: "/Box of 4 (7).webp",
      description:
        "A delightful set of our most popular jams in miniature 30g jars. Perfect for gifting or tasting.",
      benefits: ["Non-GMO", "Vegan"],
    },
  ],
  frozen: [
    {
      slug: "Blueberries-Frozen",
      name: "Blueberries Frozen",
      price: 135000,
      detail: "1 Kg Pack",
      tag: "",
      img: "/blueberries frozen.webp",
      description:
        "Wild blueberries flash-frozen immediately after harvest to lock in their peak nutritional value and vibrant flavor.",
      benefits: ["Non-GMO", "Organic", "Raw"],
    },
    {
      slug: "Mango Frozen",
      name: "Mango Frozen",
      price: 85000,
      detail: "1 Kg Pack",
      tag: "",
      img: "/mango frozen.webp",
      description:
        "Perfectly ripe mangoes, peeled, sliced, and frozen. The ultimate convenience for smoothies, desserts, or healthy snacking.",
      benefits: ["Non-GMO", "No Added Sugar", "Vegan"],
    },
    {
      slug: "frozen-raspberries",
      name: "Frozen Raspberries (import)",
      price: 160000,
      detail: "1 Kg Pack",
      tag: "",
      img: "/raspberries frozen.webp",
      description:
        "Delicate raspberries preserved at the height of freshness. Excellent for baking or blending.",
      benefits: ["Non-GMO", "Organic", "Raw"],
    },
    {
      slug: "Kintamani-Orange-Frozen",
      name: "Kintamani Orange Frozen",
      price: 90000,
      detail: "1kg Pack",
      tag: "NEW",
      img: "/kintamani-orange-frozen.webp",
      description:
        "Freshly segmented Kintamani oranges, frozen to preserve their bright, juicy characteristics without any preservatives.",
      benefits: ["Non-GMO", "No Added Sugar", "Small Batch"],
    },
    {
      slug: "Pink Guava Frozen",
      name: "Pink Guava Frozen",
      price: 80000,
      detail: "1kg Pack",
      tag: "COMING SOON",
      img: "/pink guava frozen.webp",
      description: "Deskripsi untuk produk buah beku tambahan pertama.",
      benefits: ["Non-GMO", "Organic"],
    },
    {
      slug: "Pinneapple Frozen",
      name: "Pinneapple Frozen",
      price: 70000,
      detail: "1kg Pack",
      tag: "COMING SOON",
      img: "/pineapple frozen.webp",
      description: "Deskripsi untuk produk buah beku tambahan kedua.",
      benefits: ["Non-GMO", "Vegan"],
    },
  ],
};

export const allProducts = [...productsData.jams, ...productsData.frozen];
