import React, { FC, ReactNode } from 'react';
import { Text, ViewStyle, StyleProp } from 'react-native';
import { useTheme } from 'react-native-paper';

interface TypographyProps {
  children: ReactNode;
  type?: string;
  variant?: string;
  color?: string;
  style?: StyleProp<ViewStyle> | any;
}

const Typography: FC<TypographyProps> = ({
  type,
  variant,
  color,
  style,
  ...rest
}) => {
  const { fonts, colors }: any = useTheme();

  let styles = style;

  if (!!type && !!variant && !!color && fonts[type] && fonts[type][variant]) {
    if (Array.isArray(styles)) {
      styles = [
        ...styles,
        {
          ...fonts[type][variant],
          color: colors[color],
          ...style,
        },
      ];
    } else {
      styles = {
        ...fonts[type][variant],
        color: colors[color],
        ...style,
      };
    }
  }

  return <Text {...rest} style={styles} />;
};

Typography.defaultProps = {
  type: 'c2',
  variant: 'regular',
  color: 'text',
};

Typography.displayName = 'Typography';

export default Typography;
