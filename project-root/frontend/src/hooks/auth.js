import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Настройка axios
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
});

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Проверка авторизации при загрузке
  const checkAuth = useCallback(async () => {
    try {
      const { data } = await api.get('/user');
      setUser(data);
    } catch (err) {
      setUser(null);
      setError(err.response?.data?.message || 'Not authenticated');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Логин
  const login = async (email, password) => {
    try {
      const { data } = await api.post('/login', { email, password });
      setUser(data.user);
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      return { success: false, message: err.response?.data?.message };
    }
  };

  // Логаут
  const logout = async () => {
    try {
      await api.post('/logout');
      setUser(null);
    } catch (err) {
      setError('Logout failed');
    }
  };

  return { user, loading, error, login, logout, checkAuth };
}