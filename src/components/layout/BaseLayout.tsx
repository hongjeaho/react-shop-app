import React from 'react'
import styled from '@emotion/styled/macro'
import { Outlet } from 'react-router-dom'
import Footer from '../base/Footer'
import Navi from '../base/Navi'

const Base = styled.div``
const Main = styled.main``
const Container = styled.div``

const BaseLayout: React.FC = () => {
  return (
    <Base>
      <Main>
        <Navi />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </Main>
    </Base>
  )
}

export default BaseLayout
