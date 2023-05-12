import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3AAE45',
      contrastText: '#F9F9F9',
    },
    secondary: {
      main: '#CAFFCF',
      contrastText: '#353535',
    },
  },
    typography: {
      fontFamily: 'Inter, Roboto, sans-serif',
      heading1: {
        color: '#353535',
      },
      heading2: {
        color: '#767676',
      },
  },
});

export default theme;
