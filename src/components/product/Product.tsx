import { View, Text, Image } from 'react-native';
import React, { memo } from 'react';
import { styles } from './styles';
import { FC } from 'react';
import { ProductType } from './types';

const Product: FC<ProductType> = memo(
  ({ product, showDetails, customImageSize }) => {
    return (
      <View style={styles.productItemContainer}>
        <Image
          style={[styles.image, customImageSize]}
          source={
            product.image
              ? {
                  uri: product.image,
                }
              : require('../../../assets/orangeCat.jpeg')
          }
        />
        <View style={styles.textContentContainer}>
          <Text style={styles.productItemTitle}>{product?.title}</Text>
          <Text style={styles.price}>${product?.price}</Text>
        </View>
        {showDetails && (
          <Text style={styles.description}>{product?.description}</Text>
        )}
      </View>
    );
  }
);

export default Product;
