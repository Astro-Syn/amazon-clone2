import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const cartItems = useSelector(state => state.cart.cart || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [processing, setProcessing] = useState(false);

  const total = cartItems.reduce((s, it) => s + (Number(it.price) || 0) * (it.quantity || 1), 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cardName || !cardNumber || !expiry || !cvc) {
      alert('Fill all fields (this is a fake payment form).');
      return;
    }
    setProcessing(true);


    await new Promise(res => setTimeout(res, 1200));


    const success = cardNumber.replace(/\s/g, '').length >= 12;

    setProcessing(false);
    if (success) {
      dispatch(clearCart());
      navigate('/confirmation', { state: { total } });
    } else {
      alert('Payment failed (fake) — try a longer card number (dev only).');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Payment</h2>

        <div className="mb-6">
          <h3 className="font-medium">Order Summary</h3>
          <div className="mt-2">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between py-2 border-b">
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-gray-500">Qty: {item.quantity || 1}</div>
                </div>
                <div className="font-semibold">
                  ${(Number(item.price || 0) * (item.quantity || 1)).toFixed(2)}
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-4 font-bold">
              <div>Total</div>
              <div>${total.toFixed(2)}</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm">Name on card</label>
            <input value={cardName} onChange={e => setCardName(e.target.value)}
              className="w-full border p-2 rounded" placeholder="Name on Card" />
          </div>

          <div>
            <label className="block text-sm">Card number</label>
            <input value={cardNumber} onChange={e => setCardNumber(e.target.value)}
              className="w-full border p-2 rounded" placeholder="4242 4242 4242 4242 (fake)" />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm">Expiry</label>
              <input value={expiry} onChange={e => setExpiry(e.target.value)}
                className="w-full border p-2 rounded" placeholder="MM/YY" />
            </div>
            <div style={{width:120}}>
              <label className="block text-sm">CVC</label>
              <input value={cvc} onChange={e => setCvc(e.target.value)}
                className="w-full border p-2 rounded" placeholder="123" />
            </div>
          </div>

          <button type="submit" disabled={processing}
            className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-semibold">
            {processing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
          </button>
        </form>
      </div>
    </div>
  );
}
