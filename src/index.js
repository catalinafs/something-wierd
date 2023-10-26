import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App';
import './index.css';

const theme = createTheme({
  type: 'light',
  palette: {
    primary: {
      main: '#1599d7'
    },
    secondary: {
      main: '#212121'
    },
    naranjita: '#f48221',
    blanquito: '#ffffff',
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </>
);