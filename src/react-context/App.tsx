import { useEffect, useState } from 'react';
import Events from './components/Events';
import Contacts from './components/Contacts';
import Login from './components/Login';
import { Stack } from '@mui/material';
import AppComponent from '../components/common/AppComponent';
import { useContextDispatch } from './useDispatch';


function App() {
  const { loggedUserId, setLoggedUserId } = useContextDispatch();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setLoggedUserId(userId);
  }, [])

  return (
    <AppComponent>
      {
        loggedUserId ?
          <Stack direction='row'>
              <Contacts />
              <Events />
          </Stack>
            :
          // 👀 ✅ Remove PROP DRILLING here - `setLoggedUserId={setLoggedUserId}`
          <Login />
      }
    </AppComponent>
  )
}

export default App
