import React from "react";

import { Container, Row, Col, Spinner } from "react-bootstrap";

export default function Loading({ message }) {
  return (
    <>
      <Container>
        <Col className="mt-5">
          <Row className="d-flex justify-content-center mt-5 pt-5">
            <Spinner
              animation="border"
              role="status"
              size="lg"
              variant="primary"
            ></Spinner>
            <h3 className="text-center text-muted mt-4">{message}</h3>
          </Row>
        </Col>
      </Container>
    </>
  );
}
