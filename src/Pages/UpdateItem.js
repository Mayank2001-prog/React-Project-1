import React, { useState, useEffect } from "react";

const UpdateItems = ({ item, isOpen, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    id: '',  
    productName: '',
    price: '',
    color: '',
    quantity: ''
  });

  useEffect(() => {
    if (item) {
      setFormData({ ...item });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);  
    onClose();  
  };

  if (!isOpen) return null;
  return (
    <>
      <div className="form-container">
        <h1>Update Item</h1>
        <div>
          <div className="line-one"></div>
          <div className="line-two"></div>
        </div>

        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="flexbox">
              <label>Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
              />
            </div>

            <div className="flexbox">
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            <div className="flexbox">
              <label>Color</label>
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
              />
            </div>

            <div className="flexbox">
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateItems;
