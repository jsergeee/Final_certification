import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LoginForm({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setMessage('');
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 422) {
          setErrors(errorData.errors || {});
          throw new Error('Проверьте правильность введенных данных');
        }
        throw new Error(errorData.message || 'Ошибка авторизации');
      }

      const data = await response.json();
      localStorage.setItem('authToken', data.token);
      setIsAuthenticated(true);
      navigate('/dashboard', { replace: true });

    } catch (error) {
      setMessage(error.message || 'Произошла ошибка при входе');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Вход</h2>
      <form onSubmit={handleSubmit} noValidate className="login-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="username"
            aria-describedby="emailError"
            className={`form-input ${errors?.email ? 'is-invalid' : ''}`}
          />
          {errors?.email && (
            <div id="emailError" className="error-message">
              {errors.email[0]}
            </div>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Пароль:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
            aria-describedby="passwordError"
            className={`form-input ${errors?.password ? 'is-invalid' : ''}`}
          />
          {errors?.password && (
            <div id="passwordError" className="error-message">
              {errors.password[0]}
            </div>
          )}
        </div>
        
        <button 
          type="submit" 
          disabled={isLoading}
          aria-busy={isLoading}
          className="login-button"
        >
          {isLoading ? 'Вход...' : 'Войти'}
        </button>
        
        {message && (
          <div className={`status-message ${errors ? 'error' : 'success'}`}>
            {message}
          </div>
        )}

        <div className="register-link">
          Нет аккаунта? <Link to="/register" className="register-link-text">Зарегистрируйтесь</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;