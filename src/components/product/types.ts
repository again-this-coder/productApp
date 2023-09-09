import { ImageStyle, StyleProp } from 'react-native/types';

export type ProductType = {
  product: {
    image: string;
    title: string;
    price: number;
    id: number;
    description?: string;
  };
  showDetails?: boolean;
  customImageSize?: StyleProp<ImageStyle>;
};
