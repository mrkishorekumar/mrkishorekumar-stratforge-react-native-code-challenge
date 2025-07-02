import { useInfiniteQuery, UseInfiniteQueryResult, InfiniteData, QueryFunctionContext } from "@tanstack/react-query";
import { Root } from "../interface/Api";

const LIMIT = 10;

async function fetchProducts({ pageParam = 0 }: QueryFunctionContext): Promise<Root> {
  const res = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${pageParam}`);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}

export const useProducts = (): UseInfiniteQueryResult<InfiniteData<Root>, Error> => {
  return useInfiniteQuery<Root, Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.products.length;
      return nextSkip >= lastPage.total ? undefined : nextSkip;
    },
  });
};
