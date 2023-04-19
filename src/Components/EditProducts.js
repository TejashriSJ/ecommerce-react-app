import { useState } from "react";

function EditProducts(props) {
  console.log("product to edit", props.productToEdit);
  let [{ id, title, price, category, image, rating, description }] =
    props.productToEdit;

  let [state, setState] = useState({
    id,
    title,
    price,
    category,
    image,
    rating,
    description,
  });
  console.log("title", title);

  let inputOnChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });

    let newData = {
      ...props.productToEdit[0],

      [event.target.name]: event.target.value,
    };

    props.onProductEdited(newData);
  };

  return (
    <div className="container w-50 ">
      <p className="text-center">Edit the Product</p>
      <div className="form-control">
        <label>Title</label>
        <input
          className="form-control"
          type="text"
          value={title}
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
          value={description}
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
          value={price}
          onChange={inputOnChange}
        ></input>
      </div>
      <br />
      <div className="form-control">
        <label>Category</label>
        <input
          className="form-control"
          type="text"
          name="category"
          placeholder="category"
          value={category}
          onChange={inputOnChange}
        ></input>
      </div>
      <br />
      <div className="form-control">
        <label>Image URL</label>
        <input
          className="form-control"
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={inputOnChange}
        ></input>
      </div>
    </div>
  );
}
export default EditProducts;
