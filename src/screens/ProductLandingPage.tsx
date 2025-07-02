import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useProducts } from '../service/Products';
import ProductCard from '../components/ProductCard';

export default function ProductLandingPage() {
  const { data, isLoading, isError, hasNextPage, isFetchingNextPage, fetchNextPage } = useProducts();

  if (isLoading) return <ActivityIndicator />;
  if (isError) return <Text>Error loading products.</Text>;

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const products = data?.pages.flatMap(page => page.products) || [];

  return (
    <View style={{ flex: 1, padding: 4 }}>
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard info={item} />
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator /> : null
        }
      />
    </View>
  );
}
