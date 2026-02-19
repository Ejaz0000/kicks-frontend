import api from '@/lib/api';

export async function applyPromoCode(code) {
  // TODO: Replace with real API call
  // const { data } = await api.post('/cart/promo', { code });
  // return data;
  const validCodes = {
    KICKS10: { discount: 10, type: 'percentage' },
    SAVE20: { discount: 20, type: 'fixed' },
  };
  const promo = validCodes[code.toUpperCase()];
  if (!promo) throw new Error('Invalid promo code');
  return promo;
}

export async function getShippingEstimate(items) {
  // TODO: Replace with real API call
  return { standard: 5.99, express: 12.99 };
}
