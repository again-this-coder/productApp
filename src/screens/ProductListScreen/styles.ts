import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: 20,
  },
  separator: {
    height: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
  },
  listContainer: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    borderRadius: 50,
    backgroundColor: 'green',
    opacity: 0.8,
    width: '100%',
  },
  buttonText: {
    alignSelf: 'center',
    paddingVertical: 8,
  },
  contentContainer: {
    paddingBottom: 60,
  },
});
