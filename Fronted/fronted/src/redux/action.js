import axios from "axios";
import { DATA_FAILURE, DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes";


export const getDataSuccess=(payload)=>{
    return{type:GET_DATA_SUCCESS,payload}
}

export const dataRequest=()=>{
    return{type:DATA_REQUEST}
}

export const dataFailure=()=>{
    return{type:DATA_FAILURE}
}

export const getData=(params)=>(dispatch)=>{
    dispatch(dataRequest())
    axios.get(`https://rose-enthusiastic-sea-lion.cyclic.app/api/users`,params).then((res)=>{
        console.log(res.data)
        dispatch(getDataSuccess(res.data));
    })
    .catch((err)=>{
        dispatch(dataFailure())
    })
}