import styled from '@emotion/styled/macro'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
import { useRelatedProduct } from '@/hook/useProduct'

interface Props {
  sku: string
}

const RelatedProducts: React.FC<Props> = ({ sku }) => {
  const { isLoading, data: relatedProducts } = useRelatedProduct(sku)

  return (
    <Section>
      <Container>
        <Title>Related products</Title>
        {isLoading ? (
          <LoadingWrapper>
            <Loading>loading....</Loading>
          </LoadingWrapper>
        ) : (
          <Row>
            {relatedProducts?.map(product => (
              <Col key={product.sku}>
                <ProductCard
                  sku={product.sku}
                  name={product.name}
                  salesPrice={product.salesPrice}
                  imageSrc={product.imageSrc}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Section>
  )
}

const Section = styled.section``
const Title = styled.h2``

const LoadingWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Loading = styled.div``

export default RelatedProducts
