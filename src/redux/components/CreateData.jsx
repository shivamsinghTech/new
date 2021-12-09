import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addData,PostData } from "../Actions/index";
import DispData from "./DispData";






const CreateData = () => {
  
    
    const dispatch = useDispatch();
    const myState=useSelector((state)=>state.crud_operation.list.data)
    const err=useSelector((state)=>state.crud_operation.list.error)
   
   


    const [product, setProduct] = useState([
        {
            name:"",
            price:""
        }
    ]);


    const inputChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;

        
        setProduct((preValue)=>{
            return({
                ...preValue,[name]:value
            })
        })

          console.log(product)
    }



    const submitClick=(e)=>{
        e.preventDefault();

        if(product.name==="" || product.price===""){
            alert("please fill all the record")

        }
    else {
        const success=dispatch(PostData(product))
       
       
            setProduct({name:"",price:""})
            console.log("else check")
                }  
       
    }

    





    // useEffect(() => {
    //     // dispatch(addData())

    // },[])

    console.log(myState)
    return (<>

        <div className="container">
        <div className="container main">
                <form method="POST" className="form-inline" >
                <h2 calssname="text-center ml-4">Create  Data</h2>
                    
                     <div className="form-group">
                        <label htmlFor="name" >Product Name:</label>
                             <input type="text" className="form-control" id="name" name="name"
                              placeholder="Enter Product Name" value={product.name||""} onChange={inputChange}/>
                     </div>


                    <div className="form-group">
                      <label htmlFor="price">Product Price:</label>
                         <input type="number" className="form-control" id="price" name="price"
                          placeholder="Enter Product Price" value={product.price||""} onChange={inputChange}/>
                     </div>


                     <button type="submit" onClick={submitClick} className="btn btn-primary mt-3">Submit</button>

                    

                 </form>

            </div>

            


       


        </div>

        <DispData/>



    </>)
}

export default CreateData;