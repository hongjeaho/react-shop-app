import React from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled/macro'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { userProductDetail } from '@/hook/useProduct'
import RelatedProducts from '@/components/product/RelatedProducts'

interface Params {
  sku: string
}

const Detail: React.FC = () => {
  const { sku } = useParams() as Readonly<Params>
  const { isLoading, data: detail } = userProductDetail(sku)

  return (
    <Base>
      <Section>
        <Container>
          {isLoading && <div>Loading.....</div>}
          <Row className="align-items-center">
            <Col>
              <Image src={'https://dummyimage.com/600x700/dee2e6/6c757d.jpg'} rounded />
            </Col>
            <Col>
              <SKU>SKU : {detail?.sku} </SKU>
              <Name>{detail?.name}</Name>
              <PriceWrapper>
                {detail?.originPrice !== detail?.salesPrice && (
                  <OriginPrice>{detail?.originPrice?.toLocaleString()}원</OriginPrice>
                )}
                <SalesPrice>{detail?.salesPrice?.toLocaleString()}원</SalesPrice>
              </PriceWrapper>
              <Description>{detail?.description}</Description>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <RelatedProducts sku={sku} />
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

const SKU = styled.div`
  margin-bottom: 0.25rem;
  font-size: 0.875em;
`
const Name = styled.div`
  line-height: 1.2;
  font-size: calc(1.425rem + 2.1vw);
`

const PriceWrapper = styled.div`
  font-size: 1.25rem;
  margin-bottom: 3rem;

  span + span {
    margin-left: 5px;
  }
`
const OriginPrice = styled.span`
  text-decoration: line-through;
`
const SalesPrice = styled.span``

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 300;
`

export default Detail
