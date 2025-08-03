// pages/forgot-password.js

import Image from "next/image";
import React from "react";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 py-20 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Forget Password ?
        </h2>

        <div className="flex justify-center mb-6">
          {/* Email icon */}
          <Image src="/email.png" alt="email icon" width={100} height={100} />
        </div>

        <form>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-button-background"
          />
          <button
            type="submit"
            className="w-full bg-button-background text-white py-2 rounded-md transition cursor-pointer"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
