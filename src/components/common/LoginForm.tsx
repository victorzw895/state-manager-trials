import { Dispatch, FC, FormEvent, SetStateAction } from 'react';
import RenderCounter from '../../util/renderCounter';
import { Button, FormGroup, Stack, TextField } from '@mui/material';

interface FormInputs extends HTMLFormControlsCollection   {
  username: HTMLInputElement;
  password: HTMLInputElement;
}
 
interface EventFormType extends HTMLFormElement {
  readonly elements: FormInputs;
}

interface LoginFormProps {
  setLoggedUserId: Dispatch<SetStateAction<string | null>>,
}

const LoginForm: FC<LoginFormProps> = ({setLoggedUserId}) => {
  const handleLoginSubmit = (e: FormEvent<EventFormType>) => {
    e.preventDefault()
    // const form = e.currentTarget.elements;

    setLoggedUserId('1')
    localStorage.setItem('userId', '1');
  }

  return (
    <form onSubmit={handleLoginSubmit} style={{flex: '1 1 0px'}}>
        <RenderCounter componentName='Login Form' />
        <FormGroup>
            <Stack direction='column' spacing={2}>
                <TextField
                    label='username'
                    name='username'
                    variant='standard'
                    InputLabelProps={{ shrink: true }}
                    defaultValue={''}
                    required
                />
                <TextField
                    label='password'
                    name='password'
                    variant='standard'
                    InputLabelProps={{ shrink: true }}
                    defaultValue={''}
                    required
                />
                <Button type='submit' variant="contained">Login</Button>
            </Stack>
        </FormGroup>
    </form>
  )
}

export default LoginForm
