import { ADD_TO, DELET, TOOGLE } from "./action"

export const reducer = (store = {array:[]},{type,payload}) => {
  switch(type) {
    case ADD_TO:{
        return{
          array:[...payload]
        }
    }
    case TOOGLE:{
    
        return{
            array:[...payload]
        }
    }
    case DELET:{
    
      return{
          array:[...payload]
      }
  }
   
    default:{
        return store
    }
  }
}