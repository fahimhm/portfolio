import { useState } from 'react';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

const RegisterPage = () => {
  const [data, setData] = useState({
    email: '',
    username: '',
    password: '',
  })

  const registerUser = (e) => {
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
          <form onSubmit={registerUser} method="post">
            <div className="py-8">
              <center>
                <span className="text-2xl font-semibold">Register</span>
              </center>
            </div>

            {/* for email input */}
            <FormInput condition={true} data={data} setData={setData} placeholder='Email' />

            {/* for username input */}
            <FormInput condition={true} data={data} setData={setData} placeholder='Username' />

            {/* for password input */}
            <FormInput condition={false} data={data} setData={setData} showPassword={showPassword} setShowPassword={setShowPassword} placeholder='Your password' />

            {/* for confirm password input */}
            <FormInput condition={false} data={data} setData={setData} showPassword={showPassword} setShowPassword={setShowPassword} placeholder='Confirm your password' />

            <FormButton buttonName='Sign Up' textNoLink='Already have account?' linkTo='/maintenance_management' textLink='Sign In' />

          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;