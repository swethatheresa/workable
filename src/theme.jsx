import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: { 
    background : {
      default: '#F8F8F8',
    },
    primary: {
      main: '#3AAE45',
      contrastText: '#F9F9F9',
      darker: '#419D4A',
    },
    secondary: {
      main: '#CAFFCF',
      contrastText: '#353535',
    },
  },
    typography: {
      fontFamily: 'Inter, Roboto, sans-serif',
      heading1: {
        color: '#2a2a2a',
        fontSize: '2rem',
      },
      heading2: {
        color: '#767676',
        fontSize: '1rem',
      },
      green: {
        color: '#419D4A',
      }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1.2rem',

        }
      }
    },}
});

export default theme;
