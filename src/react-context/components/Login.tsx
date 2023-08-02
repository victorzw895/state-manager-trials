import { FC, useEffect } from 'react';
import { useContextDispatch } from '../useDispatch';
import LoginForm from './LoginForm';

// 👀 ✅ No PROP DRILLING here
const Login: FC = () => {
  const { setLoggedUserId } = useContextDispatch();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setLoggedUserId(userId);
  }, [])

  return (
    // 👀 ✅ Remove PROP DRILLING here - `setLoggedUserId={setLoggedUserId}`
    <LoginForm />
  )
}

export default Login
