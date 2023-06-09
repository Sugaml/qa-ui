import { LOGIN_DATA, LOGIN_DATA_SUCCESS } from "../Constants/account";
import initialState from "./initialState";


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_DATA:
        return { 
          ...state, 
          //naxaData: action.payload
        }
        case LOGIN_DATA_SUCCESS:
            console.log("Success Data :: ",action.payload)
            return { 
              ...state, 
              loginData: action.payload
            }
      default:
        return state
    }
  }

export default loginReducer;
