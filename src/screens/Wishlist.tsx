import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

export default function Wishlist() {
  const wishlist = useSelector((state: RootState) => state.product.wishlist);

  if (wishlist.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Your wishlist is empty</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, padding: 4 }}>
      <FlatList
        numColumns={2}
        data={wishlist}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard info={item} />
        )}
      />
    </View>
  )
}