'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { applyPromoCode } from '@/services/cart.service';

export default function PromoCodeInput() {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApply = async (e) => {
    e.preventDefault();
    if (!code.trim()) return;

    setLoading(true);
    setStatus(null);
    try {
      const result = await applyPromoCode(code);
      setStatus({ type: 'success', message: `Applied! ${result.discount}${result.type === 'percentage' ? '%' : '$'} off` });
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleApply} className="flex gap-2">
        <Input
          placeholder="Promo code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button type="submit" variant="secondary" disabled={loading}>
          {loading ? '...' : 'Apply'}
        </Button>
      </form>
      {status && (
        <p className={`mt-2 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {status.message}
        </p>
      )}
    </div>
  );
}
