import styled from '@emotion/styled/macro'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
interface Props {
  sku:string
  name:string
  salesPrice:number
  imageSrc:string
}

const ProductCard: React.FC<Props> = ({ sku, imageSrc, name, salesPrice }) => {
  return (
    <Base>
      <Card to={`/detail/${sku}`} as={NavLink}>
        <Image className="card-img-top" src={imageSrc} alt="..." />
        <Card.Body>
          <Center>
            <Name>{name}</Name>
            {salesPrice.toLocaleString()}원
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
    </Base>
  )
}

const Base = styled.div`
  padding: 0;
  margin: 0;
  &  a {
    text-decoration: none;
  }
`

const Image = styled.img``

const Center = styled.div`
  text-align: center;
`
const Name = styled.h5`
  font-weight: bolder;
`
const OptionLink = styled(Link)``

export default ProductCard
