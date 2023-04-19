import ProductsForUpdate from "./ProductsForUpdate";
import EditProducts from "./EditProducts";
import { useState } from "react";

function UpdateProductDetails(props) {
  let [state, setState] = useState({
    products: [],
    productToEdit: null,
  });

  const onProductEdited = (newProduct) => {
    setState({ products: newProduct, productToEdit: state.productToEdit });
  };

  const onProductSelected = (id) => {
    let selectedProductData = props.data.products.filter((product) => {
      return product.id === id;
    });
    setState({ products: state.products, productToEdit: selectedProductData });
  };
  return (
    <div className="d-flex">
      <ProductsForUpdate
        data={props.data}
        onProductSelected={onProductSelected}
      />

      {state.productToEdit === null ? (
        "Select Product to Edit"
      ) : (
        <EditProducts
          productToEdit={state.productToEdit}
          onProductEdited={onProductEdited}
        />
      )}
    </div>
  );
}
export default UpdateProductDetails;
