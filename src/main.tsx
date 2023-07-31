import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import PropDrillApp from './base-prop-drilling-app/App.tsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient(
  // {
  //   defaultOptions: {
  //     queries: {
  //       queryFn: defaultQueryFn,
  //     },
  //   },
  // }
);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      {/* <CssBaseline /> */}
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
