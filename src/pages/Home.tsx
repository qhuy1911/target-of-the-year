import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { UserModel } from '../models';

const Home: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState<UserModel | null>(null);

  useEffect(() => {
    if (authContext?.user) {
      setUser(authContext?.user);
    }
  }, [authContext?.user]);

  return (
    <>
      <h1 className=' text-2xl text-center font-semibold'>Home</h1>
      <p>Welcome {user?.displayName}</p>
    </>
  );
};

export default Home;
