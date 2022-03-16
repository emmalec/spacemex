import React from "react";

import { Link } from "react-router-dom";

import { Card, Button, Container, Col, Row } from "react-bootstrap";

import "../components/CartOrder.css";

export default function CartOrder({ orderId }) {
  return (
    <>
      <div className="myBackground d-flex">
        <Container>
          <Row className="justify-content-md-center pt-5 mt-5">
            <Col md={6}>
              <Card className="text-center round cardOpacity">
                <Card.Body className="">
                  <Card.Title className="fs-1 pb-3">
                    Gracias por tu compra
                  </Card.Title>
                  <hr></hr>
                  <Card.Text className="fs-4 pb-3">
                    Tu orden de compra es: {orderId}
                  </Card.Text>
                  <Link to="/">
                    <Button variant="primary" className="btn-lg">
                      Volver a home
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
