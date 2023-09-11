import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import axios, { type AxiosResponse } from 'axios'

export interface Product {
  sku: string
  name: string
  originPrice: number
  salesPrice: number
  imageSrc: string
  description: string
}

const getProductList = async () => {
  return await axios.get('/api/mock/product.json')
}

const getRelatedProduct = async (sku: string) => {
  console.log(`sku >>>> ${sku}`)
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

export const userProductDetail = (sku: string): UseQueryResult<Product | undefined> => {
  return useQuery({
    queryKey: ['productDetail', sku],
    queryFn: async () => await getProductList(),
    select: (data: AxiosResponse<Product[]>) => {
      return data.data?.find(product => product.sku === sku)
    },
  })
}

export const useRelatedProduct = (sku: string): UseQueryResult<Product[] | undefined> => {
  return useQuery({
    queryKey: ['relatedProduct', sku],
    queryFn: async () => await getRelatedProduct(sku),
    select: (data: AxiosResponse<Product[]>) => {
      return data?.data ?? []
    },
  })
}
