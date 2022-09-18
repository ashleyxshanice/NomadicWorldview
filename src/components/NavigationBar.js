import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from "react-bootstrap/Form"; 
import "./Navbar.css"

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container className="container-fluid">
        <Navbar.Brand href="/" className="navbar-brand">Nomaic Worldview</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-item" href="/">Home</Nav.Link>

            <NavDropdown className="nav-item" title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/aboutme">About Me</NavDropdown.Item>
              <NavDropdown.Item href="/faqs">FAQs</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="nav-item" href="/destinations">Destinations</Nav.Link>

            <NavDropdown className="nav-item" title="Types of Travel" id="basic-nav-dropdown">
              <NavDropdown.Item href="/travel/solo">Solo</NavDropdown.Item>
              <NavDropdown.Item href="/travel/couple">Couple</NavDropdown.Item>
              <NavDropdown.Item href="/travel/luxury">Luxury</NavDropdown.Item>
              <NavDropdown.Item href="/travel/budget">Budget</NavDropdown.Item>
              <NavDropdown.Item href="/travel/student">Student</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="nav-item" title="Lifestyle" id="basic-nav-dropdown">
              <NavDropdown.Item href="/lifestyle/food">Food</NavDropdown.Item>
              <NavDropdown.Item href="/lifestyle/style&fashion">Style & Fashion</NavDropdown.Item>
              <NavDropdown.Item href="/lifestyle/beauty">Beauty</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="nav-item" href="/photography">Photography</Nav.Link>

            <Nav.Link className="nav-item" href="/blog">Blog</Nav.Link>

            <NavDropdown className="nav-item" title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="/resources/travel">Travel Resources</NavDropdown.Item>
              <NavDropdown.Item href="/resources/gear">Travel Gear</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form>
            <div className="tb">
              <div className="td">
                <input type="text" placeholder="Search" required />
              </div>
              <div className="td" id="s-cover">
                <button type="submit">
                  <div id="s-circle"></div>
                  <span></span>
                </button>
              </div>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavigationBar;


/* <header>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="/">Nomaic Worldview</a>
            </div>

            <div class="navbar-links">
                <ul class="nav navbar-nav navbar-right ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active nav" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/destinations">Destinations</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/lifestyle">Lifestyle</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/blog">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/links">Links</a>
                    </li>
                </ul>
            </div>

            <div id="cover\">
                <form>
                    <div class="tb">
                        <div class="td">
                            <input type="text" placeholder="Search" required>
                        </div>
                        <div class="td" id="s-cover">
                            <button type="submit">
                                <div id="s-circle"></div>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </nav>
</header> */

