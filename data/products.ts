export interface Product {
  slug: string;
  name: string;
  price: number;
  detail: string;
  tag: string;
  img: string;
  description: string;
  benefits?: string[];
}

export const productsData: Record<string, Product[]> = {
  // jams 280g
  jams: [
    {
      slug: "durian-jam",
      name: "Durian Jam",
      price: 80000,
      detail: "280g Jar",
      tag: "",
      img: "/Durian 280.webp",
      description:
        "Our Durian Jam is crafted using hand-foraged durians from high-altitude slopes. We slow-simmer each batch in copper kettles with organic wildflower honey and a hint of lemon zest to preserve the vibrant, tart soul of the fruit.",
      benefits: ["Non-GMO", "Natural"],
    },
    {
      slug: "pink-guava-jam",
      name: "Pink Guava Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "TOP SELLER",
      img: "/pinkguava 280 new.webp",
      description:
        "Sweet, tropical pink guava reduced slowly to capture its vibrant aroma and natural sweetness. Perfect on toasted sourdough or mixed into yogurt.",
      benefits: ["Non-GMO", "Vegan"],
    },
    {
      slug: "pineapple-jam",
      name: "Pineapple Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/Pineapple.webp",
      description:
        "Sun-ripened pineapples from Bali cooked down to a sweet, tangy spread. A bright, tropical burst of flavor for your morning toast.",
      benefits: ["Non-GMO", "Natural", "Vegan"],
    },
    {
      slug: "mulberry-mix-jam",
      name: "Mulberry Mix Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "TOP SELLER",
      img: "/mullberry mix 280 new.webp",
      description:
        "A rich, complex mix of locally grown mulberries and complementary berries, offering a perfect balance of tartness and natural sweetness.",
      benefits: ["Non-GMO", "Natural"],
    },
    {
      slug: "kintamani-orange-jam",
      name: "Kintamani Orange Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/Kintamani 280.webp",
      description:
        "Made from the famous sweet Kintamani oranges, this marmalade-style jam brings a bright, citrusy zest with a beautifully balanced sweetness.",
      benefits: ["Non-GMO", "Natural", "Vegan"],
    },
    {
      slug: "mangga-lemongrass-jam",
      name: "Mangga Lemongrass Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/mango lemongrass 280 new.webp",
      description:
        "An exotic fusion of ripe mangoes and fragrant lemongrass. This unique jam offers a refreshing, aromatic twist on a tropical classic.",
      benefits: ["Non-GMO", "Small Batch"],
    },
    {
      slug: "mangga-passion-fruit-jam",
      name: "Mangga Passion Fruit Jam",
      price: 70000,
      detail: "",
      tag: "",
      img: "/Manggo passion 280.webp",
      description:
        "The sweetness of mango perfectly balanced by the sharp, tangy brightness of fresh passion fruit.",
      benefits: ["Non-GMO", "Natural", "Vegan"],
    },
    {
      slug: "mangga-jam",
      name: "Mangga Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/Mango jam 280.webp",
      description:
        "Pure, sweet mango jam made from the finest seasonal harvest. A simple, vibrant taste of the tropics.",
      benefits: ["Non-GMO", "Vegan"],
    },
    {
      slug: "mangga-vanilla-jam",
      name: "Mangga Vanilla Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "TOP SELLER",
      img: "/Manggo vanila 280.webp",
      description:
        "Smooth mango jam infused with real vanilla bean. A decadent, creamy flavor profile that feels like dessert.",
      benefits: ["Non-GMO"],
    },
    {
      slug: "strawberry-jam",
      name: "Strawberry Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "TOP SELLER",
      img: "/Strawberry 280.webp",
      description:
        "A signature blend of mountain berries slow-cooked to perfection. Sweet, slightly tart, and incredibly versatile.",
      benefits: ["Non-GMO", "Natural"],
    },
    {
      slug: "blueberry-mix-jam",
      name: "Blueberry Mix Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/Blueberry 280.webp",
      description:
        "A robust mixture of wild blueberries and dark fruits. Rich in antioxidants and deep in flavor.",
      benefits: ["Non-GMO", "Natural"],
    },
    {
      slug: "Kintamani Marmalade Jam",
      name: "Kintamani Marmalade Jam",
      price: 70000,
      detail: "280g Jar",
      tag: "",
      img: "/kintamani marmalade 280.webp",
      description:
        "Made from the famous sweet Kintamani oranges, this marmalade-style jam brings a bright, citrusy zest with a beautifully balanced sweetness.",
      benefits: ["Non-GMO", "Natural"],
    },
    //selai 145gr
    {
      slug: "pink-guava-jam-145",
      name: "Pink Guava Jam (145g)",
      price: 42000,
      detail: "145g Jar",
      tag: "",
      img: "/Pink guava 145.webp",
      description:
        "Sweet, tropical pink guava reduced slowly to capture its vibrant aroma and natural sweetness.",
      benefits: ["Non-GMO", "Natural"],
    },
    {
      slug: "blueberry-mix-jam-145",
      name: "Blueberry Mix Jam (145g)",
      price: 42000,
      detail: "145g Jar",
      tag: "",
      img: "/Blueberry 145.webp",
      description:
        "A robust mixture of wild blueberries and dark fruits. Rich in antioxidants and deep in flavor.",
      benefits: ["Non-GMO", "Natural"],
    },
    {
      slug: "mangga-passion-fruit-jam-145",
      name: "Mangga Passion Fruit Jam (145g)",
      price: 42000,
      detail: "",
      tag: "",
      img: "/Manggo passion 280.webp",
      description:
        "The sweetness of mango perfectly balanced by the sharp, tangy brightness of fresh passion fruit.",
      benefits: ["Non-GMO", "Natural", "Vegan"],
    },
    {
      slug: "strawberry-jam-145",
      name: "Strawberry Jam (145g)",
      price: 42000,
      detail: "145g Jar",
      tag: "",
      img: "/Strawberry 145.webp",
      description:
        "A signature blend of mountain berries slow-cooked to perfection. Sweet, slightly tart, and incredibly versatile.",
      benefits: ["Natural", "Non-GMO"],
    },
    {
      slug: "mangga-vanila",
      name: "Mangga vanila (145g)",
      price: 42000,
      detail: "145g Jar",
      tag: "",
      img: "/Mangvan 145.webp",
      description:
        "Smooth mango jam infused with real vanilla bean. A decadent, creamy flavor profile that feels like dessert.",
      benefits: ["Non-GMO"],
    },
    {
      slug: "mulberry",
      name: "Mulberry (145g)",
      price: 42000,
      detail: "145g Jar",
      tag: "",
      img: "/mulberry 145.webp",
      description:
        "A rich, complex mix of locally grown mulberries and complementary berries, offering a perfect balance of tartness and natural sweetness.",
      benefits: ["Natural", "Non-GMO"],
    },
    {
      slug: "lemon-marmalade",
      name: "Lemon marmalade (145g)",
      price: 42000,
      detail: "145g Jar",
      tag: "",
      img: "/Lemon marmalade 145.webp",
      description: "",
      benefits: ["Natural", "Vegan"],
    },
    {
      slug: "manggo-passion-fruit-jam",
      name: "Manggo passion fruit jam (145g)",
      price: 42000,
      detail: "145g Jar",
      tag: "",
      img: "/Mangpass145.webp",
      description: "",
      benefits: ["Natural", "Vegan"],
    },
    {
      slug: "kintamani-orange-jam-145",
      name: "Kintamani Orange jam (145g)",
      price: 42000,
      detail: "145g Jar",
      tag: "",
      img: "/kintamani 145.webp",
      description:
        "Made from the famous sweet Kintamani oranges, this marmalade-style jam brings a bright, citrusy zest with a beautifully balanced sweetness.",
      benefits: ["Natural", "Non-GMO"],
    },
    {
      slug: "placeholder-jam-145-8",
      name: "Mango jam(145g)",
      price: 42000,
      detail: "145g Gram",
      tag: "",
      img: "/mango jam 145g.webp",
      description: "",
      benefits: ["Natural"],
    },
    {
      slug: "Pineapple jam 145",
      name: "Pineapple jam (145g)",
      price: 42000,
      detail: "145g Jar",
      tag: "",
      img: "/Pineapple Jam 145g .webp",
      description: "",
      benefits: ["Natural"],
    },
    //selai 50gr (mini)
    {
      slug: "box-4-50",
      name: "Box of 4 (30g)",
      price: 100000,
      detail: "30g Jar",
      tag: "GIFT SET",
      img: "/produk 4 new.webp",
      description:
        " A curated selection of our most beloved jams in a convenient 4-pack. Perfect for gifting or sampling our range of flavors.",
      benefits: [],
    },
  ],
  frozen: [
    {
      slug: "blueberries-frozen",
      name: "Blueberries Frozen",
      price: 135000,
      detail: "1 Kg Pack",
      tag: "",
      img: "/Blueberies freze.webp",
      description:
        "Wild blueberries flash-frozen immediately after harvest to lock in their peak nutritional value and vibrant flavor.",
      benefits: ["Non-GMO", "Organic", "Raw"],
    },
    {
      slug: "mango-frozen",
      name: "Mango Frozen",
      price: 85000,
      detail: "1 Kg Pack",
      tag: "",
      img: "/Mango freze.webp",
      description:
        "Perfectly ripe mangoes, peeled, sliced, and frozen. The ultimate convenience for smoothies, desserts, or healthy snacking.",
      benefits: ["Non-GMO", "Natural"],
    },
    {
      slug: "frozen-raspberries",
      name: "Frozen Raspberries (import)",
      price: 160000,
      detail: "1 Kg Pack",
      tag: "",
      img: "/rasberries freze.webp",
      description:
        "Delicate raspberries preserved at the height of freshness. Excellent for baking or blending.",
      benefits: ["Non-GMO", "Natural", "Raw"],
    },
    {
      slug: "kintamani-orange-frozen",
      name: "Kintamani Orange Frozen",
      price: 90000,
      detail: "1kg Pack",
      tag: "",
      img: "/Kintamani orange freze.webp",
      description:
        "Freshly segmented Kintamani oranges, frozen to preserve their bright, juicy characteristics without any preservatives.",
      benefits: ["Non-GMO", "Natural"],
    },
    {
      slug: "pink-guava-frozen",
      name: "Pink Guava Frozen",
      price: 80000,
      detail: "1kg Pack",
      tag: "",
      img: "/Pink guava freze.webp",
      description: "Deskripsi untuk produk buah beku tambahan pertama.",
      benefits: ["Non-GMO", "Natural"],
    },
    {
      slug: "pineapple-frozen",
      name: "Pinneapple Frozen",
      price: 70000,
      detail: "1kg Pack",
      tag: "",
      img: "/Pineple freze.webp",
      description: "Deskripsi untuk produk buah beku tambahan kedua.",
      benefits: ["Non-GMO", "Natural"],
    },
  ],
};

export const allProducts = [...productsData.jams, ...productsData.frozen];
