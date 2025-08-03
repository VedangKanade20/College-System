// pages/index.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [activeTab, setActiveTab] = useState("admin");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-[900px] flex overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-bold text-primary mb-1">
            Login to Your Account
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Welcome back! Please enter your details.
          </p>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-6 py-1 rounded border cursor-pointer ${
                activeTab === "admin"
                  ? "bg-button-background text-white"
                  : "border-button-background text-button-background"
              }`}
              onClick={() => setActiveTab("admin")}
            >
              ADMIN
            </button>
            <button
              className={`px-6 py-1 rounded border cursor-pointer ${
                activeTab === "faculty"
                  ? "bg-button-background text-white"
                  : "border-button-background text-button-background"
              }`}
              onClick={() => setActiveTab("faculty")}
            >
              FACULTY
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:button-background"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:button-background"
            />
            <button
              type="submit"
              className="w-full py-2 bg-button-background text-white rounded cursor-pointer"
            >
              Login
            </button>
          </form>

          <div className="flex items-center justify-between mt-2">
            <Link
              href="/signup"
              className="text-xs text-button-background hover:underline"
            >
              Don&apos;t have account?
            </Link>
            <Link
              href="/forget-password"
              className="text-xs text-button-background hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* OR divider */}
          {/* <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-2 text-sm text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div> */}

          {/* Google Login */}
          {/* <button className="w-full cursor-pointer py-2 border flex justify-center items-center gap-2 rounded hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Login with Google
          </button> */}
        </div>

        {/* Right Section - Illustration */}
        <div className="w-1/2 bg-blue-50 flex items-center justify-center">
          <Image
            src="/login.png"
            alt="Illustration"
            width={500}
            height={500}
            className="w-3/4 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
