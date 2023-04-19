import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddNewProduct(props) {
  let [formData, updateFormData] = useState({
    id: "",
    title: "",
    description: "",
    category: "",
    price: 0,
    image: "",
    rating: { rate: 0, count: 0 },
  });

  let [isFormSubmited, setIsFormSubmited] = useState(false);

  formData.id = uuidv4();
  const setFormData = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    setIsFormSubmited(true);
    event.preventDefault();
    event.target.reset();
    props.onProductAdded(formData);
  };

  return (
    <div className="product-form mt-5 mb-5">
      <form
        className="form-control d-flex flex-column align-items-center w-75"
        onSubmit={submitForm}
      >
        <h2>Add New Product</h2>
        <div className="form-control">
          <label>Title:</label>
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Enter Title"
            required
            onChange={setFormData}
          ></input>
        </div>
        <div className="form-control">
          <label>Description:</label>
          <textarea
            className="form-control"
            name="description"
            placeholder="Enter Description"
            onChange={setFormData}
            required
          ></textarea>
        </div>
        <div className="form-control">
          <label>Category:</label>
          <select
            className="form-control"
            name="category"
            onChange={setFormData}
            required
          >
            <option value="">Select Category</option>
            <option value="men's clothings"> Men's clothings</option>
            <option value="jewelery">Jewelery</option>
            <option value="Electronics">Electronics</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>
        <div className="form-control">
          <label>Price</label>
          <input
            className="form-control"
            type="number"
            name="price"
            placeholder="Enter Price"
            onChange={setFormData}
            required
            max={1000000}
          ></input>
        </div>
        <div className="form-control">
          <label>Image URL</label>
          <input
            className="form-control"
            type="text"
            name="image"
            placeholder="Enter Image url"
            onChange={setFormData}
            required
          ></input>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        {isFormSubmited && (
          <h5 className="text-success text-center">
            Product Added Successfully!!
          </h5>
        )}
      </form>
    </div>
  );
}

export default AddNewProduct;
