import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { AddProductForm } from '../../components/AddProductForm/AddProductForm';

const AddProductScreen = () => {
  return (
    <View style={styles.container}>
      <AddProductForm />
    </View>
  );
};

export default AddProductScreen;
