import { View, FlatList } from 'react-native'
import React from 'react'
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { Text } from '@react-navigation/elements';

export default function MyCart() {

  const cart = useSelector((state: RootState) => state.product.cart);

  if (cart.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Your cart is empty</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, padding: 4 }}>
      <FlatList
        numColumns={2}
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard info={item} />
        )}
      />
    </View>
  )
}