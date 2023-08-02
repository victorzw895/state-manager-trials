import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import LoginForm from './LoginForm';

interface LoginProps {
    setLoggedUserId: Dispatch<SetStateAction<string | null>>,
}

// 👀 ⛔️ PROP DRILLING
const Login: FC<LoginProps> = ({ setLoggedUserId }) => {
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setLoggedUserId(userId);
  }, [])

  return (
    <LoginForm setLoggedUserId={setLoggedUserId} />
  )
}

export default Login
