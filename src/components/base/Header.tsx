import React from 'react'
import styled from '@emotion/styled/macro'
import { Container } from 'react-bootstrap'

interface Props {
  title: string
  description: string
}

const Header: React.FC<Props> = ({ title, description }) => {
  return (
    <Base>
      <Container className="px-4 my-5">
        <Center>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Center>
      </Container>
    </Base>
  )
}

const Base = styled.header`
  opacity: 1;
  background-color: rgba(33, 37, 41, 1);
  padding-top: 3rem;
  padding-bottom: 3rem;
`
const Center = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 1);
`

const Title = styled.span`
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
  font-weight: bolder;
`

const Description = styled.p`
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0;
  font-weight: 300;
  font-size: 1.25rem;
`

export default Header
