import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import CafeScreen from './pages/CafeScreen';
import HomeScreen from './pages/HomeScreen';
import BottomNav from './components/BottomNav';

// Placeholder components for routes that will be implemented later
const FavoritesScreen = () => <div className="placeholder-screen">Favorites Screen</div>;
const BookmarksScreen = () => <div className="placeholder-screen">Bookmarks Screen</div>;
const ProfileScreen = () => <div className="placeholder-screen">Profile Screen</div>;

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="App">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/cafe" element={<CafeScreen />} />
          <Route path="/favorites" element={<FavoritesScreen />} />
          <Route path="/bookmarks" element={<BookmarksScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
