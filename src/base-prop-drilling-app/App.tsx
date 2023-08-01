import '../App.css'
import Events from './components/Events';
import Contacts from './components/Contacts';
import AppComponent from '../components/common/AppComponent';
import { Event, User } from '../types';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { getEventsRequest, putEventRequest } from '../api/events';
import { getUsersRequest, putUserRequest } from '../api/users';
import Login from './components/Login';

function App() {
  const [ users, setUsers ] = useState<User[]>([]);
  const [ events, setEvents ] = useState<Event[]>([]);
  const [loggedUserId, setLoggedUserId] = useState<string | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setLoggedUserId(userId);
  }, [])

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
    <AppComponent>
      {
        loggedUserId ?
          <Stack direction='row'>
              {/* <Calendar highlightedDays={highlightedDays} /> */}
              <Contacts users={users} />
              <Events
                events={events}
                users={users}
                handleEventUpdate={handleEventUpdate}
              />
          </Stack>
            :
          <Login setLoggedUserId={setLoggedUserId} />
      }
    </AppComponent>
  )
}

export default App
