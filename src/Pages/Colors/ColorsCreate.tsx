import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Layouts/Sidebar";
import Navbar from "../../Components/Layouts/Navbar";
import { useForm } from "react-hook-form";
import { createColor } from "../../services/fetchDataColors";

const ColorsCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validationName = { ...register("color", { required: true }) };
  const validationRgb = { ...register("rgb", { required: true }) };

  const colorsForm = (data: any) => {
    console.log(data);
    createColor(data);
  };

  return (
    <section className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-grow text-gray-800">
        <Navbar />
        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">Table</h1>
              <h2 className="text-gray-600 ml-0.5">Tailwind sponsors this program</h2>
              <div className="mt-3">
                <Link
                  to={"/colors"}
                  className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white border rounded-lg p-5 w-2/5">
            <form onSubmit={handleSubmit(colorsForm)}>
              <div className="mb-6">
                <label id="color" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Name
                </label>
                <input
                  type="text"
                  id="color"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Colors"
                  {...validationName}
                />
                {errors.color && <p className="text-red-500 italic">This is required.</p>}
              </div>

              <div className="mb-6">
                <label id="username" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Rgb :
                </label>
                <input
                  type="color"
                  id="rgb"
                  className="bg-gray-50 border h-16 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Colors"
                  {...validationRgb}
                />
                {errors.rgb && <p className="text-red-500 italic">This is required.</p>}
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              >
                Submit
              </button>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ColorsCreate;
