import api from '@/lib/api';

const MOCK_PRODUCTS = [
  {
    id: '1',
    slug: 'air-max-90',
    name: 'Air Max 90',
    brand: 'Nike',
    price: 129.99,
    description: 'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.',
    images: ['/images/products/air-max-90-1.jpg', '/images/products/air-max-90-2.jpg'],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ['White', 'Black', 'Red'],
    category: 'running',
    rating: 4.5,
    reviews: 128,
    inStock: true,
  },
  {
    id: '2',
    slug: 'ultraboost-22',
    name: 'Ultraboost 22',
    brand: 'Adidas',
    price: 189.99,
    description: 'Experience epic energy with the Adidas Ultraboost 22. Responsive Boost midsole cushioning delivers comfort.',
    images: ['/images/products/ultraboost-1.jpg', '/images/products/ultraboost-2.jpg'],
    sizes: [7, 8, 9, 10, 11],
    colors: ['Core Black', 'Cloud White'],
    category: 'running',
    rating: 4.7,
    reviews: 256,
    inStock: true,
  },
  {
    id: '3',
    slug: 'classic-leather',
    name: 'Classic Leather',
    brand: 'Reebok',
    price: 79.99,
    description: 'Soft garment leather upper with die-cut EVA midsole for lightweight cushioning.',
    images: ['/images/products/classic-leather-1.jpg'],
    sizes: [8, 9, 10, 11, 12],
    colors: ['White', 'Black'],
    category: 'lifestyle',
    rating: 4.3,
    reviews: 89,
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
