import { DefaultTheme } from 'react-native-paper';

import { fontConfig } from './fonts';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      // replace by your own color names
      myOwnColor: string;
    }

    interface Theme {
      // replace by your own prop names
      fonts: ThemeFonts;
    }
  }
}

export const theme = {
  ...DefaultTheme,
  myOwnProperty: true, // Specify custom property
  fonts: fontConfig,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000', // Replace by primary color from your palette
    accent: '#FFF', // Replace by seconday color from your palette
    myOwnColor: '#FAFAFA',
  },
};
