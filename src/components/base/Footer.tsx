import styled from '@emotion/styled/macro'
import React from 'react'
import { Container } from 'react-bootstrap'

const Footter: React.FC = () => {
  return (
    <Footer className="py-5 bg-dark">
      <Container>
        <Copyright className="text-center text-white">Copyright &copy; Your Website 2023</Copyright>
      </Container>
    </Footer>
  )
}

const Footer = styled.footer`
  margin-top: 10px;
`

const Copyright = styled.p``

export default Footter
