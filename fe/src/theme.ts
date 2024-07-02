import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#dab49d',
    },
    secondary: {
      main: '#895737',
    },
    background: {
      default: '#fdfcfb',
    },
    text: {
      primary: '#1a1a1a',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
