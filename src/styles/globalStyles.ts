import { Components, Theme } from '@mui/material';

import d from '../assets/fonts/CosiArm.ttf';

export const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: {
    '@font-face': {
      fontFamily: 'CosiArm',
      // src: 'url(./assets/fonts/armallegro.ttf) format("truetype")',
      src: `url(${d}) format("truetype")`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    body: {
      fontFamily: 'CosiArm, ArmAllegro',
    },
    '&::-webkit-scrollbar': {
      width: '5px',
      height: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#d5d5d5',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0px 0px 2px rgba(200, 200, 200, 1)',
    },
    '&::-webkit-scrollbar-track-piece': {
      backgroundColor: '#e5e5e5',
    },
    a: {
      textDecoration: 'none',
      color: 'initial',
    },
  },
};
