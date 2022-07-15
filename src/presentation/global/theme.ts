export type MyTheme = {
  colors: {
    background: string;
    shape: string;
    primary: string;
    text: string;
    textDark: string;
    textLight: string;
    green: string;
    red: string;
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
    green: '#2CB751',
    red: '#FF4840',
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
    green: '#2CB751',
    red: '#FF4840',
  },
  fonts: {},
};
