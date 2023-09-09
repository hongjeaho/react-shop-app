import RelatedProducts from '@/components/product/RelatedProducts'
import React from 'react'
import { useParams } from 'react-router-dom'

interface Params {
  id: string
}

const Detail: React.FC = () => {
  const { id } = useParams() as Readonly<Params>

  return (
    <>
      <RelatedProducts sku={id} /> {id}
    </>
  )
}

export default Detail
