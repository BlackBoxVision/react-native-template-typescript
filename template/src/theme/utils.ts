import { PixelRatio, Platform } from 'react-native';
import { FontWeights } from '../constants/fonts';

export const getFixedFont = (size: number) => size * PixelRatio.getFontScale();

export const getFontStyleForWeight = (
  fontFamily: string,
  fontWeight: string,
) => {
  if (Platform.OS === 'ios') {
    return {
      fontFamily,
      fontWeight,
    };
  }

  switch (fontWeight) {
    case FontWeights.THIN:
      return {
        fontFamily: `${fontFamily}-Thin`,
        fontWeight: undefined,
      };

    case FontWeights.EXTRA_LIGHT:
      return {
        fontFamily: `${fontFamily}-ExtraLight`,
        fontWeight: undefined,
      };

    case FontWeights.LIGHT:
      return {
        fontFamily: `${fontFamily}-Light`,
        fontWeight: undefined,
      };

    case FontWeights.MEDIUM:
      return {
        fontFamily: `${fontFamily}-Medium`,
        fontWeight: undefined,
      };

    case FontWeights.SEMI_BOLD:
      return {
        fontFamily: `${fontFamily}-SemiBold`,
        fontWeight: undefined,
      };

    case FontWeights.BOLD:
    case 'bold':
      return {
        fontFamily: `${fontFamily}-Bold`,
        fontWeight: undefined,
      };

    case FontWeights.EXTRA_BOLD:
      return {
        fontFamily: `${fontFamily}-ExtraBold`,
        fontWeight: undefined,
      };

    case FontWeights.BLACK:
      return {
        fontFamily: `${fontFamily}-Black`,
        fontWeight: undefined,
      };

    case FontWeights.REGULAR:
    case 'normal':
    default: {
      return fontFamily
        ? { fontFamily: `${fontFamily}-Regular`, fontWeight: undefined }
        : {};
    }
  }
};
