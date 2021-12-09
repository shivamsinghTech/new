import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch ,useSelector} from 'react-redux';


import axios from 'axios';
import { addData,updateData,getUserById } from '../Actions';




const EditProduct=()=>{

    const dispatch=useDispatch();
    // const users = useSelector((state) => state.crud_operation.list.user);




    let history = useHistory();
    let {id} = useParams();
    const[data,setData]=useState({
        name:"",
        price:""
    })


        const onInputChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        console.log(name);
        console.log(value);
        
        setData({...data,[name]:value})
        console.log(data)
    }
// Call Update method  from backend 

    const updateProduct = async e => {
        e.preventDefault();
     
            dispatch(updateData(data,id))
        history.push("/");
      };
     

//   get data by id from backend and we set response in setData

      const loadProduct =async  () => {
       fetch(`http://localhost:5000/getProductById/${id}`,{
                method: "GET",
              })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                    console.log(data)
            setData({
                        id: id,
                        name:result.name,
                        price:result.price
                    });
                })
                .catch((error) => console.log("error", error));};


    useEffect(()=>{
      loadProduct();
        console.log(data)
    },[])



  


    return(<>


    
    <div className="container">
     <div className="row mt-4"> 
      <div className="col-sm-10  mx-auto shadow  p-5">
        <h4 className="text-center mb-4">Edit A Product</h4>
          <h5 className="text-success">Product ID : 
           {data.id}  </h5>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="name"
              value={data.name}
              onChange={e => onInputChange(e)}
            />
          </div>


          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Product Price"
              name="price"
              value={data.price}
              onChange={e => onInputChange(e)}
            />
          </div>
          
         
          <button className="btn btn-secondary"
           onClick={updateProduct}
           >Update Product</button>
       
       </div>
      </div> 
    </div>



    </>)
}

export default EditProduct;