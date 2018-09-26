const INITIAL_STATE = {
  authenticated: false,
  current_user: {
    id: null,
    username: "",
    email: "",
    no_of_checkins: 0,
    user_locations_attributes: []
  },
  login_errors: [],
  signup_errors: []
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'LOGIN':
      
      return {
        ...state,
        authenticated: true,
        current_user: {...action.user},
        login_errors: []
      }

    case 'SIGNUP':
      return {
        ...state,
        authenticated: true,
        current_user: action.user,
        signup_errors: []
      }

      
    case 'LOGGEDOUT':
      return {
        ...state,
        authenticated: false,
        current_user: {},
      }
      
    case 'LOGIN_FAILURE':
    
      return {
        ...state,
        authenticated: false,
        current_user: {},
        login_errors: action.errors
      }

      case 'SIGNUP_FAILURE':
      
      return {
        ...state,
        authenticated: false,
        current_user: {},
        signup_errors: action.errors
      }
    
    case 'LOAD_USER_SUCCESS':
    
      return {
        ...state,
        authenticated: true,
        current_user: action.payload
      }

    case 'UPDATE_USER_SUCCESS':
      
      return {
        ...state,
        authenticated: true,
        //current_user: {...action.payload}
        current_user: {...state.current_user, user_locations_attributes:  [...action.payload.user.user_locations_attributes]}
      }

    default:
      return  state
        
    }
}
