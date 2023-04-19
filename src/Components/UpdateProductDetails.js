import ProductsForUpdate from "./ProductsForUpdate";
import EditProducts from "./EditProducts";
import { useState } from "react";

function UpdateProductDetails(props) {
  // let [state, setState] = useState({
  //   products: [],
  //   productToEdit: null,
  // });

  // const onProductEdited = (newProduct) => {
  //   setState({ products: newProduct, productToEdit: state.productToEdit });
  // };

  // const onProductSelected = (id) => {
  //   let selectedProductData = props.data.products.filter((product) => {
  //     return product.id === id;
  //   });
  //   setState({ products: state.products, productToEdit: selectedProductData });
  // };
  // return (
  //   <div className="d-flex">
  //     <ProductsForUpdate
  //       data={props.data}
  //       onProductSelected={onProductSelected}
  //     />

  //     {state.productToEdit === null ? (
  //       "Select Product to Edit"
  //     ) : (
  //       <EditProducts
  //         productToEdit={state.productToEdit}
  //         onProductEdited={onProductEdited}
  //       />
  //     )}
  //   </div>
  // );
  console.log("UpdateProductDetails", props.editData);
  let [formData, updateFormData] = useState({
    ...props.editData[0],
  });

  console.log("formData", formData.title);
  const inputOnChange = (event) => {
    updateFormData({ ...formData, [event.target.name]: event.target.value });
    console.log("changed");
  };

  const onSubmit = (event) => {
    props.onProductUpdated(formData, formData.id);
  };

  return (
    <div className="container  d-flex flex-column">
      <p className="text-center mt-2">Edit the Product Details</p>
      <div className="form-control">
        <label>Title</label>
        <input
          className="form-control"
          type="text"
          value={formData.title}
          name="title"
          placeholder="Product title"
          onChange={inputOnChange}
        ></input>
      </div>
      <br />
      <div className="form-control">
        <label>Description</label>
        <textarea
          className="form-control"
          type="text"
          name="description"
          placeholder="description"
          value={formData.description}
          onChange={inputOnChange}
        ></textarea>
      </div>
      <br />
      <div className="form-control">
        <label>Price</label>
        <input
          className="form-control"
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={inputOnChange}
        ></input>
      </div>
      <br />
      <div className="form-control">
        <label>Category</label>
        <select
          className="form-control"
          name="category"
          value={formData.category}
          onChange={inputOnChange}
          required
        >
          <option value="">Select Category</option>
          <option value="men's clothings"> Men's clothings</option>
          <option value="jewelery">Jewelery</option>
          <option value="Electronics">Electronics</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </div>
      <br />
      <div className="form-control">
        <label>Image URL</label>
        <input
          className="form-control"
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={inputOnChange}
        ></input>
      </div>
      <button
        className="btn btn-primary mt-4 mb-4 align-self-center"
        onClick={onSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
}
export default UpdateProductDetails;
