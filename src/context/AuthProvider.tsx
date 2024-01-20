import React from 'react';
import { getAuth } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserModel } from '../models';

type AuthContextType = {
  user: UserModel | null;
  setUser: React.Dispatch<React.SetStateAction<UserModel | null>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserModel | null>(null);
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    const unsubscribed = auth.onIdTokenChanged((user) => {
      if (user?.uid) {
        setUser({ ...user });
        user
          .getIdToken(false)
          .then((res) => localStorage.setItem('accessToken', res))
          .catch((error) => console.error(`Failed to get ID Token in AuthProvider: ${error}`));
        return;
      }

      // reset user info
      setUser(null);
      localStorage.clear();
      navigate('/login');
    });

    return () => {
      unsubscribed();
    };
  }, [auth]);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
