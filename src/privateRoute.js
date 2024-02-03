const ProtectedRoute = ({ element }) => {
    // If user is authenticated, render the protected element, else redirect to login
    const authToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="))
      ?.split("=")[1];
  
      if (authToken) {
        return element;
      } else {
        console.log("authoken BOx called");
        toast.error("Please login first!",{
          position: "top-right",
          autoClose: 3000,
          hideProgressBar:false,
          closeOnClick: true,
          pauseOnHover:true,
          draggable:true,
          progress: undefined,
          theme: "light",
        });
        return <Navigate to="/home" />;
      }
  };

  export default ProtectedRoute;