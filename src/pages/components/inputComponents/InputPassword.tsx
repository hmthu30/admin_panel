import React from "react";

export default function InputPassword() {
  return (
    <>
      <label
        htmlFor="password"
        className="mb-2 block text-md font-medium text-gray-600"
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
    </>
  );
}
