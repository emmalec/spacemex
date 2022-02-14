import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/Item.css";

export default function Item({ item }) {
  return (
    <Link to={`/producto/${item.id}`}>
      <div>
        <Card bg="light box-shadow">
          <Card.Img variant="top" src={item.pictureUrl} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              ARS {item.price}
            </Card.Subtitle>
            {/* <Card.Text className="text-secondary">{item.description}</Card.Text> */}
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
}
