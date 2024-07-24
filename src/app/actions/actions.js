
export const loggedInUser=(data)=>(dispatch)=>{
    dispatch({
        type:'LOGIN_SUCCESS',
        payload:data
    })
}