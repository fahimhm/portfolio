import { useState } from 'react';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

const LoginPage = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = (e) => {
    e.preventDefault()
  };

  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="font-sans text-gray-900 antialiased">
      <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#f8f4f3]">
        <div>
          <a href="/">
            <h2 className="font-bold text-3xl">MAINTENANCE MANAGEMENT <span className="bg-[#f84525] text-white px-2 rounded-md">SYSTEM</span></h2>
          </a>
        </div>

        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <form onSubmit={loginUser} method="post">
            <div className="py-8">
              <center>
                <span className="text-2xl font-semibold">Log In</span>
              </center>
            </div>

            <FormInput condition={true} data={data} setData={setData} placeholder='Email' />

            <FormInput condition={false} data={data} setData={setData} showPassword={showPassword} setShowPassword={setShowPassword} placeholder='Password' />

            <div className="mt-4 flex items-center justify-between">
              <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                <input type="checkbox" name="" id="checkRemember" className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary" />
                <label htmlFor="checkRemember" className="inline-block ps-[0.15rem] hover:cursor-pointer text-gray-600">Remember Me</label>
              </div>
              <a href="/" className="text-gray-600">Forgot password?</a>
            </div>

            <FormButton buttonName='Log In' textNoLink='Don&#39;t have an account?' linkTo='/register_page' textLink='Register' />

          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;