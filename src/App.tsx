import { useState, useEffect } from 'react'
import './App.css'
import EventForm from './components/EventForm';
import Events from './components/Events';
import Calendar from './components/Calendar';
import { eventsData, usersData } from './mock-backend/database';
import { Event as EventType, User as UserType } from './types';
import { Stack } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

function App() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);

  const updateEvents = (value: EventType, index?: number) => {
    setEvents((prev) => {
      if (index === undefined) {
        return [...prev, value];
      }
      else {
        return prev.map((event, i) => {
          if (i === index) {
            return value
          }
          else return event
        }) 
      }
    })
  }

  const updateUsers = (value: UserType, index?: number) => {
    setUsers((prev) => {
      if (index === undefined) {
        return [...prev, value];
      }
      else {
        return prev.map((user, i) => {
          if (i === index) {
            return value
          }
          else return user
        })
      }
    })
  }

  useEffect(() => {
    // Mock fetching database

    fetch('/')
      .then(() => eventsData)
      .then(data => setEvents(data))
      .catch(error => console.error(error));

    fetch('/')
      .then(() => usersData)
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

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
      <Stack direction='row'>
        <Calendar events={events} eventDates={events.map(event => dayjs(event.date).get('date'))}/>
        <Events
          events={events}
          users={users}
          updateEvent={updateEvents}
          updateUser={updateUsers}
        />
      </Stack>
    </>
  )
}

export default App
