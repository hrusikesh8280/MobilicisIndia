import { DATA_FAILURE, DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes"


const initialState={
    isLoading:false,
    DATA:[],
    isError:false,
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case DATA_REQUEST:
            return{...state,isLoading:true}
        case GET_DATA_SUCCESS:
            return{...state,isLoading:false,DATA:payload}
        case DATA_FAILURE:
            return {...state,isLoading:false,isError:true}
        default:
            return state
    }

}