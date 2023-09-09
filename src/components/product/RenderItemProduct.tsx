import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { FC, memo } from 'react';
import { styles } from './styles';
import { ProductType } from './types';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../screens/Screens';

const RenderItemProduct: FC<ProductType> = memo(({ product }) => {
  const { navigate } = useNavigation<any>();

  const handleShowProductDetails = (id: number) => {
    navigate(Screens.PRODUCT_DETAILS_SCREEN, {
      id: id,
    });
  };
  return (
    <TouchableOpacity
      onPress={() => handleShowProductDetails(product.id)}
      style={styles.renderItemProductContainer}
    >
      <Image
        style={styles.image}
        source={
          product.image
            ? {
                uri: product.image,
              }
            : require('../../../assets/orangeCat.jpeg')
        }
      />
      <View style={styles.renderItemTextContentContainer}>
        <Text style={styles.productItemTitle}>{product?.title}</Text>
        <Text style={styles.price}>${product?.price}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default RenderItemProduct;
