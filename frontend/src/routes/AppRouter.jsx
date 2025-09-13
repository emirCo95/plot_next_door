import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home.jsx';
import LoginPage from '../pages/login.jsx';
import FarmerRegisterPage from '../pages/farmerRegister.jsx';
import CustomerRegisterPage from '../pages/customerRegister.jsx';

import PrivateRoute from './PrivateRoute';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/farmerRegister" element={<FarmerRegisterPage />} />
      <Route path="/customerRegister" element={<CustomerRegisterPage />} />
    </Routes>
  );
}
