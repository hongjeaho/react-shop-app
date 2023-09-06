import styled from '@emotion/styled/macro'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface Props {
  imageSrc: string
  name: string
  price: number
}

const ProductCard: React.FC<Props> = ({ imageSrc, name, price }) => {
  return (
    <Card>
      <Image className="card-img-top" src={imageSrc} alt="..." />
      <Card.Body>
        <Center>
          <Name>{name}</Name>
          {price.toLocaleString()}원
        </Center>
      </Card.Body>
      <Card.Footer className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <Center>
          <OptionLink className="btn btn-outline-dark mt-auto" to="/">
            View options
          </OptionLink>
        </Center>
      </Card.Footer>
    </Card>
  )
}

const Image = styled.img``

const Center = styled.div`
  text-align: center;
`
const Name = styled.h5`
  font-weight: bolder;
`
const OptionLink = styled(Link)``

export default ProductCard
