'use client'
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const register = async () => {
    setError('');
    setLoading(true);
    
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      if (res.ok) {
        window.location.href = '/login';
      } else {
        const data = await res.json();
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Join Resume Tailor</h1>
      <p>Create your account and start tailoring your resume today</p>
      
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
          placeholder="Create a strong password"
          required
        />
      </div>

      <button 
        onClick={register} 
        className={`form-submit ${loading ? 'loading' : ''}`}
        disabled={loading}
      >
        {loading ? 'Creating Account...' : 'Create Account'}
      </button>

      <div className="form-footer">
        <p>
          Already have an account? <a href="/login">Sign in here</a>
        </p>
      </div>
    </div>
  );
}