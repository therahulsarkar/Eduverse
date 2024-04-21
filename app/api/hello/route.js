// app/api/hello.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  // Handle the POST request
  const data = await request.json();
  // console.log('Received POST data:', data);

  return NextResponse.json({ message: 'POST request received successfully' });
}