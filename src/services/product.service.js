import api from '@/lib/api';


export async function getProducts(params) {
  try {
    const { data } = await api.get('/products', { limit: 10, offset: 0 });
    return data;
  } catch (error) {
    console.error('[getProducts] API Error:', error.response?.data?.message || error.message);
    throw error;
  }
}

export async function getProductBySlug(slug) {
  try {
    const { data } = await api.get(`/products/slug/${slug}`);
    return mapApiProduct(data);
  } catch (error) {
    console.error('[getProductBySlug] API Error:', error.response?.data?.message || error.message);
    throw error;
  }
}

// Map API response to app's product structure
function mapApiProduct(apiProduct) {
  const defaultImages = [
    '/images/products/adidas-4dfwd-1.png',
    '/images/products/adidas-4dfwd-2.png',
    '/images/products/adidas-4dfwd-3.png',
    '/images/products/adidas-4dfwd-4.png',
  ];

  const apiImages = Array.isArray(apiProduct.images) ? apiProduct.images : [];
  const images = [...apiImages, ...defaultImages].slice(0, 4);

  return {
    id: String(apiProduct.id),
    slug: apiProduct.slug,
    name: apiProduct.title,
    brand: apiProduct.title.split(' ')[0], 
    price: apiProduct.price,
    description: apiProduct.description,
    colorway: 'Shadow Navy / Army Green',
    bullets: [
      'Pay over time in interest-free installments with Affirm, Klarna or Afterpay.',
      'Join adiClub to get unlimited free standard shipping, returns, & exchanges.',
    ],
    images,
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    disabledSizes: [39, 40],
    colors: ['Shadow Navy', 'Army Green'],
    category: apiProduct.category?.name || 'lifestyle',
    rating: 0,
    reviews: 0,
    inStock: true,
  };
}

export async function getRelatedProducts(productSlug) {
  try {
    const { data } = await api.get(`/products/slug/${productSlug}/related`);
    return data;
  } catch (error) {
    console.error('[getRelatedProducts] API Error:', error.response?.data?.message || error.message);
    throw error;
  }
}

export async function getNewDrops() {
  try {
    const { data } = await api.get('/products', { limit: 4, offset: 0 });
    return data;
  } catch (error) {
    console.error('[getNewDrops] API Error:', error.response?.data?.message || error.message);
    throw error;
  }
}

export async function getCategories() {
  try {
    const { data } = await api.get('/categories');
    return data;
  } catch (error) {
    console.error('[getCategories] API Error:', error.response?.data?.message || error.message);
    throw error;
  }
}
