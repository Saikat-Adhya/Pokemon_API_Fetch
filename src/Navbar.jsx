import { Link } from 'react-router-dom';

export const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Clear login state from localStorage
    setIsAuthenticated(false);
  };

  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px' }}>
      <Link to="/">Login</Link>
      <Link to="/signup">Signup</Link>
      {isAuthenticated && <Link to="/pokemon">Pokemon</Link>}
      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};
