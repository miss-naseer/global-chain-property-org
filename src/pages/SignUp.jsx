import React, { useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const GOLD = '#DEC05F';
  const [formState, setFormState] = useState({});

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sign Up successful!');
    navigate('/kycpersonal');
  };

  return (
    <AuthLayout title="Create Your GlobalChain Account">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Full Name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#DEC05F] outline-none focus:border-transparent transition" />
        <input type="email" placeholder="Email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#DEC05F] outline-none focus:border-transparent transition" />
        <input type="password" placeholder="Password" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#DEC05F] outline-none focus:border-transparent transition" />
        
        <div className="pt-2">
            <button
              type="submit"
              className={`w-full bg-[${GOLD}] shadow-[${GOLD}]/60 text-white font-bold py-3 rounded-lg shadow-md transition duration-300 hover:scale-103 hover:bg-opacity-90`}
            >
              Sign Up
            </button>
        </div>
      </form>
      <p className="mt-4 text-center text-sm text-gray-500">
        Already have an account? <b><a href="/login" className={`text-[${GOLD}] hover:underline`}>Log In</a></b>
      </p>
    </AuthLayout>
  );
};

export default SignUp;
