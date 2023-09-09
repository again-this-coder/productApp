import { ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useRoute } from '@react-navigation/native';
import Product from '../../components/product/Product';
import { useSelector } from 'react-redux';

const ProductDetailsScreen = () => {
  const route = useRoute();

  const productId = route?.params?.id;

  const product = useSelector((state: any) => state.products[productId - 1]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Product
        product={product}
        showDetails
        customImageSize={styles.largeImage}
      />
    </ScrollView>
  );
};

export default ProductDetailsScreen;
