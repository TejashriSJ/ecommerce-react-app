import { useState } from "react";
import { Link } from "react-router-dom";
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
        className="form-control d-flex flex-column  w-75"
        onSubmit={submitForm}
      >
        <h2 className="text-center">Add New Product</h2>
        <div>
          <label>Title:</label>
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Enter Title"
            required
            onChange={setFormData}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            className="form-control"
            name="description"
            placeholder="Enter Description"
            onChange={setFormData}
            required
          ></textarea>
        </div>
        <div>
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
        <div>
          <label>Price</label>
          <input
            className="form-control"
            type="number"
            name="price"
            placeholder="Enter Price"
            onChange={setFormData}
            required
            max={1000000}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            className="form-control"
            type="text"
            name="image"
            placeholder="Enter Image url"
            onChange={setFormData}
            required
          />
        </div>
        <button
          className="btn btn-primary align-self-center mb-2"
          type="submit"
        >
          Submit
        </button>
        {isFormSubmited && (
          <div className="d-flex flex-column align-items-center prompt mx-auto">
            <p>Product Added Successfully</p>
            <Link to="/">
              <button className="btn btn-success">OK</button>
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default AddNewProduct;
