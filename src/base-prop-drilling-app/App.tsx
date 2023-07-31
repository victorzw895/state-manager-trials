import '../App.css'
import Events from './components/Events';
import RenderCounter from '../util/renderCounter';
import { Event, User } from '../types';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { getEventsRequest, putEventRequest } from '../api/events';
import { getUsersRequest, putUserRequest } from '../api/users';

function App() {
  const [ users, setUsers ] = useState<User[]>([]);
  const [ events, setEvents ] = useState<Event[]>([]);

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
      <RenderCounter componentName='App' />
      <Stack direction='row'>
        <Events
          events={events}
          handleEventUpdate={handleEventUpdate}
        />
      </Stack>
    </>
  )
}

export default App
