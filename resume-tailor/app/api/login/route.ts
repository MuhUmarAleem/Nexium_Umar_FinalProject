import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const db = await connectDB();
  const user = await db.collection('users').findOne({ email });
  if (!user) return NextResponse.json({ error: 'No user' }, { status: 400 });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return NextResponse.json({ error: 'Wrong pass' }, { status: 401 });
  // Session: store email in cookie (basic)
  const res = NextResponse.json({ success: true });
  res.cookies.set('user', email);
  return res;
}