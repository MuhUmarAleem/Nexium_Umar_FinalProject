'use client'
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setError('');
    setLoading(true);
    
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      if (res.ok) {
        window.location.href = '/dashboard';
      } else {
        const data = await res.json();
        setError(data.message || 'Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Welcome Back</h1>
      <p>Sign in to your Resume Tailor account</p>
      
      {error && (
        <div className="form-message error">
          {error}
        </div>
      )}
      
      <div className="form-group has-icon" data-icon="📧">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="form-group has-icon" data-icon="🔒">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>

      <button 
        onClick={login} 
        className={`form-submit ${loading ? 'loading' : ''}`}
        disabled={loading}
      >
        {loading ? 'Signing In...' : 'Sign In'}
      </button>

      <div className="form-footer">
        <p>
          Don&apos;t have an account? <a href="/register">Create one here</a>
        </p>
      </div>
    </div>
  );
}