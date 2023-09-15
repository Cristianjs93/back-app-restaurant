import { Request, Response } from 'express';
import Stripe from 'stripe';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY as string;
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
});

export const handleCheckout = async (req: Request, res: Response) => {
  const { paymentMethod, amount } = req.body;
  try {
    console.log(paymentMethod, amount);

    const { id } = paymentMethod;
    const payment = await stripe.paymentIntents.create({
      payment_method: id,
      amount,
      currency: 'usd',
      confirm: true,
      description: 'Software development service provider',
      return_url: 'http://localhost:3004/payment-success',
    });

    res.status(201).json({ message: 'Payment successful', payment });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
