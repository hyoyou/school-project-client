const API_URL = "http://192.168.1.190:3001/api"

const signupSuccess = (user) => {
 
  return {
    type: 'SIGNUP',
    user: user
  }

}

const loginSuccess = (user) => {
  return {
    type: 'LOGIN',
    user: user
  }
}

const authFailure = (errors) => {
  return {
    type: 'AUTHENTICATION_FAILURE',
    errors: errors.message
  }
}

export const signup = (user, history) => {
  
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
        
        body: JSON.stringify({user})
      })
        .then(res => res.json())
        .then((response) => {
        
          if (response.errors) {
            
            throw Error(response.errors);
          
          } else{
            localStorage.setItem('Token', response.token);
            history.push("/")
            dispatch(signupSuccess(response.user))
          }        
        })
        .catch( errors => {
          localStorage.clear()
          dispatch(authFailure(errors))
        })
  }
      
}

export const login = (user, history) => {
  
  return dispatch => {
    return fetch(`${API_URL}/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
        
        body: JSON.stringify({user})
      })
        .then(res => res.json())
        .then((response) => {
          
          if (response.errors) {
            
            throw Error(response.errors);
          
          } else{
            localStorage.setItem('Token', response.token);
            history.push("/")
            dispatch(loginSuccess(response.user))
          }        
        })
        .catch( errors => {
          localStorage.clear()
          dispatch(authFailure(errors))
        })
  }
      
}

export const logout = () => {
  return dispatch => {
      localStorage.clear();
      return dispatch({type: 'LOGGEDOUT'});
  }
}