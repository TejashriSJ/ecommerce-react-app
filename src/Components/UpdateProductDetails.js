import { useState } from "react";

function UpdateProductDetails(props) {
  let [isFormSubmited, setIsFormSubmited] = useState(false);

  let [formData, updateFormData] = useState({
    ...props.editData[0],
  });

  const inputOnChange = (event) => {
    updateFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    setIsFormSubmited(true);
    event.preventDefault();
    props.onProductUpdated(formData, formData.id);
  };

  return (
    <div className="container  d-flex flex-column">
      <form onSubmit={onSubmit} className="d-flex flex-column">
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
            <option value="electronics">Electronics</option>
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
          type="submit"
        >
          SUBMIT
        </button>
        {isFormSubmited && (
          <h5 className="text-success text-center">
            Product Updated Successfully!!
          </h5>
        )}
      </form>
    </div>
  );
}
export default UpdateProductDetails;
