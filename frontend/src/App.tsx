'use client';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import FarmerRegister from './pages/FarmerRegister';
import CustomerRegister from './pages/CustomerRegister';
import FarmerDashboard from './pages/FarmerDashboard';
import ChooseRole from './pages/ChooseRole';
import Farm from './pages/Farm';

import { useAuth } from './hooks/useAuth';

import { Toaster } from '@/components/ui/sonner';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/farmer-register" element={<FarmerRegister />} />
        <Route path="/customer-register" element={<CustomerRegister />} />
        <Route path="/register" element={<ChooseRole />} />
        <Route
          path="/farm"
          element={
            <ProtectedRoute>
              <Farm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/farmer-dashboard"
          element={
            <ProtectedRoute>
              <FarmerDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
