export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Resume Tailor</h1>
      <p>Transform your career with AI-powered resume optimization. Get your resume perfectly tailored to match any job posting and stand out from the competition.</p>
      
      <div className="cta-buttons">
        <a href="/register" className="btn btn-primary">Get Started</a>
        <a href="/login" className="btn btn-secondary">Sign In</a>
      </div>

      <div className="features">
        <div className="feature">
          <span className="feature-icon">🎯</span>
          <h3>Smart Matching</h3>
          <p>AI analyzes job descriptions and optimizes your resume accordingly</p>
        </div>
        <div className="feature">
          <span className="feature-icon">⚡</span>
          <h3>Lightning Fast</h3>
          <p>Get your tailored resume in seconds, not hours</p>
        </div>
        <div className="feature">
          <span className="feature-icon">📊</span>
          <h3>ATS Optimized</h3>
          <p>Ensure your resume passes through applicant tracking systems</p>
        </div>
      </div>
    </div>
  );
}