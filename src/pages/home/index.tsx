import Image from "next/image";
import React from "react";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  return (
    // <div className="min-h-screen bg-green-300">
    //   <div className="min-h-screen w-[250px] bg-white p-3">
    //     <div className="bg-gray-600 p-3">
    //       <div className="flex-1">
    //         <div className="w-fit rounded-full bg-white px-3 py-4">
    //           <Image
    //             src={"/assets/imgs/logoAxu.png"}
    //             alt="Logo"
    //             width={50}
    //             height={50}
    //             className="object-contain"
    //           />
    //         </div>
    //       </div>
    //       <div className="flex-3">
    //         <h1>Hello</h1>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-center p-5">HOME</div>
    // </div>

    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-50 p-4">
        <div className="mb-6 text-center">
          <ProfileCard />
        </div>
        <nav className="space-y-2">
          <a
            href="#"
            className="block rounded-md bg-blue-100 px-4 py-2 font-semibold text-blue-500"
          >
            Dashboard
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700">
            Reports
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700">
            Products
          </a>
          <a
            href="#"
            className="block rounded-md bg-blue-100 px-4 py-2 text-blue-500"
          >
            Plans
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700">
            Client Management
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700">
            User Management
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700">
            Companies
          </a>
        </nav>
        <div className="bottom-0">
          <button className="font-bold text-red-500">Logout</button>
        </div>
      </aside>

      <main className="flex-1 bg-gray-50 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Plans</h2>
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
            + Add New Plan
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full rounded-lg bg-white text-left shadow-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Product Code</th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2">Smoke</th>
                <th className="px-4 py-2">Age From</th>
                <th className="px-4 py-2">Age To</th>
                <th className="px-4 py-2">Premium Rate ($)</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">12345</td>
                  <td className="px-4 py-2">Female</td>
                  <td className="px-4 py-2">Yes</td>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">15</td>
                  <td className="px-4 py-2">10,000</td>
                  <td className="flex space-x-2 px-4 py-2">
                    <button className="text-blue-500">✏️</button>
                    <button className="text-red-500">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="space-x-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`rounded px-3 py-1 ${
                  page === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
