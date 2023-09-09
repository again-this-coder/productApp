import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, FC } from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../Screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../features/product';
import Product from '../../components/product/Product';
import RenderItemProduct from '../../components/product/RenderItemProduct';

type Product = {
  item: {
    image: string;
    title: string;
    price: number;
    id: number;
  };
};

const ProductListScreen: FC = () => {
  const productList = useSelector((state: any) => state.products);

  const { navigate } = useNavigation<any>();
  const dispatch = useDispatch();

  const storeData = async (value: Product) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('products', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const handleNavigateToAddProduct = () => {
    navigate(Screens.ADD_PRODUCT_SCREEN);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('products');

        const parsedValue = value != null ? JSON.parse(value) : null;

        if (!parsedValue) {
          fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then(async (json) => {
              await storeData(json);
              dispatch(setProducts(parsedValue));
            });
        } else {
          dispatch(setProducts(parsedValue));
        }
      } catch (e) {
        console.log(e);
      }
    };
    if (!productList || !productList.length) {
      getData();
    }
  }, [productList]);

  const renderItem = ({ item: product }: Product) => {
    return <RenderItemProduct product={product} />;
  };

  const separator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <TouchableOpacity
        onPress={handleNavigateToAddProduct}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.listContainer}
        contentContainerStyle={styles.contentContainer}
        data={productList}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
};

export default ProductListScreen;
