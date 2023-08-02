import { Dispatch, FC, FormEvent, SetStateAction } from 'react';
import LoginFormComponent from './common/LoginFormComponent';
import { LoginFormType } from '../types';

interface LoginProps {
    setLoggedUserId: Dispatch<SetStateAction<string | null>>,
}

// 👀 ⛔️ PROP DRILLING
const Login: FC<LoginProps> = ({ setLoggedUserId }) => {
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
