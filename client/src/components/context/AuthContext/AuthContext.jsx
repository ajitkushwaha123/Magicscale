





import { createContext, useState, useEffect } from 'react';
import authAPI from "../../../services/api";
import { useAuth } from '../../context/AuthContext/useAuth';



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Failed to parse user from localStorage:', error);
      localStorage.removeItem('user');
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const data = await authAPI.checkToken();

        if (data.success) {
          if (!user) {
            const profileData = await authAPI.getProfile();
            setUser(profileData.user);
            localStorage.setItem('user', JSON.stringify(profileData.user));
          }
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Token verification failed:', error);
        logout(); // Invalid token, logout
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
  };

  const logout = () => {
    // Clear both user and token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Optionally notify server (if using server sessions)
    authAPI.logout?.(); // safe call if exists

    // Clear state
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
