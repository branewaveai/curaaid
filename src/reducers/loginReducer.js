// src/reducers/loginReducer.js
const initialState = {
    phoneNumber: "",
    otp: "",
    isOtpSent: false,
    isSendButtonDisabled: false,
    secondsRemaining: 30,
    isLoading: false,
    isLoggedIn: false,
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PHONE_NUMBER":
        return { ...state, phoneNumber: action.payload };
  
      case "SET_OTP":
        return { ...state, otp: action.payload };
  
      case "SET_IS_OTP_SENT":
        return { ...state, isOtpSent: action.payload };
  
      case "SET_IS_SEND_BUTTON_DISABLED":
        return { ...state, isSendButtonDisabled: action.payload };
  
      case "SET_SECONDS_REMAINING":
        return { ...state, secondsRemaining: action.payload };
  
      case "SET_LOADING":
        return { ...state, isLoading: action.payload };
  
      case "SET_IS_LOGGED_IN":
        return { ...state, isLoggedIn: action.payload };
  
      default:
        return state;
    }
  };
  
  export default loginReducer;
  