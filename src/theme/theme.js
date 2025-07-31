import { createTheme } from '@mui/material/styles';

const primaryMain = '#1A2F5B'; // Deep blue from "Sumonija" part of logo
const secondaryMain = '#A8DADC'; // Teal/light blue from "Creative" part of logo

const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
      light: '#3C5287', // Lighter shade of primary
      dark: '#0E1D3C',  // Darker shade of primary
      contrastText: '#ffffff', // White text for contrast on primary
    },
    secondary: {
      main: secondaryMain,
      light: '#BCE8E8', // Lighter shade of secondary
      dark: '#85B6B8',  // Darker shade of secondary
      contrastText: '#000000', // Black text for contrast on secondary
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', 'sans-serif'].join(','), // Example font stack
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: primaryMain,
    },
    // Add other typography variants as needed
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
        containedPrimary: {
          background: `linear-gradient(45deg, ${primaryMain} 30%, ${secondaryMain} 90%)`,
          color: '#ffffff',
          '&:hover': {
            background: `linear-gradient(45deg, ${secondaryMain} 30%, ${primaryMain} 90%)`,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: primaryMain,
        },
      },
    },
    // Add customizations for other components as needed
  },
});

export default theme;