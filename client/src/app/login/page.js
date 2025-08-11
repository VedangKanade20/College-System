// pages/index.js
"use client";

import apiUrl from "@/helper/apiUrl";
import axios from "axios";
import { Tailspin } from "ldrs/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Login() {
  const [activeTab, setActiveTab] = useState("admin");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // function to handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.warning("Please fill all the fields");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${apiUrl}/users/login`,
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true, // to send cookies with the request
        }
      );
      if (response.status === 200) {
        toast.success(response.data.message, {
          duration: 3000,
        });
        setFormData({
          email: "",
          password: "",
        });
        router.push("/dashboard");
        // console.log(response.data);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

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
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:button-background"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:button-background"
            />
            <button
              type="submit"
              className={`w-full py-2 cursor-not-allowed bg-button-background text-white rounded  
              ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}
              `}
              onClick={handleLogin}
            >
              {isLoading ? (
                <Tailspin size="25" stroke="3" speed="0.9" color="white" />
              ) : (
                "Login"
              )}
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
