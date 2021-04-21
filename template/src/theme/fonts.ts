import { FontWeights } from '../constants/fonts';
import { getFontStyleForWeight, getFixedFont } from './utils';

// Replace by your font family
const FONT_FAMILY = 'Arial';

/** Replace by your custom "types" and "variants"
 * E.g.:
 *
 *  type -> h1
 *  variant -> regular
 *
 * */
export const fontConfig = {
  h1: {
    regular: {
      ...getFontStyleForWeight(FONT_FAMILY, FontWeights.MEDIUM),
      fontStyle: 'normal',
      fontSize: getFixedFont(32),
      lineHeight: getFixedFont(32),
    },
  },
  h3: {
    medium: {
      ...getFontStyleForWeight(FONT_FAMILY, FontWeights.MEDIUM),
      fontStyle: 'normal',
      fontSize: getFixedFont(20),
      lineHeight: getFixedFont(24),
    },
  },
  h4: {
    medium: {
      ...getFontStyleForWeight(FONT_FAMILY, FontWeights.MEDIUM),
      fontStyle: 'normal',
      fontSize: getFixedFont(18),
      lineHeight: getFixedFont(22),
    },
  },
  c1: {
    medium: {
      ...getFontStyleForWeight(FONT_FAMILY, FontWeights.MEDIUM),
      fontStyle: 'normal',
      fontSize: getFixedFont(16),
      lineHeight: getFixedFont(18),
    },
  },
  c2: {
    regular: {
      ...getFontStyleForWeight(FONT_FAMILY, 'normal'),
      fontStyle: 'normal',
      fontSize: getFixedFont(14),
      lineHeight: getFixedFont(16),
    },
    medium: {
      ...getFontStyleForWeight(FONT_FAMILY, FontWeights.MEDIUM),
      fontStyle: 'normal',
      fontSize: getFixedFont(14),
      lineHeight: getFixedFont(16),
    },
  },
  label: {
    regular: {
      ...getFontStyleForWeight(FONT_FAMILY, FontWeights.MEDIUM),
      fontStyle: 'normal',
      fontSize: getFixedFont(12),
      lineHeight: getFixedFont(12),
    },
    medium: {
      ...getFontStyleForWeight(FONT_FAMILY, FontWeights.MEDIUM),
      fontStyle: 'normal',
      fontSize: getFixedFont(14),
      lineHeight: getFixedFont(14),
    },
  },
};
