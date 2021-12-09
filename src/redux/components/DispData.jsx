

import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addData,deleteUser, getUserById } from "../Actions/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const DispData=()=>{

  let history=useHistory();
  

    const dispatch = useDispatch();
    const myState = useSelector((state) => state.crud_operation.list.data);
    const err=useSelector((state)=>state.crud_operation.list.error)
  
  const handleDelete=(id)=>{
    console.log(id);
    dispatch(deleteUser(id))
    // dispatch(addData())
  }
  
  const handleUpdate=(id)=>{
    console.log(id);
    dispatch(getUserById(id))
    history.push(`/updateProduct/editID/${id}`)

  }
   
    useEffect(() => {
     
        dispatch(addData())    
        if(err==true){
          alert("data not registered successfully")
        }
 
    }, [err])



    return(<>



<div>
<h2  className="text-center  ml-4 mt-4  mb-5">Product List</h2>
<table className="table table-hover  table-striped table-bordered ml-4 ">
  <thead>
    <tr>
      <th>#ID</th>
      <th>Product Name</th>
      <th>Price</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  

    {myState && myState.map((product,id) =>{ 
      {/* const Id=product._id; */}
     
      {/*  */}
      {/* console.log(productId) */}
      
      return (
      <tr key={product._id}>
        <td>{product._id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
              <Link className=" mr-2" to={`/updateProduct/editID/${product._id}`}>
               <button  className="btn btn-warning"> Edit</button> 
               </Link>
        </td>


        <td>
               <button className="btn btn-danger" onClick={()=>handleDelete(product._id)}>Delete</button>
           </td>

      </tr>
    )})}
  </tbody>
</table>

</div>
   </>)
}

 export default DispData;