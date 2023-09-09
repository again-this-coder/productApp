import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddProductScreen from './screens/addProductScreen/AddProductScreen';
import { Screens } from './screens/Screens';
import ProductListScreen from './screens/ProductListScreen/ProductListScreen';
import ProductDetailsScreen from './screens/productDetailsScreen/ProductDetailsScreen';

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.PRODUCT_LIST_SCREEN}
          component={ProductListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Screens.PRODUCT_DETAILS_SCREEN}
          component={ProductDetailsScreen}
        />
        <Stack.Screen
          name={Screens.ADD_PRODUCT_SCREEN}
          component={AddProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
