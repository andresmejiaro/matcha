import { wrongCredential, resetSignin, noResponse } from '../Slices/signinSlice';
import { login } from '../Slices/authSlice';


export const signInMW = (inputs) => (dispatch) => {
    fetch(`/api/signin`,
        {method: 'POST',
          headers: {'Content-Type':'application/json',},
          body : JSON.stringify(inputs)
          }
      )
      .then(response => response.json())
      .then((data) => {
        if(data.success){
          dispatch(login({"username":inputs.username}));
          navigate('/');
        }
        else {
          dispatch(wrongCredential());
        }
      }).catch(error => {
        dispatch(noResponse())
        
      })
}