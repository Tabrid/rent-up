import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const Swal = require('sweetalert2');



const Login = () => {

  const {signIn} = useContext(AuthContext);
  const {LoginWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
 const location = useLocation()
 const from = location.state?.from?.pathname|| '/';


  const handleSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email,password)
    .then(result =>{
      form.reset();
      Swal.fire({
        icon: 'success',
        title: 'login  successfully',
        showConfirmButton: false,
        timer: 1500
      }) ; 
      navigate(from , {replace : true})
    }) 
    .catch(error => console.error(error));
  }

  const handleLogin = (event) =>{
    LoginWithGoogle().then(result => {
      Swal.fire({
        icon: 'success',
        title: 'login  successfully',
        showConfirmButton: false,
        timer: 1500
      }) ; 
      navigate(from , {replace : true});
  }).catch(error => console.error(error));
  
  }


    return (
       <div className='grid justify-items-center m-10'>
         <div className="card w-96  shadow-2xl ">
  <div className="card-body items-center text-center ">
    <h1 className='text-2xl font-bold'>Sign In</h1>
  <form onSubmit={handleSubmit} className='mb-10'>
  <input type="email" name='email' placeholder="Type Email" className="input  mt-10 input-bordered w-full max-w-xs" />
  <input type="password" name='password' placeholder="Type Password" className="input mt-10 input-bordered w-full max-w-xs" />
  
  <input className=' btn w-3/4 mt-10' type="submit" value="Sign In" />
</form>
<div className="divider "></div>
<button onClick={handleLogin}   variant="outline-primary"> <img className='  w-10 h-10' src='https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png' alt=''/> </button>
<h1 className=' my-10 '>Are you new here? <Link className='underline underline-offset-1' to='/signup'>SignUp</Link></h1>
    
  </div>
</div>

       </div>
    );
};

export default Login;