import Item from "./Item";
import { CardGroup, Row, Col } from "react-bootstrap";

export default function ItemList({ products }) {
  // return <div>{products.map((item) => console.log(item))}</div>;
  return (
    <div>
      <CardGroup>
        <Row xs={2} md={4} className="g-4">
          {products.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Row>
      </CardGroup>
    </div>
  );
}
