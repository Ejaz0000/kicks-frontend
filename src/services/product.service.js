import api from '@/lib/api';

const MOCK_PRODUCTS = [
  {
    id: '1',
    slug: 'adidas-4dfwd-x-parley',
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    brand: 'Adidas',
    price: 125,
    description: 'This product is excluded from all promotional discounts and offers.',
    colorway: 'Shadow Navy / Army Green',
    bullets: [
      'Pay over time in interest-free installments with Affirm, Klarna or Afterpay.',
      'Join adiClub to get unlimited free standard shipping, returns, & exchanges.',
    ],
    images: [
      '/images/products/adidas-4dfwd-1.png',
      '/images/products/adidas-4dfwd-2.png',
      '/images/products/adidas-4dfwd-3.png',
      '/images/products/adidas-4dfwd-4.png',
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    disabledSizes: [39, 40],
    colors: ['Shadow Navy', 'Army Green'],
    category: 'running',
    rating: 4.5,
    reviews: 128,
    inStock: true,
  },
  {
    id: '2',
    slug: 'ultraboost-22',
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    brand: 'Adidas',
    price: 125,
    description: 'Experience epic energy with the Adidas Ultraboost 22. Responsive Boost midsole cushioning delivers comfort.',
    colorway: 'Core Black / Cloud White',
    bullets: [
      'Pay over time in interest-free installments with Affirm, Klarna or Afterpay.',
      'Join adiClub to get unlimited free standard shipping, returns, & exchanges.',
    ],
    images: [
      '/images/products/adidas-4dfwd-1.png',
      '/images/products/adidas-4dfwd-2.png',
      '/images/products/adidas-4dfwd-3.png',
      '/images/products/adidas-4dfwd-4.png',
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    disabledSizes: [],
    colors: ['Core Black', 'Cloud White'],
    category: 'running',
    rating: 4.7,
    reviews: 256,
    inStock: true,
  },
  {
    id: '3',
    slug: 'classic-leather',
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    brand: 'Adidas',
    price: 125,
    description: 'Soft garment leather upper with die-cut EVA midsole for lightweight cushioning.',
    colorway: 'White / Black',
    bullets: [
      'Pay over time in interest-free installments with Affirm, Klarna or Afterpay.',
      'Join adiClub to get unlimited free standard shipping, returns, & exchanges.',
    ],
    images: [
      '/images/products/adidas-4dfwd-1.png',
      '/images/products/adidas-4dfwd-2.png',
      '/images/products/adidas-4dfwd-3.png',
      '/images/products/adidas-4dfwd-4.png',
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46],
    disabledSizes: [],
    colors: ['White', 'Black'],
    category: 'lifestyle',
    rating: 4.3,
    reviews: 89,
    inStock: true,
  },
  {
    id: '4',
    slug: 'adidas-4dfwd-orange',
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    brand: 'Adidas',
    price: 125,
    description: 'Premium running shoe with 4D midsole technology.',
    colorway: 'Cloud White / Screaming Orange',
    bullets: [
      'Pay over time in interest-free installments with Affirm, Klarna or Afterpay.',
      'Join adiClub to get unlimited free standard shipping, returns, & exchanges.',
    ],
    images: [
      '/images/products/adidas-4dfwd-1.png',
      '/images/products/adidas-4dfwd-2.png',
      '/images/products/adidas-4dfwd-3.png',
      '/images/products/adidas-4dfwd-4.png',
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    disabledSizes: [39],
    colors: ['Cloud White', 'Black'],
    category: 'running',
    rating: 4.6,
    reviews: 174,
    inStock: true,
  },
];

export async function getProducts(params) {
  // TODO: Replace with real API call
  // return api.get('/products', params);
  return MOCK_PRODUCTS;
}

export async function getProductBySlug(slug) {
  // TODO: Replace with real API call
  // const { data } = await api.get(`/products/${slug}`);
  // return data;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return null;
  return product;
}

export async function getRelatedProducts(productId) {
  // TODO: Replace with real API call
  return MOCK_PRODUCTS.filter((p) => p.id !== productId).slice(0, 4);
}

export async function getNewDrops() {
  // TODO: Replace with real API call
  return MOCK_PRODUCTS.slice(0, 4);
}

export async function getCategories() {
  return [
    { id: '1', name: 'Running', slug: 'running', image: '/images/categories/running.jpg' },
    { id: '2', name: 'Lifestyle', slug: 'lifestyle', image: '/images/categories/lifestyle.jpg' },
    { id: '3', name: 'Basketball', slug: 'basketball', image: '/images/categories/basketball.jpg' },
    { id: '4', name: 'Training', slug: 'training', image: '/images/categories/training.jpg' },
  ];
}
