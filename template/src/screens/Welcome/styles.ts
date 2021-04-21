import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 16,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  reminder: {
    borderRadius: 4,
    height: 50,
    justifyContent: 'center',
    marginVertical: 8,
    paddingHorizontal: 16,
    width: width - 16,
  },
});
