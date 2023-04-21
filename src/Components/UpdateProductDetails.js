import { useState } from "react";
import { Link } from "react-router-dom";

function UpdateProductDetails(props) {
  let [isFormSubmited, setIsFormSubmited] = useState(false);

  let [formData, updateFormData] = useState({
    ...props.editData[0],
    rating: { ...props.editData[0].rating },
  });
  //console.log("formData.rating.rate", formData.rating.rate);

  const inputOnChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  // if (event.target.name === "rate") {
  //   updateFormData({
  //     ...formData,
  //     rating: {
  //       ...formData.rating,
  //       [event.target.name]: event.target.value,
  //     },
  //   });
  // } else {
  //   updateFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // }

  // console.log("form data", formData);

  const onSubmit = (event) => {
    setIsFormSubmited(true);
    event.preventDefault();
    props.onProductUpdated(formData, formData.id);
  };

  return (
    <div className="container  d-flex flex-column">
      <form
        onSubmit={onSubmit}
        className=" form-control d-flex flex-column mt-3 mb-2"
      >
        <h3 className="text-center mt-2">Edit the Product Details</h3>
        <div>
          <label>Title </label>
          <input
            className="form-control"
            type="text"
            value={formData.title}
            name="title"
            placeholder="Product title"
            onChange={inputOnChange}
          />
        </div>
        <br />
        <div>
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
        <div>
          <label>Price</label>
          <input
            className="form-control"
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={inputOnChange}
          />
        </div>
        <br />
        <div>
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
        <div>
          <label>Image URL</label>
          <input
            className="form-control"
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={inputOnChange}
          />
        </div>

        <button
          className="btn btn-primary mt-4 mb-4 align-self-center"
          type="submit"
        >
          SUBMIT
        </button>
        {isFormSubmited && (
          <div className="prompt d-flex flex-column mx-auto align-items-center">
            <p>Product Updated Successfully</p>
            <Link to="/">
              <button className="btn btn-success">OK</button>
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}
export default UpdateProductDetails;
