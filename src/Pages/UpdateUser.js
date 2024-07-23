import React,{ useState, useEffect } from 'react'

const UpdateUser = ({ user, isOpen, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({
        id: '',  
        userName: '',
        age: '',
        gender: '',
        address: ''
      });
    
      useEffect(() => {
        if (user) {
          setFormData({ ...user });
        }
      }, [user]);
    
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
        <h1>Update User</h1>
        <div>
          <div className="line-one"></div>
          <div className="line-two"></div>
        </div>

        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="flexbox">
              <label>User Name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
            </div>

            <div className="flexbox">
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className="flexbox">
              <label>Gender</label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
            </div>

            <div className="flexbox">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateUser