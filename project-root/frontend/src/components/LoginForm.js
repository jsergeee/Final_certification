import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LoginForm ({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // 1. Получаем CSRF-куки (обязательный шаг!)
      const csrfResponse = await fetch(
        'http://127.0.0.1:8000/sanctum/csrf-cookie',
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
          },
        },
      );

      if (!csrfResponse.ok) {
        throw new Error('CSRF token request failed');
      }

      // 2. Отправляем данные для входа
      const loginResponse = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        credentials: 'include', // Критически важно!
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-XSRF-TOKEN': getCookie('XSRF-TOKEN'), // Добавляем токен в заголовок
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await loginResponse.json();

      if (!loginResponse.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // 3. Успешный вход
      setIsAuthenticated(true);
      navigate('/dashboard');
    } catch (error) {
      setMessage(error.message || 'Authentication failed');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Вспомогательная функция для получения куки
  function getCookie (name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div className='login-container'>
      <h2 className='login-title'>Вход</h2>
      <form onSubmit={handleSubmit} noValidate className='login-form'>
        <div className='form-group'>
          <label htmlFor='email' className='form-label'>
            Email:
          </label>
          <input
            id='email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete='username'
            aria-describedby='emailError'
            className={`form-input ${errors?.email ? 'is-invalid' : ''}`}
          />
          {errors?.email && (
            <div id='emailError' className='error-message'>
              {errors.email[0]}
            </div>
          )}
        </div>

        <div className='form-group'>
          <label htmlFor='password' className='form-label'>
            Пароль:
          </label>
          <input
            id='password'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete='current-password'
            aria-describedby='passwordError'
            className={`form-input ${errors?.password ? 'is-invalid' : ''}`}
          />
          {errors?.password && (
            <div id='passwordError' className='error-message'>
              {errors.password[0]}
            </div>
          )}
        </div>

        <button
          type='submit'
          disabled={isLoading}
          aria-busy={isLoading}
          className='login-button'
        >
          {isLoading ? 'Вход...' : 'Войти'}
        </button>

        {message && (
          <div className={`status-message ${errors ? 'error' : 'success'}`}>
            {message}
          </div>
        )}

        <div className='register-link'>
          Нет аккаунта?{' '}
          <Link to='/register' className='register-link-text'>
            Зарегистрируйтесь
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
