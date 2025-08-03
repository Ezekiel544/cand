import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { db, addDoc, collection, query, where, getDocs } from './firebase'; // Import Firebase functions




const EarlyAccessForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    xHandle: '',
    tiktokHandle: '',
    referralCode: ''
  });
const [isFollowingX, setIsFollowingX] = useState(false);
const [xFollowed, setXFollowed] = useState(false);
const [isFollowingTikTok, setIsFollowingTikTok] = useState(false);
const [tiktokFollowed, setTikTokFollowed] = useState(false);


  const [isTyping, setIsTyping] = useState({
    email: false,
    xHandle: false,
    tiktokHandle: false,
    referralCode: false,
  });

  const [isValid, setIsValid] = useState({
    email: false,
    xHandle: false,
    tiktokHandle: false,
    referralCode: false,
  });

  const [emailExists, setEmailExists] = useState(false); // State to track if the email exists in Firestore
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // Navigation hook

  // Function to check if email already exists in Firestore
  const checkEmailExists = async (email) => {
    const q = query(collection(db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty; // Returns true if email exists
  };

  useEffect(() => {
    const checkEmail = async () => {
      if (formData.email) {
        const emailRegistered = await checkEmailExists(formData.email);
        setEmailExists(emailRegistered);
      }
    };

    checkEmail();
  }, [formData.email]); // Check email existence whenever the email field changes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setIsTyping((prev) => ({
      ...prev,
      [name]: true
    }));

    // Email validation
    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setIsValid((prev) => ({
        ...prev,
        [name]: emailRegex.test(value)
      }));
    } else {
      setIsValid((prev) => ({
        ...prev,
        [name]: value.trim() !== ''
      }));
    }
// X Handle validation
  if (name === 'xHandle') {
    const isValidHandle = value.length >= 4 && value.length <= 15;
    setIsValid((prev) => ({
      ...prev,
      [name]: isValidHandle
    }));
  }
  // X tictok validation
    if (name === 'tiktokHandle') {
    const isValidHandle = value.length >= 3 && value.length <= 24;
    setIsValid((prev) => ({
      ...prev,
      [name]: isValidHandle
    }));
  }
    // Simulate typing stop after 500ms
    setTimeout(() => {
      setIsTyping((prev) => ({
        ...prev,
        [name]: false
      }));
    }, 500);
  };

  // Check if all fields are filled
  const allFieldsFilled =
    formData.email &&
    formData.xHandle &&
    formData.tiktokHandle &&
    formData.referralCode &&
    isValid.email;

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    setIsSubmitting(true); // Show loading spinner on submit

    // Save data to Firestore
    try {
      await addDoc(collection(db, 'users'), formData);

      // Wait for 2 seconds to simulate submission
      setTimeout(() => {
        setIsSubmitting(false); // Hide spinner
        navigate('/congrats'); // Navigate to the "Congratulations" page
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false); // Hide spinner on error
    }
  };

  return (
    <div className="min-h-screen bg-[#03030B] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 50%, #d1d5db 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Get early access
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Be among the first to experience CANDOXA<br />
            Sign up to be notified when we launch.
          </p>
        </div>

        {/* Form Container */}
        <div
          className="relative rounded-2xl p-8 bg-[#06081D]"
          style={{
            border: '1px solid rgba(59, 130, 246, 0.3)',
            boxShadow: '0 -10px 20px rgba(59, 130, 246, 0.2), inset 0 -10px 20px rgba(59, 130, 246, 0.1)'
          }}
        >
          <div className="space-y-6">
            {/* Email Input */}
<div className="relative">
  <input
    type="email"
    name="email"
    placeholder="name@gmail.com"
    value={formData.email}
    onChange={handleInputChange}
    className={`w-full bg-transparent border rounded-lg px-4 py-3 text-white placeholder-gray-400 placeholder:text-sm sm:placeholder:text-base focus:outline-none transition-colors ${emailExists ? 'border-red-500' : 'border-gray-600'}  pr-10`}
    style={{ backgroundColor: '#060318' }}
  />

  <span className="text-xs text-gray-500 mt-1 block">
    {emailExists ? 'Email already registered' : 'Optional'}
  </span>

  <div className="absolute right-2 top-1/3 transform -translate-y-1/2 flex items-center justify-center ">
    {isTyping.email ? (
      <div className="w-6 h-6 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
    ) : isValid.email && formData.email !== '' && !emailExists ? (
      <div className="w-6 h-6 text-green-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    ) : null}
  </div>
</div>
    {/* X Handle Input */}
         <div className="relative">
              <input 
                type="text"
                name="xHandle"
                placeholder="Enter X Handle "
                value={formData.xHandle}
                onChange={handleInputChange}
                className={`w-full bg-transparent border rounded-lg px-4 py-3 text-white placeholder-gray-400  placeholder:text-sm sm:placeholder:text-base focus:outline-none transition-colors ${!isValid.xHandle && formData.xHandle !== '' ? 'border-red-500' : 'border-gray-600'} pr-10`}
                style={{ backgroundColor: '#060318' }}
              />

              
              <span className="text-xs text-gray-500 mt-1 block">
                {!isValid.xHandle && formData.xHandle !== '' ? 'X Username must be between 4-15 characters' : 'Optional'}
              </span>
              <div className="absolute right-4  top-1/3 transform -translate-y-1/2 flex items-center justify-center ">
                {isTyping.xHandle ? (
                  <div className="w-6 h-6 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
                ) : (isValid.xHandle && formData.xHandle !== '') ? (
                  <div className="w-6 h-6 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                    
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : null}
              </div>
            </div>


{/* diisabled xhandle   */}

<div className="relative">
  {/* Disabled input field */}
  <input
    type="text"
    name="xHandle"
    className="w-full bg-transparent border pointer-events-none rounded-lg px-4 py-3 pb-4 text-white placeholder-gray-400 focus:outline-none transition-colors border-gray-600 pr-14"
    style={{ backgroundColor: '#060318' }}
   
    disabled  // Adding this disables the input field
  />

  {/* Follow on X Button */}
  <button
    type="button"
    onClick={() => {
      setIsFollowingX(true);
      setTimeout(() => {
        setIsFollowingX(false);
        setXFollowed(true);
        window.open('https://twitter.com/yourHandleHere', '_blank');
      }, 2000);
    }}
    disabled={xFollowed}
    className={`absolute left-0 top-0 ms-2 mt-1 px-4 sm:px-8 py-3 rounded-md text-white text-sm font-semibold transition
      ${xFollowed ? 'bg-green-600 hover:bg-green-700' : 'bg-[#ff0050]  hover:bg-[#e60047]'}`}
  >
    {xFollowed ? 'Completed' : 'Follow on X'}
  </button>

  {/* Spinner or Checkmark aligned to far right */}
  <div className="absolute right-2 top-3">
    {isFollowingX ? (
      <div className="w-6 h-6 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    ) : xFollowed ? (
      <div className="w-6 h-6 text-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    ) : null}
  </div>

  {/* Optional hint */}
  <span className="text-xs text-gray-500 mt-1 block">Optional</span>
</div>


    {/* disabled tictok  */}
  <div className="relative">
  {/* Disabled input field */}
  <input
    type="text"
    name="tiktokHandle"
    className="w-full bg-transparent border  rounded-lg px-4 py-3 pb-4 text-white placeholder-gray-400  focus:outline-none transition-colors border-gray-600 pr-14"
    style={{ backgroundColor: '#060318' }}
    // value={formData.tiktokHandle}
     disabled  
  />

  {/* Follow on TikTok Button */}
  <button
    type="button"
    onClick={() => {
      setIsFollowingTikTok(true);
      setTimeout(() => {
        setIsFollowingTikTok(false);
        setTikTokFollowed(true);
        window.open('https://www.tiktok.com/@yourHandleHere', '_blank');
      }, 2000);
    }}
    disabled={tiktokFollowed}
    className={`absolute left-0 top-0 ms-2 mt-1 px-4 sm:px-8 py-3 rounded-md text-white text-sm font-semibold transition
      ${tiktokFollowed ? 'bg-green-600 hover:bg-green-700' : 'bg-[#ff0050] hover:bg-[#e60047]'}`}
  >
    {tiktokFollowed ? 'Completed' : 'Follow on TikTok'}
  </button>

  {/* Spinner or Checkmark aligned to far right */}
  <div className="absolute right-2 top-3">
    {isFollowingTikTok ? (
      <div className="w-6 h-6 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    ) : tiktokFollowed ? (
      <div className="w-6 h-6 text-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    ) : null}
  </div>

  {/* Optional hint */}
  <span className="text-xs text-gray-500 mt-1 block">Optional</span>
</div>



            {/* TikTok Handle Input */}
   
<div className="relative">
  <input
    type="text"
    name="tiktokHandle"
    placeholder="Enter TikTok Handle "
    value={formData.tiktokHandle}
    onChange={handleInputChange}
    className={`w-full bg-transparent border rounded-lg px-4 py-3 text-white placeholder-gray-400  placeholder:text-sm sm:placeholder:text-base  focus:outline-none transition-colors ${!isValid.tiktokHandle && formData.tiktokHandle !== '' ? 'border-red-500' : 'border-gray-600'} pr-10`}
    style={{ backgroundColor: '#060318' }}
  />
  <span className="text-xs text-gray-500 mt-1 block">
    {!isValid.tiktokHandle && formData.tiktokHandle !== '' ? 'Ticktok username must be between 3-24 characters' : 'Optional'}
  </span>
  <div className="absolute right-4  top-1/3 transform -translate-y-1/2 flex items-center justify-center">
    {isTyping.tiktokHandle ? (
      <div className="w-6 h-6 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
    ) : (isValid.tiktokHandle && formData.tiktokHandle !== '') ? (
      <div className="w-6 h-6 text-green-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    ) : null}
  </div>
</div>


            {/* Referral Code Input */}
            <div className="relative">
              <input
                type="text"
                name="referralCode"
                placeholder="Enter Referral Code"
                value={formData.referralCode}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400  placeholder:text-sm sm:placeholder:text-base  focus:outline-none focus:border-blue-500 transition-colors"
                style={{ backgroundColor: '#060318' }}
              />
              <span className="text-xs text-gray-500 mt-1 block">Optional</span>
              <div className="absolute right-4 top-3">
                {isTyping.referralCode ? (
                  <div className="w-6 h-6 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
                ) : (isValid.referralCode && formData.referralCode !== '') ? (
                  <div className="w-6 h-6 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Submit Button */}
            {/* <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={!allFieldsFilled || isSubmitting || emailExists}
                className={`px-12 py-3 mt-5 rounded-full font-medium transition-all duration-300 mb-6 mx-auto ${
                  allFieldsFilled && !emailExists ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-4 border-white border-t-blue-500 rounded-full animate-spin mx-auto" />
                ) : (
                  'Submit'
                )}
              </button>
            </div> */}
          </div>
        </div>
        {/* Submit Button */}
         <div className="flex justify-center">
        <button
  onClick={handleSubmit}
  disabled={!allFieldsFilled || isSubmitting || emailExists || !tiktokFollowed ||!xFollowed } 
  className={`px-12 py-3 mt-5 rounded-full font-medium transition-all duration-300 mb-6 mx-auto ${
    allFieldsFilled && !emailExists && xFollowed && tiktokFollowed
      ? 'bg-blue-600 hover:bg-blue-700 text-white'
      : 'bg-gray-600 text-gray-300 cursor-not-allowed'
  }`}
>
  {isSubmitting ? (
    <div className="w-5 h-5 border-4 border-white border-t-blue-500 rounded-full animate-spin mx-auto" />
  ) : (
    'Submit'
  )}
</button>

            </div>
      </div>
    </div>
  );
};

export default EarlyAccessForm;
