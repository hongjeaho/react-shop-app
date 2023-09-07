import { type UseQueryResult, useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Product {
  sku:string
  name:string
  price:number
  imageSrc:string
}

const getProductList = async ()  => {
  return (await axios.get('/api/mock/product.json'))
}

export const useProductList = () : UseQueryResult<Product[]>  => {
  return useQuery({
    queryKey: ['productList'],
    queryFn: async () => await getProductList(),
    select: (data) => {
      return data?.data ?? []
    },
    refetchOnWindowFocus:false
  })
}