import React from "react";
import logoAxu from "/assets/imgs/logoAxu.png";
import Image from "next/image";
export default function index() {
  return (
    <div className="flex h-screen items-center justify-center bg-loginBG">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-6 flex justify-center">
          <Image
            src="/assets/imgs/logoAxu.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12H9m6 0h.01M19 10a7 7 0 10-14 0 7 7 0 0014 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <a href="#" className="text-sm font-bold text-black hover:underline">
              Forgot Password?
            </a>
            <a href="#" className="text-sm font-bold text-primary hover:underline">
              Reset Password
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-primary px-4 py-2 text-white transition hover:bg-blue-600"
          >
            Login Now
          </button>
        </form>
      </div>
    </div>
  );
}
