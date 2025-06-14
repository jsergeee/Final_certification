import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: 'Пользователь' });

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/user', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });

        console.log('API Response:', response);

        const contentType = response.headers.get('content-type');
        if (!contentType?.includes('application/json')) {
          const text = await response.text();
          console.error('Received non-JSON response:', text);
          throw new Error('Server returned non-JSON response');
        }

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `HTTP error! status: ${response.status}`
          );
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Fetch error:', error);
        if (error.message.includes('401') || error instanceof TypeError) {
          localStorage.removeItem('authToken');
          window.location.href = '/login'; // Полная перезагрузка
        }
      }
    };

    if (token) {
      fetchUserData();
    } else {
      window.location.href = '/login'; // Полная перезагрузка
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error('Ошибка выхода:', error);
    } finally {
      localStorage.removeItem('authToken');
      window.location.href = '/login'; // Гарантированный переход с перезагрузкой
    }
  };

  return (
    <div className='dashboard-container'>
      <div className='dashboard-header'>
        <h1 className='dashboard-title'>Личный кабинет</h1>
        <p className='dashboard-welcome'>Добро пожаловать, {userData.name}!</p>
      </div>

      <div className='dashboard-content'>
        <div className='dashboard-actions'>
          <Link to='/catalog' className='shop-link'>
            <span>За покупками</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z'></path>
              <line x1='3' y1='6' x2='21' y2='6'></line>
              <path d='M16 10a4 4 0 0 1-8 0'></path>
            </svg>
          </Link>

          <button onClick={handleLogout} className='logout-button'>
            <span>Выйти</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path>
              <polyline points='16 17 21 12 16 7'></polyline>
              <line x1='21' y1='12' x2='9' y2='12'></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;