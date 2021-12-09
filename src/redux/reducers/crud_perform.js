
// TODO DISPLAY DATA:

import { POSTDATA,POSTERROR } from "../Actions/index";

const initialData = {
    list: {
        data: [],
        user:[],
        loading: false,
        success: false,
        error: false
    }
}




// console.log(list.data.filter(({ id }) => id !== action.payload))

const crud_operation = (state = initialData, action) => {
    switch (action.type) {
        //Todo  case:1
        case "DISPDATA":
            const data = action.payload;
            console.log(data)
            return {
                ...state,
                list: {
                    data: data,
                }
            }

            case "GETBYID":
               const iData= state.list.user;
                return{
                    list:{
                        user:iData
                    },
                  
                }


        case "DELDATA":
             const newList=state.list.data.filter((elem) => elem._id !== action.payload)
            
            return{
                    ...state,
                    list:{
                        data:newList

                    }
                  
                    // .filter(({ id }) => id !== action.payload)
                }
             
              
            

         case "UPDATE":
            return{
               ...state
               
                    
                  
                }


        case "POSTERROR":
            // let state.list.error=""

            return {
                ...state,
                list: {
                    error:true
                }
                
            }

        // case "POSTDATA":
        //     const data2 = action.payload;
        //     return{
        //         ...state,list:{
        //             data:data2,
                    
        //             success:true
        //         }
               
        //     }

        default: return state;
    }


}


//TODO  case:2













//   case POSTDATA:
//    dispatchEvent({type: "DISPDATA"}) 
//     return {


//     };


//   case CREATE_POST_FAIL:
//     return {
//       loading: false,
//       error: action.payload,
//     };


// case "POSTDATA":
// const pdata=action.payload;

// console.log(pdata)
// return{
//     ...state,pdata
// }







export default crud_operation;

