import { wrongCredential, resetSignin, noResponse } from '../Slices/signinSlice';
import { login } from '../Slices/authSlice';


export const signInMW = (inputs) => async (dispatch) => {
    try{
      let response = await fetch(`/api/signin`,
        {method: 'POST',
          headers: {'Content-Type':'application/json',},
          body : JSON.stringify(inputs)
          } 
      );

      response = await response.json();
      if(response.success){
          dispatch(login({"username":inputs.username}));
          navigate('/');
        }
        else {
          dispatch(wrongCredential());
        }
      }
    catch(error){
        dispatch(noResponse());
        
      }
}