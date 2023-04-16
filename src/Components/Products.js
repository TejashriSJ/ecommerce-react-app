import Product from "./Product";

function Products(props) {
  return (
    <div className="display-all">
      {props.products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
}
export default Products;
