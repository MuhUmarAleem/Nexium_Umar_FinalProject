import { NextRequest, NextResponse } from 'next/server';
import { callGroq } from '@/lib/groq';

export async function POST(req: NextRequest) {
  const { resume, jobPost } = await req.json();
  const prompt = `Here is a job description:\n${jobPost}\n\nAnd here is my current resume:\n${resume}\n\nPlease tailor my resume to better fit the job.`;
  const tailoredResume = await callGroq(prompt);
  return NextResponse.json({ tailoredResume });
}