import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setErrors({});

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 422) {
          setErrors(data.errors || {});
          setMessage(data.message || 'Пожалуйста, исправьте ошибки в форме');
        } else {
          setMessage(data.message || 'Произошла ошибка при регистрации');
        }
        return;
      }

      setMessage('Регистрация прошла успешно! Перенаправляем...');
      setFormData({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      });

    } catch (error) {
      setMessage('Ошибка соединения с сервером');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Регистрация</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Имя:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className={`form-input ${errors?.name ? 'is-invalid' : ''}`}
          />
          {errors?.name && <div className="error-message">{errors.name[0]}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`form-input ${errors?.email ? 'is-invalid' : ''}`}
          />
          {errors?.email && <div className="error-message">{errors.email[0]}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Пароль:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
            className={`form-input ${errors?.password ? 'is-invalid' : ''}`}
          />
          {errors?.password && <div className="error-message">{errors.password[0]}</div>}
          <div className="password-hint">Минимум 6 символов</div>
        </div>
        
        <div className="form-group">
          <label htmlFor="password_confirmation" className="form-label">Подтвердите пароль:</label>
          <input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            value={formData.password_confirmation}
            onChange={handleChange}
            required
            minLength="6"
            className="form-input"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="register-button"
        >
          {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
        </button>
        
        {message && (
          <div className={`status-message ${errors.length ? 'error' : 'success'}`}>
            {message}
          </div>
        )}

        <div className="login-link">
          Уже есть аккаунт? <Link to="/login" className="login-link-text">Войдите</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;