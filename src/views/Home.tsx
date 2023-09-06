import styled from '@emotion/styled/macro'
import React from 'react'
import Header from '@/components/base/Header'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '@/components/product/ProductCard'

const Home: React.FC = () => {
  return (
    <Base>
      <Header title="Shop in style" description="With this shop hompeage template" />
      <Section>
        <Container>
          <Row>
            <Col>
              <ProductCard
                name={'TEST PRODUCT NAME'}
                price={100000}
                imageSrc={'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'}
              />
            </Col>
          </Row>
        </Container>
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
