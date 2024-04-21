// app/api/razorpay.js
import Razorpay from 'razorpay';
import shortid from 'shortid';
import { NextResponse } from 'next/server';



export async function POST(request) {
  try {

    const { amount, name, email, userid } = await request.json();

    return NextResponse.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
      userid: response.notes.UserId,
      status: response.status,
      createdAt: new Date().toISOString(),
      ok: true,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}