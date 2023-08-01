import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import LoginForm from './common/LoginForm';

interface LoginProps {
    setLoggedUserId: Dispatch<SetStateAction<string | null>>,
}

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
