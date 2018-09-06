export default (state = {
  authenticated: false,
  current_user: {},
  errors: []
}, action) => {

  switch (action.type) {
    case 'LOGIN':

      return {
        ...state,
        authenticated: true,
        current_user: action.user
      }

    case 'SIGNUP':
      return {
        ...state,
        authenticated: true,
        current_user: action.user,
      }

      
      case 'LOGGEDOUT':
      return {
        ...state,
        authenticated: false,
        current_user: {},
      }
      
      case 'AUTHENTICATION_FAILURE':
        debugger
        return {
          
          ...state,
          authenticated: false,
          current_user: {},
          errors: action.errors
        }
      
      default:
        return  state
        
    }
  
}
