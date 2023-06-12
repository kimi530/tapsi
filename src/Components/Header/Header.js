import React from 'react'
import { Nav , Navbar , Container , Button } from 'react-bootstrap'

import './Header.css'

const Header = () => {
    return (
        <Navbar sticky="top"  bg="light" expand="md">
        <Container>
          <Navbar.Toggle  aria-controls="navbarScroll" />
          <Navbar.Collapse className="collapse" id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '300px' }}
            >
              <Button className="navbar-btn tapsi-btn d-lg-block d-xl-block d-sm-none">دانلود تپسی</Button>
              <Nav.Link className="navbar-link" href="#action1">وبلاگ</Nav.Link>
              <Nav.Link className="navbar-link" href="#action2">فرصت‌های شغلی</Nav.Link>
              <Nav.Link className="navbar-link" href="#action1">تپسی‌پک</Nav.Link>
              <Nav.Link className="navbar-link" href="#action2">امور سهام</Nav.Link>
              <Nav.Link className="navbar-link" href="#" >پشتیبانی</Nav.Link>
              <Nav.Link className="navbar-link" href="#action2">ویدیوها</Nav.Link>
            </Nav>   
          </Navbar.Collapse>
          <Navbar.Brand href="#"> تپسی</Navbar.Brand>
        </Container> 
      </Navbar>
    )
}

export default Header
