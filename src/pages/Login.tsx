import React, { useContext } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const auth = getAuth();
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);
    // console.log(res)
  };

  if (user?.uid) {
    navigate('/');
    return;
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLoginWithGoogle}>Login with google</button>
    </div>
  );
};

export default Login;
