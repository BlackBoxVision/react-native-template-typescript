import React, { FC, ReactNode } from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

interface TouchableProps {
  children: ReactNode;
  opacity?: boolean;
  delayPressIn?: number;
}

const Touchable: FC<TouchableProps> = ({
  children,
  opacity,
  delayPressIn,
  ...props
}) =>
  Platform.OS === 'ios' || !!opacity ? (
    <TouchableOpacity {...props} delayPressIn={delayPressIn}>
      {children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback {...props} delayPressIn={delayPressIn}>
      {children}
    </TouchableNativeFeedback>
  );

Touchable.defaultProps = {
  opacity: false,
  delayPressIn: 0,
};

Touchable.displayName = 'Touchable';

export default Touchable;
