'use client'
import { useState } from 'react';

export default function Dashboard() {
  const [resume, setResume] = useState('');
  const [jobPost, setJobPost] = useState('');
  const [output, setOutput] = useState('');

  const submit = async () => {
    const res = await fetch('/api/tailor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resume, jobPost }),
    });
    const data = await res.json();
    setOutput(data.tailoredResume);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Resume Tailor Dashboard</h1>
        <p>Transform your resume to match any job posting with AI precision</p>
      </div>

      <div className="info-cards">
        <div className="info-card">
          <span className="info-card-icon">🎯</span>
          <h4>Smart Matching</h4>
          <p>AI analyzes keywords and requirements</p>
        </div>
        <div className="info-card">
          <span className="info-card-icon">⚡</span>
          <h4>Instant Results</h4>
          <p>Get your tailored resume in seconds</p>
        </div>
        <div className="info-card">
          <span className="info-card-icon">📊</span>
          <h4>ATS Optimized</h4>
          <p>Passes applicant tracking systems</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="input-section">
          <h3>📄 Your Resume</h3>
          <textarea
            className="textarea-field"
            placeholder="Paste your current resume here...

Include your:
• Contact information
• Work experience
• Skills and qualifications
• Education
• Achievements"
            value={resume}
            onChange={e => setResume(e.target.value)}
          />
        </div>

        <div className="input-section">
          <h3>💼 Job Posting</h3>
          <textarea
            className="textarea-field"
            placeholder="Paste the job posting here...

Include:
• Job title and company
• Required qualifications
• Responsibilities
• Preferred skills
• Job requirements"
            value={jobPost}
            onChange={e => setJobPost(e.target.value)}
          />
        </div>
      </div>

      <button 
        onClick={submit} 
        className="action-button"
        disabled={!resume || !jobPost}
      >
        🚀 Tailor My Resume
      </button>

      {output ? (
        <div className="output-section">
          <h3>✨ Your Tailored Resume</h3>
          <textarea
            className="output-textarea"
            readOnly
            value={output}
            placeholder="Your tailored resume will appear here..."
          />
        </div>
      ) : (
        <div className="output-section">
          <div className="empty-state">
            <span className="empty-state-icon">📝</span>
            <p>Your AI-tailored resume will appear here once you submit your resume and job posting above.</p>
          </div>
        </div>
      )}
    </div>
  );
}