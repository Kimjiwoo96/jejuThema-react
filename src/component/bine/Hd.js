import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { naviObj } from '../../js/menu';
import HdStyle from '../../scss/bine/Hd.module.scss';

function Hd() {

  return (
    <header className={HdStyle.hd}>
      <div className={`${HdStyle.minibanner} text-center`}>
        <a href="https://www.jeju.go.kr/booking/index.htm" target="_blank" rel="noopener noreferrer">통합 예약</a>
      </div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='logo'>
            <img src="/img/logo.png" alt="제주테마여행" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0' />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav className={`${HdStyle.gnbs}`}>
              {
                naviObj.map((el, idx) => (
                  <Nav.Item as="li" key={idx}>
                    <Nav.Link href={el.href}>
                      {el.title}
                    </Nav.Link>
                  </Nav.Item>
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Hd;