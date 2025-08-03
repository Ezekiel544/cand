
import React, { useState } from 'react';
import './App.css'

const CongratulationsModal = () => {
  const [referralId] = useState('KXU17_RO');
  const [referralLink] = useState('https://www.candoxa.com/KXU17_RO');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-30"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, #1e40af 30%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
      
      <div 
        className="absolute bottom-0 left-0 w-64 h-64 opacity-20"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, #4338ca 30%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      {/* Main Modal */}
      <div className="w-full max-w-md relative z-10">
        {/* Modal Content */}
        <div 
          className="relative rounded-3xl p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(20px)'
          }}
        >
          {/* Top Glow Line */}
          <div 
            className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #3b82f6 50%, transparent 100%)'
            }}
          />

          {/* Header */}
          <div className="mb-8">
            <h1 
              className="text-4xl font-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, #9ca3af 0%, #d1d5db 50%, #f3f4f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Congratulations!
            </h1>
            <p className="text-white text-lg mb-2">
              You just earned 1 Doxa point
            </p>
            <p className="text-gray-300 text-sm">
              Refer friends and earn 1 point for each referral.
            </p>
          </div>

          {/* Referral Section */}
          <div className="space-y-4 mb-8">
            {/* Referral ID and Link */}
            <div className="flex space-x-3">
              {/* Referral ID */}
              <div 
                className="flex-1 relative rounded-xl p-4 cursor-pointer transition-all duration-200 hover:scale-105"
                onClick={() => copyToClipboard(referralId)}
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
                }}
              >
                <div className="text-xs text-blue-200 mb-1">Referral ID</div>
                <div className="text-white font-semibold">{referralId}</div>
                <div className="absolute top-3 right-3">
                  <svg className="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Referral Link */}
              <div 
                className="flex-1 relative rounded-xl p-4 cursor-pointer transition-all duration-200 hover:scale-105"
                onClick={() => copyToClipboard(referralLink)}
                style={{


background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
                }}
              >
                <div className="text-xs text-blue-200 mb-1">Referral Link</div>
                <div className="text-white font-semibold text-xs truncate">
                  {referralLink}
                </div>
                <div className="absolute top-3 right-3">
                  <svg className="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Invite Friends Button */}
            <button 
              className="w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                boxShadow: '0 6px 25px rgba(37, 99, 235, 0.4)'
              }}
            >
              Invite Friends
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsModal;