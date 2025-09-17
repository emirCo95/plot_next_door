import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CircleUserRound, Menu, X } from 'lucide-react'; // lucide-react icons
import { useAuth } from '../hooks/useAuth';

//logo
import logo from '@/assets/logo.png';
import { Button } from './ui/button';

//dropdown menu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-26">
          {/* Logo */}
          <div className="h-full flex-1 flex justify-center">
            <Link
              className="h-full bg-cosmic-latte px-4 pt-2 rounded-b-3xl"
              to="/"
            >
              <img src={logo} alt="PND Logo" className="w-20" />
            </Link>
          </div>
          <div className="md:flex-1 flex justify-center h-full bg-cosmic-latte px-4 pt-2 rounded-b-3xl items-center">
            <p className="text-xl md:text-2xl text-charcoal font-fredericka">
              Farm Fresh, Reserved for You
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="h-full hidden md:flex items-center space-x-6 md:flex-1 justify-center gap-4">
            <Link
              to="/"
              className="h-full bg-cosmic-latte px-4 pt-2 rounded-b-3xl flex items-center"
            >
              <Button
                className="text-charcoal hover:text-pnd-green cursor-pointer"
                variant="outline"
              >
                Farms
              </Button>
            </Link>
            {user ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="h-full bg-cosmic-latte p-5 rounded-full">
                      <CircleUserRound className="text-charcoal cursor-pointer" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Link to="/dashboard">
                        <Button
                          className="text-charcoal hover:text-pnd-green cursor-pointer"
                          variant="outline"
                        >
                          Dashboard
                        </Button>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {user.role === 'farmer' && (
                        <Link to="/farm">
                          <Button
                            className="text-charcoal hover:text-pnd-green cursor-pointer"
                            variant="outline"
                          >
                            My Farm
                          </Button>
                        </Link>
                      )}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  className="cursor-pointer"
                  onClick={handleLogout}
                  variant="default"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="h-full bg-cosmic-latte px-4 pt-2 rounded-b-3xl flex items-center"
                >
                  <Button
                    className="text-pnd-green hover:text-pnd-green cursor-pointer"
                    variant="outline"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-pnd-green text-white cursor-pointer hover:bg-white hover:text-pnd-green">
                    Register
                  </Button>
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
