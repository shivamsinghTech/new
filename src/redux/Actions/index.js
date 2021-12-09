
import axios from "axios";

//TODO:   getProduct



// export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
// export const POSTDATA = 'POSTDATA';
// export const CREATE_POST_FAIL = 'CREATE_POST_FAIL';
// export const CREATE_POST_REQUEST='CREATE_POST_REQUEST'



export const POSTERROR="POSTERROR";


export const addData = () => async (dispatch) => {
    const {data}  = await axios.get('http://localhost:5000/getProduct')
    dispatch({ type: "DISPDATA", payload: data });
    // console.log(data)
}
// TODO:;;; registerProduct


export const PostData=(data2)=>async(dispatch)=>{
    console.log(data2)
    try{
        
    const result=await axios.post('http://localhost:5000/register547347',data2);

    if(result){
        dispatch({type:"POSTDATA",payload:data2})
    console.log("data register successfully ")

    }
    
    dispatch(addData())
    }
    catch(error){
        dispatch({type:"POSTERROR"})
        console.log("data registered failed ")
    }
}

const failed=(error)=>{
    return{
        type:"ERRORDATA",
        payload:"error"
    }
}


// TODO

export const getUserById=(id)=>async(dispatch)=>{
    console.log(id)
       const get1data= await axios.get(`http://localhost:5000/getProductById/${id}`)
       console.log(get1data)
        dispatch({type:"GETBYID",payload:get1data})
}


// todo
export const updateData = (data,id) => async (dispatch) => {
    try{
    const res=  await axios.patch(`http://localhost:5000/updateData/${id}`, data);
    dispatch({ type:"UPDATE", payload: data });
    }
    catch(e){
        dispatch({type:"POSTERROR"})
    }
}


export const deleteUser=(id)=>async(dispatch)=>{
    console.log(id);

    try{
        console.log(id)
        
 const response= await axios.delete(`http://localhost:5000/delProduct/${id}`)

 if(response){
    
    dispatch({ type:"DELDATA",payload:id});
   
    
    // dispatch(addData())
 }

         }
    catch(error){
        console.log(error)
    }
  
};


// export const PostData =data => {
//     return async dispatch => {

// try {
       

//         const result=await axios.post('http://localhost:5000/register',data)
//         console.log(result)
//         dispatch({type:"POSTDATA",payload:data})
//         dispatch(addData())

//         console.log(result)


//     }   catch (error) {
//                 // dispatch({
//                 //   type: CREATE_POST_FAIL,
//                 //     payload: error.response 
//                 //          });
//                      }
//     };
// };
  



// export const AddData = () => async(dispatch) => {
// try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos"
//     );
//     const data = await response.json();
//     dispatch({ type: "ADDDATA", payload: data });
//   }

//   catch(e){
//       console.log(e)

//   }
// }


// TODO :




// }





// .then(
//     data => dispatch({
//         type : "ADDDATA",
//         payload : data
//     })
// );
// };

// export const DISPDATA = "DISPDATA";

// function get_Data(data) {
//     return {
//         type: DISPDATA,
//         payload: data
//     }
// }



// export const DisplayData=()=>{

//     return{
//         type:"DISPDATA"
//     }
// }





export const EditData = () => {

    return {
        type: "EDITDATA"
    }
}






// export const DelData = () => {
//     return {
//         type: "DELDATA"
//     }
// }