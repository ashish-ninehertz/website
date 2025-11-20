import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn, GraduationCap } from 'lucide-react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login
    alert('Login functionality will be implemented in Phase 2 with Supabase authentication');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary rounded-xl shadow-lg shadow-primary/50">
              <GraduationCap className="w-12 h-12 text-background" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-text mb-2 glow-text">Welcome Back</h2>
          <p className="text-text-secondary">Login to access your account</p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input pl-10"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="input pl-10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-border rounded bg-surface"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-text-secondary">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-primary hover:text-secondary transition-colors">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
              <span>Login</span>
              <LogIn className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-text-secondary">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary hover:text-secondary font-medium transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-text-secondary">
          <p>Demo Credentials:</p>
          <p className="mt-2">
            <strong className="text-primary">Student:</strong> alice.wilson@student.school.edu / password123
          </p>
          <p>
            <strong className="text-primary">Teacher:</strong> john.smith@school.edu / password123
          </p>
        </div>
      </motion.div>
    </div>
  );
}
