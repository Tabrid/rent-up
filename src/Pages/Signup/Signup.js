import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
const Swal = require('sweetalert2')

const Signup = () => {
  const [error, setError] = useState(null);
  const { createUser, LoginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
 const location = useLocation()
 const from = location.state?.from?.pathname|| '/';


  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if (password.length < 6) {
      setError("password should be 6 character or more.");
      return;
    }

    if (password !== confirm) {
      setError("Your Password did not match");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        Swal.fire({
          icon: 'success',
          title: 'Sign-up  successfully',
          showConfirmButton: false,
          timer: 1500
        }) ; 

        navigate(from , {replace : true})
      })
      .catch((error) => console.error(error));
  };



  const handleLogin = () => {

    LoginWithGoogle().then(result => {
      Swal.fire({
        icon: 'success',
        title: 'Sign-up  successfully',
        showConfirmButton: false,
        timer: 1500
      }) ; 
      navigate(from , {replace : true});
  })
    
  };

  return (
    <div className="grid justify-items-center  m-10">
      <div className="card w-96  shadow-2xl ">
        <div className="card-body items-center text-center">
          <h1 className="text-2xl font-bold ">SIGNUP</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Type Email"
              className="input  mt-10 input-bordered w-full max-w-xs"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Type Password"
              className="input mt-10 input-bordered w-full max-w-xs"
              required
            />
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              className="input mt-10 input-bordered w-full max-w-xs"
              required
            />
            <input className="btn mt-10" type="submit" value="SIgnup" />
          </form>
          <p className="text-error">{error}</p>
          <div className="divider "></div>
          <button onClick={handleLogin} variant="outline-primary">
            {" "}
            <img
              className="g-logo w-10 h-10"
              src="https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png"
              alt=""
            />{" "}
          </button>
          <h1 className=" mt-10">
            Already have account?{" "}
            <Link className="underline underline-offset-1" to="/login">
              logIn
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;