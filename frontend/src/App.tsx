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
import Spinner from './components/Spinner';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/login" replace />;
};
const GuestRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  if (loading) return <Spinner />;
  return user ? <Navigate to="/" replace /> : children;
};

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
        <Route
          path="/farmer-register"
          element={
            <GuestRoute>
              <FarmerRegister />
            </GuestRoute>
          }
        />
        <Route
          path="/customer-register"
          element={
            <GuestRoute>
              <CustomerRegister />
            </GuestRoute>
          }
        />
        <Route
          path="/register"
          element={
            <GuestRoute>
              <ChooseRole />
            </GuestRoute>
          }
        />
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
