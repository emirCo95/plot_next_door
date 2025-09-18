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
import Spinner from './Spinner';

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
    return <Spinner />;
  }

  return (
    <nav className="fixed w-full top-0 left-0backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-26">
          {/* Logo */}
          <div className="h-full flex-1 flex justify-center gap-4">
            <Link
              className="h-full bg-cosmic-latte px-4 pt-2 rounded-b-3xl shadow-md"
              to="/"
            >
              <img src={logo} alt="PND Logo" className="w-20" />
            </Link>
            {/* <Link
              to="/"
              className="hidden md:flex h-full bg-cosmic-latte px-4 pt-2 rounded-b-3xl items-center"
            >
              <Button
                className="text-charcoal hover:text-pnd-green cursor-pointer"
                variant="outline"
              >
                Farms
              </Button>
            </Link> */}
          </div>
          <div className="hidden md:flex-1 md:flex justify-center h-1/2 bg-cosmic-latte px-4 pt-2 rounded-b-3xl items-center self-start shadow-md">
            <p className="text-md md:text-xl lg:text-2xl text-charcoal font-dafoe">
              Farm Fresh, Reserved for You
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="h-full hidden md:flex items-center space-x-6 md:flex-1 justify-center gap-4">
            {/* <Link
              to="/"
              className="h-full bg-cosmic-latte px-4 pt-2 rounded-b-3xl flex items-center"
            >
              <Button
                className="text-charcoal hover:text-pnd-green cursor-pointer"
                variant="outline"
              >
                Farms
              </Button>
            </Link> */}
            {user ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="relative h-full bg-cosmic-latte p-4 rounded-full shadow-md">
                      <div className="absolute top-0 right-0 w-4 h-4 p-2 rounded-full bg-cosmic-latte flex items-center justify-center border border-charcoal">
                        <span className="text-sm font-chewy">2</span>
                      </div>
                      <CircleUserRound className="text-charcoal cursor-pointer" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem className="w-full">
                      <Link className="w-full" to="/dashboard">
                        <Button
                          className="w-full cursor-pointer"
                          variant="outline"
                        >
                          Dashboard
                        </Button>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {user.role === 'farmer' && (
                        <Link className="w-full" to="/farm">
                          <Button
                            className="w-full cursor-pointer"
                            variant="outline"
                          >
                            My Farm
                          </Button>
                        </Link>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button
                        className="cursor-pointer w-full"
                        onClick={handleLogout}
                        variant="default"
                      >
                        Logout
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="h-full bg-cosmic-latte px-4 pt-2 rounded-b-3xl flex items-center"
                >
                  <Button className="cursor-pointer" variant="outline">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="cursor-pointer">Sign Up</Button>
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
        <div className="md:hidden bg-cosmic-latte px-4 pb-4 rounded-2xl mt-4">
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
