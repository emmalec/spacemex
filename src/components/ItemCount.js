import React, { useState } from "react";

import { Button, Row, Col } from "react-bootstrap";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  function clickAdd() {
    return count < stock && setCount(count + 1);
  }

  function clickSubstract() {
    return count > initial && setCount(count - 1);
  }

  return (
    <>
      <Row>
        <Col md={10}>
          <div className="d-flex justify-content-between align-items-center mx-4 my-4 bg-light border">
            <Button onClick={clickSubstract}>-</Button>
            <span className="m-0 fs-5 fw-normal align-baseline">{count}</span>
            <Button disabled={count < stock ? false : true} onClick={clickAdd}>
              +
            </Button>
          </div>
          <div className="d-flex justify-content-center py-2">
            <Button
              disabled={count < stock + 1 ? false : true}
              variant="primary"
              size="lg"
              onClick={() => onAdd(count)}
            >
              Agregar al carrito
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}
