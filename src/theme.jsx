import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background : {
      default: '#F8F8F8',
    },
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
        fontSize: '2rem',
      },
      heading2: {
        color: '#767676',
        fontSize: '1rem',
      },
  },
});

export default theme;
