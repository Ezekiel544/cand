import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'; // Link to navigate
import React from 'react';
import candoxaImg from './assets/candoxa.jpg'
import userImg from './assets/user.jpg'
import Preloader from './preloader.jsx'; // Import your Preloader component
import { useNavigate, useLocation } from 'react-router-dom';
import {  useEffect } from 'react';
export default function OmniDemoLanding() {
  
const cards = [
  
  {
    title: 'Connect TikTok',
    description: 'Earn your spot by showing up early.',
    buttonText: 'Complete Task',
    badgeText: '1 Point',
    gradient: 'linear-gradient(135deg, #1a1f3a 0%, #0f1629 50%, #0a0f1c 100%)',
    buttonGradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
  },
  {
    title: 'Connect X',
    description: 'Earn your spot by showing up early.',
    buttonText: 'Complete Task',
    badgeText: '1 Point',
    gradient: 'linear-gradient(135deg, #1a1f3a 0%, #0f1629 50%, #0a0f1c 100%)',
    buttonGradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
  },
  {
    title: 'Follow Candoxa',
    description: 'Earn your spot by showing up early.',
    buttonText: 'Complete Task',
    badgeText: '1 Point',
    gradient: 'linear-gradient(135deg, #1a1f3a 0%, #0f1629 50%, #0a0f1c 100%)',
    buttonGradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
  },
  {
    title: 'Like & Repost',
    description: 'Earn your spot by showing up early.',
    buttonText: 'Complete Task',
    badgeText: '1 Point',
    gradient: 'linear-gradient(135deg, #1a1f3a 0%, #0f1629 50%, #0a0f1c 100%)',
    buttonGradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
  },
];
const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
     const [showPreloader, setShowPreloader] = useState(false);
     const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
useEffect(() => {
  if (showPreloader) {
    const timer = setTimeout(() => {
      navigate('/form'); // Navigate using the path, not the file path
    }, 2000); // Delay for 2 seconds before navigating to the form page
    return () => clearTimeout(timer); // Cleanup on component unmount
  }
}, [showPreloader, navigate]);

  // ❗ Make sure this return comes AFTER all hooks
  if (showPreloader) {
    return < Preloader/>;
  }
  return (
    <div className="min-h-screen   bg-[#02050E] text-white overflow-hidden">
      {/* bg-[#030514] */}
       {/* <div className="absolute inset-0 "></div> */}
      {/* bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20 */}
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center px-6 lg:px-12 py-6 bg-[#06081D]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border border-5">
            <img src={candoxaImg} alt="Logo" />
          </div>
          <span className="text-xl font-semibold">CANDOXA</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-16">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Leaderboard</a>
        </div>
        
        {/* Desktop Profile - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-2">
          <img src={userImg} alt="User Profile" className='w-6 h-6 rounded-full'/>
          <span className="text-gray-400 text-sm">Profile</span>
        </div>
        
        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu with dark background */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Overlay (background) */}
        <div 
          className="absolute inset-0 bg-black opacity-70"
          onClick={toggleMenu}
        ></div>
        
        {/* Menu Content */}
        <div className={`absolute top-0 right-0 h-full w-3/4 bg-black transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Close Button (Cancel) - Always visible */}
          <button 
            onClick={toggleMenu}
            className="absolute top-6 right-6 z-50 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-start p-8 space-y-8 mt-20">
            <a 
              href="#" 
              className="text-gray-300 hover:text-white text-xl transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white text-xl transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Leaderboard
            </a>

            {/* Mobile Profile Section */}
            <div className="flex items-center space-x-2 pt-8 border-t border-gray-800 w-full">
              <img src={userImg} alt="User Profile" className='w-8 h-8 rounded-full'/>
              <span className="text-gray-400 text-lg">Profile</span>
            </div>
          </div>
        </div>
      </div>
    

      {/* Main Content */}
      <div className=" relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 pt-2 lg:py-20  mt-24 md:mt-16">
        
        {/* Left Content */}
    <div className="w-full lg:w-1/3 text-center lg:text-left lg:mb-0 px-4 sm:px-0 lg:relative lg:top-[-80px]">
  <p className="text-2xl lg:text-4xl xl:text-4xl font-bold mb-6 leading-tight" style={{
              background: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 25%, #d1d5db 50%, #f3f4f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
    <span >Activate</span>{' '}
    <span >Opinions</span>

    <br className="hidden lg:block" />
    <span > Amplify</span>{' '}
    <span >Growth</span>
  </p>
</div>


        {/* Center - Glowing Image */}
        <div className="lg:w-1/3 flex justify-center mb-12 lg:mb-0 lg:relative lg:top-[30px] mt-10 sm:mt-0">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-3xl scale-150"></div>
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl scale-125"></div>
            
            {/* Replace this div with your image */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-full shadow-2xl">
              {/* Replace this div with an image if desired */}
              {/* <img src="your-image-path.jpg" alt="Your Image" className="w-full h-full object-cover rounded-full" /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-800/50 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/3 text-center lg:text-right lg:relative lg:top-[-70px]">
          <div className="space-y-4 text-gray-400 text-sm lg:text-base  mx-auto lg:mx-0 lg:ml-auto  pt-6 pb-12 mb-lg-0 w-full">
            <p style={{
              background: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 25%, #d1d5db 70%, #f3f4f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
              Cultivate the brand where
              clients will look for tomorrow
              our suite, simple solutions
            </p>
            <p style={{
              background: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 25%, #d1d5db 70%, #f3f4f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
              inspiring others was made easy
              with simple to get in the loop
            </p>
          </div>
        </div>
        
      </div>

      {/* Bottom Button */}
         {isLoading ? (
        <Preloader /> // Show Preloader component when isLoading is true
      ) : (
        <div className="relative z-10 flex justify-center">
          <button
           onClick={() => setShowPreloader(true)} // Trigger Preloader when button is clicked
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 mt-5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 mb-6"
          >
            Join waitlist
          </button>
        </div>
      )}

      {/* Additional glow effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>

      


     <section className="py-12 px-8 bg-[#030514]   ">
     
     <div className=" py-4 ">
     <div className="  py-12 ">
      <div className="max-w-full  text-center ">
        {/* Main Heading */}
        <h5 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span 
            className="block"
            style={{
              background: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 25%, #d1d5db 70%, #f3f4f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Complete Task to
          </span>
          <span 
            className="block "
            style={{
             background: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 25%, #d1d5db 70%, #f3f4f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Earn Doxa Points
          </span>
        </h5>

        {/* Subtitle */}
        <p 
          className="text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mx-auto"
          style={{
            color: '#9ca3af'
          }}
        >
          Earn DOXA by completing simple tasks, post, refer, engage, get rewarded.
        </p>
      </div>
    </div>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="w-full max-w-lg mx-auto ">
            <div 
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{
                background: card.gradient,
                border: '1px solid rgba(59, 130, 246, 0.3)',
              }}
            >
              {/* Top border gradient line */}
              <div 
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, #3b82f6 50%, transparent 100%)',
                }}
              />
              
              {/* Points Badge */}
              <div className="absolute top-4 right-4">
                <div 
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: 'rgba(30, 41, 59, 0.8)',
                    color: '#94a3b8',
                    border: '1px solid rgba(71, 85, 105, 0.5)',
                  }}
                >
                  {card.badgeText}
                </div>
              </div>

              {/* Content */}
              <div className="pt-2">
                <h2 className="text-white text-2xl font-semibold mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  {card.description}
                </p>

                {/* Complete Task Button */}
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
                  style={{
                    background: card.buttonGradient,
                    boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4)',
                  }}
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


<div className=" text-gray-400 py-12 px-6 ">
  <div className='border-t border-gray-600 pb-4 md:pb-24'></div>
      <div className="max-w-6xl mx-auto py-4 pt-md-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 ">
          {/* Candoxa Column */}
          <div >
            <h3 className="text-gray-500 text-sm font-medium mb-4">Candoxa</h3>
            <ul className="space-y-3 text-md">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms and Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-4">Developers</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Developers Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Ecosystem Column */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-4">Ecosystem</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Grants
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Logo Column */}
         <div className="flex justify-center  md:justify-end  ">
  {/* <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
      <div
        className="w-8 h-8 bg-white"
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
      />
    </div>
  </div> */}
 {/* <div className="w-8 h-8  flex items-center justify-center border border-5">
            <img src={candoxaImg} alt="Logo"  className='rounded-full'/>
          </div> */}
          <img src={candoxaImg} alt="Logo"  className='rounded-full w-20 h-20'/>
  
  {/* Left Border */}
  <div className="absolute right-40 top-0 bottom-0 border-l-2 border-gray-600 hidden md:block"></div>
</div>

        </div>

        {/* Copyright */}
        <div className=" pt-6">
          <p className="text-xs text-gray-500">
            Copyright © 2025 Candoxa Inc. All rights reserved
          </p>
        </div>
      </div>
    </div>

    
      </div>
  );
}
