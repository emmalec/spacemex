import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <div>
      {products.map(function (product) {
        return <Item key={product.id} item={product} />;
      })}
    </div>
  );
}
