import './App.css'
import Events from './components/Events';
import Contacts from './components/Contacts';
// import Calendar from './components/Calendar';
import RenderCounter from './util/renderCounter';
// import { Event, User } from './types';
import { Box, Button, FormGroup, FormLabel, Stack, TextField } from '@mui/material';

// import { useUsers } from './state-management/tanstack-query/useUsers';
import { FormEvent, useEffect, useState } from 'react';

interface FormInputs extends HTMLFormControlsCollection   {
  username: HTMLInputElement;
  password: HTMLInputElement;
}
 
interface EventFormType extends HTMLFormElement {
  readonly elements: FormInputs;
}

function App() {
  // const [highlightedDays, setHighlightedDays] = useState<number[]>([]);
  // const { users, putUser: setUsers } = useUsers();
  const [loggedUserId, setLoggedUserId] = useState<string | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setLoggedUserId(userId);
  }, [])

  const handleLoginSubmit = (e: FormEvent<EventFormType>) => {
    e.preventDefault()
    const form = e.currentTarget.elements;

    setLoggedUserId('1')
    localStorage.setItem('userId', '1');
  }

  return (
    <>
      <>users
        <>Name</>
        <>events</>
      </>
      {/* 
        // user login
        // sessionStorage, localStorage
        // persistance, tabs persistance
       */}
      {
        loggedUserId ?
          <>
            <RenderCounter componentName='App' />
            <Stack direction='row'>
              {/* <Calendar highlightedDays={highlightedDays} /> */}
              <Contacts />
              <Events />
            </Stack>
          </>
            :
            <form onSubmit={handleLoginSubmit} style={{flex: '1 1 0px'}}>
              <RenderCounter componentName='EventForm' />
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
      }
    </>
  )
}

export default App
