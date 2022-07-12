export type MyTheme = {
  colors: {
    background: string;
    shape: string;
    primary: string;
    text: string;
    textDark: string;
    textLight: string;
  };
};

export const lightTheme = {
  colors: {
    background: '#FFFFFF',
    shape: '#F1F3F6',
    primary: '#FFAC30',
    text: '#3A4276',
    textDark: '#1B1D28',
    textLight: '#7B7F9E',
  },
  fonts: {},
};

export const darkTheme = {
  colors: {
    background: '#171822',
    shape: '#212330',
    primary: '#FFAC30',
    text: '#7B7F9E',
    textDark: '#FFFFFF',
    textLight: '#7B7F9E',
  },
  fonts: {},
};
