import { FC, FormEvent } from 'react';
import RenderCounter from '../../util/renderCounter';
import { Button, FormGroup, Stack, TextField } from '@mui/material';
import { LoginFormType } from '../../types';

interface LoginFormComponentProps {
    onSubmit: (e: FormEvent<LoginFormType>) => void
}

const LoginFormComponent: FC<LoginFormComponentProps> = ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit} style={{flex: '1 1 0px'}}>
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

export default LoginFormComponent
