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
            localStorage.setItem('Token', response.token);
            dispatch(signupSuccess(response.user))
            history.push("/")
          }        
        })
        .catch( errors => {
          debugger
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

export const logout = (history) => {
  return dispatch => {
      localStorage.clear();
      history.push("/")
      return dispatch({type: 'LOGGEDOUT'});
  }
}

export const findUser = (token) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/find', {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    })
    .then(response => response.json())
    .then(result => {
      dispatch(loadUser(result.user.user.id))
    })
    .catch(error => console.log(error))
  }
}

export const loadUser = (userId) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/users/${userId}`, {
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
  return dispatch => {
    return fetch(`http://localhost:3001/api/users/${user.id}`, {
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