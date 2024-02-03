// src/actions/loginActions.js
export const setPhoneNumber = (phoneNumber) => ({
    type: "SET_PHONE_NUMBER",
    payload: phoneNumber,
  });
  
  export const setOtp = (otp) => ({
    type: "SET_OTP",
    payload: otp,
  });
  
  export const setIsOtpSent = (isOtpSent) => ({
    type: "SET_IS_OTP_SENT",
    payload: isOtpSent,
  });
  
  export const setIsSendButtonDisabled = (isSendButtonDisabled) => ({
    type: "SET_IS_SEND_BUTTON_DISABLED",
    payload: isSendButtonDisabled,
  });
  
  export const setSecondsRemaining = (secondsRemaining) => ({
    type: "SET_SECONDS_REMAINING",
    payload: secondsRemaining,
  });
  
  export const setLoading = (isLoading) => ({
    type: "SET_LOADING",
    payload: isLoading,
  });
  
  export const setIsLoggedIn = (isLoggedIn) => ({
    type: "SET_IS_LOGGED_IN",
    payload: isLoggedIn,
  });
  