import Product from "./Product";
import Loader from "./Loader";
import Error from "./Error";

function Products(props) {
  let { products, status } = props.data;

  const onRemove = (id) => {
    props.removeProduct(id);
  };
  const onEdit = (event) => {
    props.editProducts(event.target.id);
  };
  return (
    <main>
      {status === "loading" && <Loader />}
      {status === "loaded" && (
        <div className="display-all">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                onRemove={onRemove}
                onEdit={onEdit}
              />
            );
          })}
        </div>
      )}
      {status === "error" && <Error />}
    </main>
  );
}
export default Products;
