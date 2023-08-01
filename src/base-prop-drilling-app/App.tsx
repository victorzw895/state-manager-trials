import '../App.css'
import Events from './components/Events';
import RenderCounter from '../util/renderCounter';
import { Event, User } from '../types';
import { Button, FormGroup, Stack, TextField } from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';
import { getEventsRequest, putEventRequest } from '../api/events';
import { getUsersRequest, putUserRequest } from '../api/users';
import Contacts from './components/Contacts';

interface FormInputs extends HTMLFormControlsCollection   {
  username: HTMLInputElement;
  password: HTMLInputElement;
}
 
interface EventFormType extends HTMLFormElement {
  readonly elements: FormInputs;
}

function App() {
  const [ users, setUsers ] = useState<User[]>([]);
  const [ events, setEvents ] = useState<Event[]>([]);
  const [loggedUserId, setLoggedUserId] = useState<string | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setLoggedUserId(userId);
  }, [])

  const handleLoginSubmit = (e: FormEvent<EventFormType>) => {
    e.preventDefault();
    const form = e.currentTarget.elements;

    setLoggedUserId('1')
    localStorage.setItem('userId', '1');
  }

  useEffect(() => {
      void (async () => {
          const eventsData = await getEventsRequest();
          setEvents(eventsData);

          const usersData = await getUsersRequest();
          setUsers(usersData);
      })()
  }, []);

  const handleEventUpdate = async (value: Event) => {
    const data = await putEventRequest(value);
    // data = value; // putEventRequest calls a mock api, will not return live values
    setEvents((prev) => {
        if (prev.findIndex(event => event.id === data.id) >= 0) {
            return prev.map((event) => {
                if (event.id === data.id) {
                  return data
                }
                else return event
            }) 
        }
        else return [...prev, data]
    })
  }

  const handleUpdateUsers = async (value: User) => {
    const data = await putUserRequest(value);
    // data = value; // putUserRequest calls a mock api, will not return live values

    setUsers((prev) => {
        if (prev.findIndex(user => user.id === data.id) >= 0) {
            return prev.map((user) => {
                if (user.id === data.id) {
                    return data
                }
                else return user
            }) 
        }
        else return [...prev, data]
    })
  }

  return (
    <>
      {
        loggedUserId ?
          <>
            <RenderCounter componentName='App' />
            <Stack direction='row'>
              <Contacts users={users} />
              <Events
                events={events}
                users={users}
                handleEventUpdate={handleEventUpdate}
              />
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
