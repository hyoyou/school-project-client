// const API_URL = "http://192.168.1.190:3001/api"
const API_URL = "http://localhost:3001/api"

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

const loadUserSuccess = (user) => {
  return {
    type: 'LOAD_USER_SUCCESS',
    payload: user
  }
}

const updateUserSuccess = (user) => {
  return {
    type: 'UPDATE_USER_SUCCESS',
    payload: user
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
          if (response.message) {
            
            throw Error({response});
          
          } else{
            sessionStorage.setItem('Token', response.token);
            dispatch(signupSuccess(response.user))
            history.push("/")
          }        
        })
        .catch( errors => {
          
          sessionStorage.clear()
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
            sessionStorage.setItem('Token', response.token);
            history.push("/")
            dispatch(loginSuccess(response.user))
          }        
        })
        .catch( errors => {
        
          sessionStorage.clear()
          dispatch(authFailure(errors))
        })
  }
      
}

export const logout = (history) => {
  return dispatch => {
      sessionStorage.clear();
      history.push("/")
      return dispatch({type: 'LOGGEDOUT'});
  }
}

export const loadUser = (userId) => {
  return dispatch => {
    return fetch(`${API_URL}/users/${userId}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(result => {
      dispatch(loadUserSuccess(result))
    })
    .catch(error => console.log(error))
  }
}


export const updateUser = (user) => {
  console.log(user)
  return dispatch => {
    return fetch(`${API_URL}/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    })
    .then(response => response.json())
    .then(result => {
      dispatch(updateUserSuccess(result))
    })
    .catch(error => console.log(error))
  }
}