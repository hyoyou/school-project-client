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
                current_user: action.user.username
            }

        case 'SIGNUP':
        
        return {
            ...state,
            authenticated: true,
            current_user: action.user.username,
        }

        case 'AUTHENTICATION_FAILURE':
            return {
                token: null,
                name: "",
                authenticating: false,
                authenticated: false,
                errors: action.errors
            }
        
        case 'LOGGEDOUT':
            return {
              ...state,
              current_user: "",
              authenticated: false,
          
            }
        
        default:
            return  state
        
    
    }
  
}
