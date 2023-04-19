import Product from "./Product";
import Loader from "./Loader";
import Error from "./Error";

function ProductsForUpdate(props) {
  let { products, status } = props.data;

  return (
    <>
      {status === "loading" && <Loader />}
      {status === "loaded" && (
        <div className="display-all w-50">
          {products.map((product) => {
            return (
              <div onClick={() => props.onProductSelected(product.id)}>
                <Product key={product.id} product={product} />
              </div>
            );
          })}
        </div>
      )}

      {status === "error" && <Error />}
    </>
  );
}
export default ProductsForUpdate;
