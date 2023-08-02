import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CounterContextProvider } from './util/CounterContext.tsx'
// import CssBaseline from '@mui/material/CssBaseline';

// import PropDrillApp from './base-prop-drilling-app/App.tsx'
// import App from './App.tsx';

import ServerStateProvider from './state-management/tanstack-query/Provider.tsx';

import ClientStateProvider from './react-context/Provider.tsx';
import App from './react-context/App.tsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      {/* <CounterContextProvider> */}
        {/* <CssBaseline /> */}
        <ServerStateProvider>
          <ClientStateProvider>
            <App />
          </ClientStateProvider>
        </ServerStateProvider>
      {/* </CounterContextProvider> */}
    </ThemeProvider>
  </React.StrictMode>,
)
