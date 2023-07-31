import './App.css'
import Events from './components/Events';
// import Calendar from './components/Calendar';
import RenderCounter from './util/renderCounter';
import { Event, User } from './types';
import { Stack } from '@mui/material';

import { useUsers } from './state-management/tanstack-query/useUsers';

function App() {
  // const [highlightedDays, setHighlightedDays] = useState<number[]>([]);
  // const { users, putUser: setUsers } = useUsers();

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
        <Events />
      </Stack>
    </>
  )
}

export default App
