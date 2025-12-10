// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import CategorySidebar from './components/CategorySidebar.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import WishlistPage from './pages/WishlistPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import ChatPage from './pages/ChatPage.jsx';
import UserPanelPage from './pages/UserPanelPage.jsx';
import PreferencesPage from './pages/PreferencesPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import SellerPanelPage from './pages/SellerPanelPage.jsx';
import LogoutPage from './pages/LogoutPage.jsx';
import PublishPage from './pages/PublishPage.jsx';
import ConfirmationPage from './pages/ConfirmationPage.jsx';
import './App.css';

function App() {
  const [isCategoryMenuOpen, setCategoryMenuOpen] = useState(false);

  return (
    <Router>
      <CategorySidebar isOpen={isCategoryMenuOpen} onClose={() => setCategoryMenuOpen(false)} />
      <Header onMenuClick={() => setCategoryMenuOpen(!isCategoryMenuOpen)} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/profile" element={<UserPanelPage />} />
          <Route path="/preferences" element={<PreferencesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/sell" element={<SellerPanelPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/publish" element={<PublishPage />} />
          <Route path="/edit-product/:productId" element={<PublishPage isEditing={true} />} />
          <Route path="/confirmation/success" element={<ConfirmationPage />} />
          <Route path="/confirmation/error" element={<ConfirmationPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;