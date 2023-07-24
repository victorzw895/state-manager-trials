import { useState, useEffect, useRef } from 'react'
import './App.css'
import Events from './components/Events';
// import EventForm from './components/EventForm';
// import Calendar from './components/Calendar';
import RenderCounter from './util/renderCounter';
import { eventsData, usersData } from './mock-backend/database';
import { Event as EventType, User as UserType } from './types';
import { Stack } from '@mui/material';

function App() {
  const [events, setEvents] = useState<EventType[]>([]);
  // const [highlightedDays, setHighlightedDays] = useState<number[]>([]);
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
      .then(data => {
        setEvents(data)
        // setHighlightedDays(data.map(event => dayjs(event.date).get('date')))
      })
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
       
      <RenderCounter componentName='App' />
      <Stack direction='row'>
        {/* <Calendar highlightedDays={highlightedDays} /> */}
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
