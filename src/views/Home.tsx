import styled from '@emotion/styled/macro'
import React from 'react'
import Header from '@/components/base/Header'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '@/components/product/ProductCard'
import { useProductList } from '@/hook/useProduct'

const Home: React.FC = () => {
  const { isLoading, data: ProductList } = useProductList()

  return (
    <Base>
      <Header title="Shop in style" description="With this shop hompeage template" />
      <Section>
        {isLoading ? (
          <>Loadding.......</>
        ) : (
          <Container>
            <Row xs={2} sm={2} md={3} lg={4}>
              {ProductList?.map(product => (
                <Col key={product.sku} className="mb-5">
                  <ProductCard
                    sku={product.sku}
                    name={product.name}
                    salesPrice={product.salesPrice}
                    imageSrc={product.imageSrc}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </Section>
    </Base>
  )
}

const Base = styled.div`
  margin-top: 10px;
`

const Section = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
`

export default Home
