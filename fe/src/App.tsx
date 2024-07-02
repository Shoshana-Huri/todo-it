import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import './App.css';

import Home from './components/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home></Home>
    </ThemeProvider>
  );
}

export default App;
