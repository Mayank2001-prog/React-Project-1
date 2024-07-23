// ShowUserlist.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../Redux/Action/actions'; 
 
import './styles.css';
import UpdateUser from './UpdateUser';

const ShowUserlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const users = useSelector(state => state.users); // Make sure to select the correct slice of state
  const dispatch = useDispatch();

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleItemUpdate = (updatedUser) => {
    dispatch(updateUser(updatedUser));
  };

  return (
    <>
      <div>
        <h2 className='heading-text'>All Users</h2>
        { users.length > 0 && 
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.userName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.address}</td>
                  <td>
                    <div className="flexboxtwo">
                      <button className="update-btn" onClick={() => handleUpdate(user)}>Update</button>
                      <button className="delete-btn" onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>

      <UpdateUser 
        user={selectedUser} 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
        onUpdate={handleItemUpdate} 
      />
    </>
  );
};

export default ShowUserlist;
