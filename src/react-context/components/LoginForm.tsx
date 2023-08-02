import { FC, FormEvent } from 'react';
import LoginFormComponent from '../../components/common/LoginFormComponent';
import { LoginFormType } from '../../types';
import { useContextDispatch } from '../useDispatch';

// 👀 ✅ No PROP DRILLING here
const Login: FC = () => {
  const { setLoggedUserId } = useContextDispatch();
  
  const handleLoginSubmit = (e: FormEvent<LoginFormType>) => {
    e.preventDefault()
    // const form = e.currentTarget.elements;

    setLoggedUserId('1')
    localStorage.setItem('userId', '1');
  }

  return (
    <LoginFormComponent onSubmit={handleLoginSubmit} />
  )
}

export default Login
