import { useState, useEffect, useRef } from 'react'
import './App.css'
import Events from './components/Events';
// import EventForm from './components/EventForm';
// import Calendar from './components/Calendar';
import RenderCounter from './util/renderCounter';
import { Event as EventType, User as UserType } from './types';
import { Stack } from '@mui/material';
import { getEvents } from './api/events';
import { EventsApi } from './state-management/tanstack-query/useQuery';
import { create } from '@mui/material/styles/createTransitions';

function App() {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = useState<Error>();
  // const [events, setEvents] = useState<EventType[]>([]);

  // useEffect(() => {
  //     void (async () => {
  //         // try {
  //             // setIsLoading(true);
  //             const data = await getEvents();
  //             setEvents(data);
  //         // } catch (error) {
  //         //     setError(error as Error)
  //         // }
  //         // setIsLoading(false);
  //     })()
  // }, []);
  // const [highlightedDays, setHighlightedDays] = useState<number[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);

  const { events, createEvent, putEvent } = EventsApi()

  const handleEventUpdate = (value: EventType) => {
    // update/create Event
    // update database
    // const requestOptions = {
    //     method: 'POST',
    //     body: JSON.stringify(event)
    // };
    // const response = await fetch('http://localhost:3001/events', requestOptions);
    // const data = await response.json() as EventType;

    console.log('handleEventUpdate value', value)
    putEvent(value)
    // setEvents((prev) => {
    //   if (id === undefined) {
    //     return [...prev, data];
    //   }
    //   else {
    //     return prev.map((event) => {
    //       if (event.id === id) {
    //         return data
    //       }
    //       else return event
    //     }) 
    //   }
    // })
  }

  const handleUpdateUsers = (value: UserType, id?: string) => {
    setUsers((prev) => {
      if (id === undefined) {
        return [...prev, value];
      }
      else {
        return prev.map((user) => {
          if (user.id === id) {
            return value
          }
          else return user
        })
      }
    })
  }

  // const { data: events } = GetEvents();
  // const { isLoading, data: events, error } = GetEvents();

  
  // const { events, isLoading, error } = GetEvents()
  
  // if (isLoading) {
  //   return <span>Loading...</span>
  // }

  // if (error) {
  //   return <span>Error {error.message}</span>
  // }

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
          handleEventUpdate={handleEventUpdate}
          handleUpdateUser={handleUpdateUsers}
        />
      </Stack>
    </>
  )
}

export default App
