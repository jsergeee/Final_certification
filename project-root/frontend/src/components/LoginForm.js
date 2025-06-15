import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

function LoginForm({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login, error: authError } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        setIsAuthenticated(true);
        navigate('/dashboard');
      } else {
        setErrors({ 
          auth: [result.message || 'Authentication failed'] 
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ 
        auth: ['Произошла ошибка при авторизации'] 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
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
            minLength="8"
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

        {(errors.auth || authError) && (
          <div className='error-message mb-3'>
            {errors.auth?.[0] || authError}
          </div>
        )}

        <button
          type='submit'
          disabled={isLoading}
          aria-busy={isLoading}
          className='login-button'
        >
          {isLoading ? 'Вход...' : 'Войти'}
        </button>

        <div className='register-link mt-3'>
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