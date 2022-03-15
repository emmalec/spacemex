import Item from "./Item";
import { CardGroup, Row } from "react-bootstrap";
import "../components/ItemList.css";

export default function ItemList({ products }) {
  return (
    <div>
      <CardGroup>
        <Row xs={2} md={4} className="g-4 mb-5">
          {products.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Row>
      </CardGroup>
    </div>
  );
}
