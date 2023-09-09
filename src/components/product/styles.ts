import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  productItemContainer: {
    marginTop: 40,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  productItemTitle: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 18,
  },
  textContentContainer: {
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 140,
  },
  price: {
    fontSize: 30,
    fontWeight: '500',
  },
  description: {
    fontSize: 18,
  },
  renderItemProductContainer: {
    gap: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  renderItemTextContentContainer: {
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
