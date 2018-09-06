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
        current_user: action.user,
        errors: []
      }

    case 'SIGNUP':
      return {
        ...state,
        authenticated: true,
        current_user: action.user,
        errors: []
      }

      
      case 'LOGGEDOUT':
      return {
        ...state,
        authenticated: false,
        current_user: {},
      }
      
      case 'AUTHENTICATION_FAILURE':
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
