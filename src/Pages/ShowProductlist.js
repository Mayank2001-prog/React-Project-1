import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem ,updateItem} from '../Redux/Action/actions'; 
import UpdateItems from './UpdateItem';
import './styles.css'

const ShowProductlist = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleUpdate = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleItemUpdate = (updatedItem) => {
    dispatch(updateItem(updatedItem));
  };

  return (
    <>
    <div>
      <h2 className='heading-text'>All Items</h2>
      { items.length > 0 && <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Product Name</th>
      <th>Price</th>
      <th>Color</th>
      <th>Quantity</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {items.map(item => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.productName}</td>
        <td>{item.price}</td>
        <td>{item.color}</td>
        <td>{item.quantity}</td>
        <td>
          <div className="flexboxtwo">
            <button className="update-btn" onClick={() => handleUpdate(item)}>Update</button>
            <button className="delete-btn" onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>}

    </div>

    <UpdateItems 
        item={selectedItem} 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
        onUpdate={handleItemUpdate} 
      />
    </>
  )
}

export default ShowProductlist