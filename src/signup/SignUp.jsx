import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import anim from '../lotti.json';
import Lottie from 'lottie-react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [signuperror, setSignuperror] = useState('');
  const { register, formState: {errors}, handleSubmit } = useForm();
  const{createUser, updateUser}=useContext(AuthContext);
  const navigate = useNavigate();

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = data => {
    setSignuperror('')
    console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
      const user = result.user;
      const userInfo = {
        displayName: data.name
      };

      updateUser(userInfo)
      .then(() => {
        toast.success(`${user?.displayName} login successfully`); // Use backticks for string interpolation
      navigate('/')
      })
      .catch(err => console.log(err));
    })
    .catch(err => setSignuperror(err.message));
  };

  return (
      <section className='mt-10 px-10'>
        <div class="container h-full">
          <div
            class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12">
              <Lottie animationData={anim} />
            </div>

            <div class="md:w-8/12 lg:ml-6 lg:w-5/12 mb-10 w-full">
              <h1 className='text-3xl font-mono text-center my-8'>SIGN UP NOW</h1>
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div class="relative mb-6">
                  <input type="text" {...register("name", {
                    required: "name is required",

                    })} placeholder="Name" className="input input-bordered w-full"/>
                    {errors.name && <p className='text-red-400 mt-1'>{errors.name.message}</p>}
                </div>
                <div class="relative mb-6">
                  <input type="text" {...register("email", 
                  {
                    required: "Email address is required"
                    })} placeholder="Email address" className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-400 mt-1'>{errors.email.message}</p>}
                </div>

                <div className="relative">
                    <input
                      {...register("password", {
                        required: "password must be at",
                        minLength: {
                          value: 6,
                          message: "password must be at least 6 characters"
                        },
                      })}
                      placeholder="password "
                      type={showPassword ? "password" : "text"}
                      className="input input-bordered w-full"
                    />
                    <p className='text-red-400 mt-1'>{errors.password?.message}</p>
                    <button
                      type="button"
                      className="absolute top-4 right-4 focus:outline-none"
                      onClick={handlePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                <div class="mb-4 mt-2 pl-2 flex items-center justify-between">
                  <div class=" block">
                    <Link to="/login"
                      class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >I have account !</Link>
                  </div>
                </div>
                <p className='text-red-400'>{signuperror}</p>
<input type="submit" className='btn btn-primary w-full' value='Sign up'/>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default SignUp;