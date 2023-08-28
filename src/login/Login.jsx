import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import anim from '../lotti.json';
import Lottie from 'lottie-react';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const{loginUser}=useContext(AuthContext);
  const navigate = useNavigate();
  const[loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(true);

const handleLogin = data => {
  setLoginError('')
  loginUser(data.email, data.password)
  .then(result => {
    const user = result.user;
    console.log(user);
    toast.success(`${user?.displayName} login successfully`); // Use backticks for string interpolation
    navigate('/');
})
  .catch(err =>{
    setLoginError(err.message)
  });
};

const handlePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

    return (
       <div>
  <section className='p-10'>
  <div class="container h-full">
    <div
      class="flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div class=" md:w-8/12 lg:w-5/12">
      <Lottie animationData={anim}/>
      </div>
      <div class="md:w-8/12 lg:ml-6 lg:w-5/12 w-full">
        <h1 className='text-3xl font-mono text-center my-8'>Login Now</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
        <div class="relative mb-6">
          <input type="text" {...register("email")} placeholder="Email address" className="input input-bordered w-full"/>
          </div>

          <div className="relative">
                    <input
                      {...register("password")}
                      placeholder="password "
                      type={showPassword ? "password" : "text"}
                      className="input input-bordered w-full"
                    />
                    <button
                      type="button"
                      className="absolute top-4 right-4 focus:outline-none"
                      onClick={handlePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

          <div class="mb-4 flex mt-2 items-center justify-between">
            <div class="block">
              <Link to='/signUp'
                class="inline-block text-primary pl-[0.15rem] hover:cursor-pointer"
                for="exampleCheck3">
                Create a account !
              </Link>
            </div>

            <a
              href="#!"
              class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >Forgot password?</a
            >
          </div>
          <p className='text-red-400 mb-3'>{loginError}</p>

         <input type="submit" value='Sign in' className='btn w-full btn-primary'/>

          <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>
          <a
            class="mb-3 btn flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
            style={{backgroundColor: "#55acee"}}
            href="#!"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light">
              <FcGoogle className='text-xl'/>
            Continue with Google
          </a>
          <a
            class="mb-10 btn flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            style={{backgroundColor: "#3b5998"}}
            href="#!"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            Continue with Facebook
          </a>
          
        </form>
      </div>
    </div>
  </div>
</section>
       </div>
    );
};

export default Login;