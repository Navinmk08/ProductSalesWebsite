import React, { useState } from 'react';
import axios from 'axios';

function Payment() {
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/payment', {
        amount,
      });

      const options = {
        key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay key
        amount: amount * 100, // amount in the smallest currency unit
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Payment for your service',
        image: 'https://your-company-logo.png',
        order_id: response.data.orderId, // obtained in the response from server
        handler: function (response) {
          setPaymentStatus(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Your Address',
        },
        theme: {
          color: '#F37254',
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Payment</h1>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Make Payment</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
}

export default Payment;
