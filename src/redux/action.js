 export const ADD_TO = "ADD_TO"
export const TOOGLE = "TOOGLE"
export const DELET = "DELETE"
 export const add = (payload) => ({
    type: ADD_TO,
    payload
 })
 export const toogle = (payload) => ({
   type: TOOGLE,
   payload
})
export const delet = (payload) => ({
   type: DELET,
   payload
})