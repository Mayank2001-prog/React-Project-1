import React,{useState} from 'react'
import './styles.css'
import { useDispatch } from 'react-redux';
import { addItem, updateItem } from '../Redux/Action/actions';
import ShowProductlist from './ShowProductlist';


const AddItems = ({existingItem}) => {
    const [formData, setFormData] = useState({
        id: existingItem ? existingItem.id : '',
        productName: existingItem ? existingItem.productName : '',
        price: existingItem ? existingItem.price : '',
        color: existingItem ? existingItem.color : '',
        quantity: existingItem ? existingItem.quantity : ''
      });
      const [showdata,setShowData] = useState(false);
    
      const dispatch = useDispatch();
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        const item = {
          ...formData
        };
        if(formData.id && formData.productName && formData.price && formData.color && formData.quantity){
            setShowData(true);

            if (existingItem) {
              dispatch(updateItem(item));
            } else {
              dispatch(addItem(item));
            }
        } 
        setFormData({
          id: '',
          productName: '',
          price: '',
          color: '',
          quantity: ''
        });
      };
  return (
     <>
 
     <div className="form-container">
        <h1>Add Items</h1>
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
        <label htmlFor="">Product Name</label>
        <input
        type="text"
        name="productName"
        value={formData.productName}
        onChange={handleChange} 
      />
 </div>

 <div className="flexbox"> 
        <label htmlFor="">Price</label>
        <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange} 
      />
           </div>

           <div className="flexbox">
        <label htmlFor="">Color</label>
        <input
        type="text"
        name="color"
        value={formData.color}
        onChange={handleChange} 
      />
</div>

<div className="flexbox">
        <label htmlFor="">Quentity</label>
        <input
        type="text"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        
      />
</div>
          <button  onClick={handleSubmit}>Add Item</button>
          </div>
      </div>

      {showdata && <ShowProductlist/>}
     </>
  )
}

export default AddItems