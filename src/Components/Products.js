import Product from "./Product";
import Loader from "./Loader";
import Error from "./Error";
import { Link } from "react-router-dom";

function Products(props) {
  let { products, status } = props.data;

  return (
    <main>
      {status === "loading" && <Loader />}
      {status === "loaded" && (
        <div className="display-all">
          {products.map((product) => {
            return (
              <Link to={`/product/${product.id}`}>
                <Product key={product.key} product={product} />
              </Link>
            );
          })}
        </div>
      )}
      {status === "error" && <Error />}
    </main>
  );
}
export default Products;
