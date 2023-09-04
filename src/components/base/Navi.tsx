import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Container, Nav, NavDropdown, Form, Button} from 'react-bootstrap'
import {BsCartFill} from 'react-icons/bs'
import styled from '@emotion/styled/macro'

const Navi: React.FC = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand to="/" as={NavLink}>start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className='me-auto'>
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            <NavDropdown title="shop">
              <NavDropdown.Item to="/login" as={NavLink}>
                all products
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/about" as={NavLink}>
                Popular Items
              </NavDropdown.Item>
              <NavDropdown.Item to="/about" as={NavLink}>
                New Arrivals
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form>
            <CartButton type='submit' variant="outline-dark">
              <BsCartFill />
              <CartText>Cart</CartText>
              <CartCount>0</CartCount>
            </CartButton>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

const CartButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CartText = styled.span`
  margin-left: 5px;
`

const CartCount = styled.span`
  background-color: rgba(33, 37, 41);
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: rgb(255, 255, 255);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 50rem;
  box-sizing: border-box;
  margin-left: 0.25rem;
`

export default Navi