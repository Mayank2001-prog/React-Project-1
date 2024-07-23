// AddPerson.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../Redux/Action/actions';
import './styles.css';
import ShowUserlist from './ShowUserlist';

const AddPerson = ({ existingUser }) => {
  const [formData, setFormData] = useState({
    id: existingUser ? existingUser.id : '',
    userName: existingUser ? existingUser.userName : '',
    age: existingUser ? existingUser.age : '',
    gender: existingUser ? existingUser.gender : '',
    address: existingUser ? existingUser.address : '',
  });
  const [showData, setShowData] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { ...formData };
    if (formData.id && formData.userName && formData.age && formData.gender && formData.address) {
      setShowData(true);

      if (existingUser) {
        dispatch(updateUser(user));
      } else {
        dispatch(addUser(user));
      }
    }
    setFormData({
      id: '',
      userName: '',
      age: '',
      gender: '',
      address: ''
    });
  };

  return (
    <>
      <div className="form-container">
        <h1>Add User</h1>
        <div>
          <div className="line-one"></div>
          <div className="line-two"></div>
        </div>

        <div className="container">
          <div className="flexbox">
            <label htmlFor="">Id</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </div>
          <div className="flexbox">
            <label htmlFor="">User Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="flexbox">
            <label htmlFor="">Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="flexbox">
            <label htmlFor="">Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>
          <div className="flexbox">
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSubmit}>Add User</button>
        </div>
      </div>

      {showData && <ShowUserlist />}
    </>
  );
};

export default AddPerson;
