import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const db = await connectDB();
  const user = await db.collection('users').findOne({ email });
  if (user) return NextResponse.json({ error: 'User exists' }, { status: 400 });
  const hash = await bcrypt.hash(password, 10);
  await db.collection('users').insertOne({ email, password: hash });
  return NextResponse.json({ success: true });
}