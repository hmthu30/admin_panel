import React from 'react'
import Image from "next/image";
import InputPassword from './inputComponents/InputPassword';
import InputEmail from './inputComponents/InputEmail';

export default function LoginForm() {
  return (
<div className="w-full max-w-xl rounded-3xl bg-white p-12 shadow-lg">
        <div className="mb-12 flex justify-center">
          <Image
            src={"/assets/imgs/logoAxu.png"}
            alt="Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        <form>
          <div className="mb-4">
           <InputEmail />
          </div>

          <div className="mb-4">
            <InputPassword />
          </div>

          <div className="mb-6 flex items-center justify-between">
            <a href="#" className="text-md text-black hover:underline">
              Forgot Password?
            </a>
            <a href="#" className="text-md text-primary hover:underline">
              Reset Password
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-primary text-md px-6 py-3 text-white transition hover:bg-blue-600"
          >
            Login Now
          </button>
        </form>
      </div>
  )
}
