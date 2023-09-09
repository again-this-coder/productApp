import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 20,
  },
  input: {
    marginTop: 4,
    padding: 8,
    borderWidth: 1,
    width: Dimensions.get('screen').width - 40,
    borderRadius: 8,
  },
  descriptionContainer: {
    height: 140,
  },
  colorRed: {
    color: 'red',
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: '500',
  },
});
