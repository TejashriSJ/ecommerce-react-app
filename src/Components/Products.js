import Product from "./Product";
import Loader from "./Loader";
import Error from "./Error";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

function Products(props) {
  let { products, status } = props.data;

  const onRemove = (event) => {
    console.log("onremove", event.target.id);
    props.removeProduct(event.target.id);
  };
  const onEdit = (event) => {
    console.log(event.target.id);
    props.editProducts(event.target.id);
  };
  return (
    <main>
      {status === "loading" && <Loader />}
      {status === "loaded" && (
        <div className="display-all">
          {products.map((product) => {
            return (
              // <Link to={`/product/${product.id}`}>
              <Product
                key={product.id}
                product={product}
                onRemove={onRemove}
                onEdit={onEdit}
              />
              //</Link>
            );
          })}
        </div>
      )}
      {status === "error" && <Error />}
    </main>
  );
}
export default Products;
