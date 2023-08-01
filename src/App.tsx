import { useEffect, useState } from 'react';
import Events from './components/Events';
import Contacts from './components/Contacts';
// import Calendar from './components/Calendar';
import AppComponent from './components/common/AppComponent';
import Login from './components/Login';
import { Stack } from '@mui/material';


function App() {
  // const [highlightedDays, setHighlightedDays] = useState<number[]>([]);
  const [loggedUserId, setLoggedUserId] = useState<string | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setLoggedUserId(userId);
  }, [])

  return (
    <AppComponent>
      {
        loggedUserId ?
          <Stack direction='row'>
              {/* <Calendar highlightedDays={highlightedDays} /> */}
              <Contacts />
              <Events />
          </Stack>
            :
          <Login setLoggedUserId={setLoggedUserId} />
      }
    </AppComponent>
  )
}

export default App
