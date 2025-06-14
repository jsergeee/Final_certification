import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CartPage from './pages/CartPage';
import './style/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { products } from './data/products';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Проверка аутентификации при загрузке приложения
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          const response = await fetch('http://127.0.0.1:8000/api/user', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json'
            }
          });
          
          if (response.ok) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem('authToken');
          }
        }
      } catch (error) {
        console.error('Auth check error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleAddToCart = product => {
    setCartItems(prevItems => {
      const existingProduct = prevItems.find(item => item.id === product.id);
      if (existingProduct) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item,
      ),
    );
  };

  if (isLoading) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Home onAddToCart={handleAddToCart} />} />
        <Route path='/catalog' element={<Catalog products={products} onAddToCart={handleAddToCart} />} />
        <Route path='/cart' element={
          isAuthenticated ? (
            <CartPage 
              cartItems={cartItems} 
              onUpdateQuantity={handleUpdateQuantity} 
            />
          ) : (
            <Navigate to="/login" state={{ from: '/cart' }} />
          )
        } />
        <Route path='/login' element={
          isAuthenticated ? (
            <Navigate to="/dashboard" />
          ) : (
            <LoginForm setIsAuthenticated={setIsAuthenticated} />
          )
        } />
        <Route path='/dashboard' element={
          isAuthenticated ? (
            <Dashboard />
          ) : (
            <Navigate to="/login" state={{ from: '/dashboard' }} />
          )
        } />
        <Route path='/register' element={
          isAuthenticated ? (
            <Navigate to="/dashboard" />
          ) : (
            <RegistrationForm />
          )
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;