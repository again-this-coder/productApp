import React from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { styles } from './styles';

import productValidationSchema from './validation';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, ProductTypes } from '../../features/product';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../screens/Screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AddProductForm = () => {
  const productList = useSelector((state: any) => state.products);
  const newProductNextId = useSelector(
    (state: any) => state.products.length + 1
  );
  const dispatch = useDispatch();
  const { navigate } = useNavigation<any>();

  const storeData = async (value: ProductTypes[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('products', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={{ title: '', price: null, description: '' }}
      validationSchema={productValidationSchema}
      onSubmit={(values) => {
        const newProduct = { ...values, id: newProductNextId };
        dispatch(addProduct(newProduct));
        storeData([...productList, newProduct]);
        navigate(Screens.PRODUCT_LIST_SCREEN);
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <ScrollView contentContainerStyle={styles.container}>
          <View>
            <Text style={styles.inputLabel}>Add Product Name</Text>
            <TextInput
              onChangeText={handleChange('title')}
              style={styles.input}
              value={values.title}
              placeholder="Name"
            />
            {touched.title && errors.title && (
              <Text style={styles.colorRed}>* {errors.title}</Text>
            )}
          </View>
          <View>
            <Text style={styles.inputLabel}>Add Product Price</Text>
            <TextInput
              onChangeText={handleChange('price')}
              style={styles.input}
              keyboardType="numeric"
              placeholder="Price"
            />
            {touched.price && errors.price && (
              <Text style={styles.colorRed}>* {errors.price}</Text>
            )}
          </View>
          <View>
            <Text style={styles.inputLabel}>Add Product Description</Text>

            <TextInput
              onChangeText={handleChange('description')}
              style={[styles.input, styles.descriptionContainer]}
              multiline
              numberOfLines={8}
              value={values.description}
              placeholder="Description"
            />
            {touched.description && errors.description && (
              <Text style={styles.colorRed}>* {errors.description}</Text>
            )}
          </View>

          <Button onPress={handleSubmit} title="Add Product" />
        </ScrollView>
      )}
    </Formik>
  );
};
