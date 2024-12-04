import React from "react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="flex items-center space-x-4 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 p-4 shadow-md">
      <div className="flex items-center justify-center overflow-hidden rounded-full bg-loginBG align-middle">
        {/* <Image
          src="/assets/imgs/logoAxu.png"
          alt="Axuranze Logo"
          width={64}
          height={64}
          className="object-contain"
        /> */}
        <div className="w-fit rounded-full bg-white px-1 py-2">
          <Image
            src={"/assets/imgs/logoAxu.png"}
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-800">AXURANZE</h2>
        <p className="text-sm text-gray-600">axuranze@gmail.com</p>
      </div>
    </div>
  );
}
