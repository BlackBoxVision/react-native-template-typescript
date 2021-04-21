import { createRef } from 'react';
import { CommonActions } from '@react-navigation/native';

export const navigationRef: any = createRef();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function replace(name: string, params?: any) {
  navigationRef.current?.replace(name, params);
}

export function reset(name: string, params?: any) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name,
          params,
        },
      ],
    }),
  );
}
