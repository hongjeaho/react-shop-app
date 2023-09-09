import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface Product {
  sku: string
  name: string
  price: number
  imageSrc: string
}

const getProductList = async () => {
  return await axios.get('/api/mock/product.json')
}

const getRelatedProduct = async (sku: string) => {
  console.log(sku)
  return await axios.get('/api/mock/relatedProduct.json')
}

export const useProductList = (): UseQueryResult<Product[]> => {
  return useQuery({
    queryKey: ['productList'],
    queryFn: async () => await getProductList(),
    select: data => {
      return data?.data ?? []
    },
    refetchOnWindowFocus: false,
  })
}

export const useRelatedProduct = (sku: string): UseQueryResult<Product[]> => {
  return useQuery({
    queryKey: ['relatedProducts', sku],
    queryFn: async () => await getRelatedProduct(sku),
    select: data => {
      return data?.data ?? []
    },
    refetchOnWindowFocus: false,
  })
}
