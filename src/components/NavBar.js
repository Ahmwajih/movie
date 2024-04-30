import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, Form, Col, Row, Button } from "react-bootstrap";
import "./styleCompo.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { currentUser, logOut } = useAuth();

  return (
    <>
      <Navbar bg="dark" variant="dark" className="navi">
        <Container className="d-flex">
          <Link to="/" className="text-danger fs-4 d-flex flex-start text-decoration-none">
            Movie App
          </Link>
          <Nav className="ml-auto">
            <Form className="mr-3">
              <Row className="align-items-center">
                <Col xs="auto">
                  <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                </Col>
                <Col xs="auto">
                  <Button className="btn-dark btn-outline-success" type="submit">
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
            {currentUser ? (
              <>
                <div className="text-warning mx-4 fs-5 pt-1">{currentUser.displayName}</div>
                <Link to="/login"  variant="dark" onClick={logOut} className="btn btn-dark btn-outline-secondary text-light fw-bold">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-dark btn-outline-secondary text-light fw-bold">
                  Login
                </Link>
                <Link to="/register" className="btn btn-dark btn-outline-secondary text-light fw-bold">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
