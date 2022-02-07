import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export default function Item({ item }) {
  <div>
    <Row xs={2} md={4} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={""} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="text-secondary">{item.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>;
}
