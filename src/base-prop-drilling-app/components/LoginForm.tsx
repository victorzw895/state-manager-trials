import { Dispatch, FC, FormEvent, SetStateAction } from 'react';
import { LoginFormType } from '../../types';
import LoginFormComponent from '../../components/common/LoginFormComponent';

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
