// pages/index.js
"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tailspin } from "ldrs/react";
import "ldrs/react/Tailspin.css";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import apiUrl from "@/helper/apiUrl";

export default function Signup() {
  const [activeTab, setActiveTab] = useState("admin");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // function to handle sigUp
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.department
    ) {
      toast.warning("Please fill all the fields");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${apiUrl}/users/register`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: activeTab,
          department: formData.department,
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
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          department: "",
        });
        router.push("/dashboard");
        // console.log(response.data);
      }
    } catch (error) {
      // console.log(error.response);
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
          <h2 className="text-2xl font-bold text-primary mb-6">
            Create Your Account
          </h2>

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
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:button-background"
            />
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
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Conform your password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:button-background"
            />

            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter your Department"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:button-background"
            />
            <button
              type="submit"
              className={`w-full py-2 cursor-not-allowed bg-button-background text-white rounded  
              ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}
              `}
              onClick={handleSignUp}
            >
              {isLoading ? (
                <Tailspin size="25" stroke="3" speed="0.9" color="white" />
              ) : (
                "Signup"
              )}
            </button>
          </form>

          <div className="flex items-center justify-between mt-2">
            <Link
              href="/login"
              className="text-xs text-button-background hover:underline"
            >
              Already have an account?
            </Link>
          </div>
        </div>

        {/* Right Section - Illustration */}
        <div className="w-1/2 bg-blue-50 flex items-center justify-center">
          <Image
            src="/signup.png"
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
