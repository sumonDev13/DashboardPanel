import { useState } from "react";
import axios from "axios";
import "../App.css";

// eslint-disable-next-line react/prop-types
const InputForm = ({ closeModal }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      price: price,
    };

    axios
      .post("http://localhost:5000/api/createProduct", data)
      .then((response) => {
        console.log("Data submitted successfully", response.data);
      })
      .catch((error) => {
        console.error("Error submitting data", error);
      });
    closeModal();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="beautiful-form">
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" value={price} onChange={handlePriceChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
