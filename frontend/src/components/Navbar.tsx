import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // lucide-react icons
import { useAuth } from '../hooks/useAuth';

//logo
import logo from '@/assets/logo.png';
import { Button } from './ui/button';

export default function Navbar() {
  const { user, loading, logoutUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  console.log(user);

  const handleLogout = async () => {
    await logoutUser();
    navigate('/login');
  };

  if (loading) {
    return <div className="h-16 bg-green-700">Loading...</div>;
  }

  return (
    <nav className="bg-cosmic-latte text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-26">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold flex-1 flex justify-center"
          >
            <img src={logo} alt="PND Logo" className="w-20" />
          </Link>
          <div className="md:flex-1 flex justify-center">
            <p className="text-xl md:text-2xl text-pnd-green font-chewy font-semibold">
              Your Local Farm, Just a Click Away
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 md:flex-1 justify-center">
            <Link to="/" className="hover:underline">
              <Button
                className="text-pnd-green hover:text-pnd-green"
                variant="ghost"
              >
                Home
              </Button>
            </Link>
            {user ? (
              <>
                <Link to="/dashboard" className="hover:underline">
                  Dashboard
                </Link>
                {user.role === 'farmer' && (
                  <Link to="/farm" className="hover:underline">
                    My Farm
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-white text-green-700 px-3 py-1 rounded hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:underline">
                  <Button
                    className="text-pnd-green hover:text-pnd-green"
                    variant="ghost"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register" className="hover:underline">
                  <Button>Register</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-700 px-4 pb-4">
          <Link
            to="/"
            className="block py-2 hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="block py-2 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
              {user.role === 'farmer' && (
                <Link
                  to="/farm"
                  className="block py-2 hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  My Farm
                </Link>
              )}
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="block w-full text-left py-2 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block py-2 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block py-2 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
