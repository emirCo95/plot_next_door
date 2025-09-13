import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import FarmerRegisterPage from '../pages/farmerRegister';
import CustomerRegisterPage from '../pages/customerRegister';

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
