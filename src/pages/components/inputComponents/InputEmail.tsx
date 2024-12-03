import React from "react";

export default function InputEmail() {
  return (
    <>
      <label
        htmlFor="email"
        className="mb-2 block text-md font-medium text-gray-600"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter email"
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </>
  );
}
