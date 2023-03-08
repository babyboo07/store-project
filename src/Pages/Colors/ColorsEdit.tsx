import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../Components/Layouts/Sidebar";
import Navbar from "../../Components/Layouts/Navbar";
import { useForm } from "react-hook-form";
import { infoColor, updateColor } from "../../services/fetchDataColors";

const ColorsEdit = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [color, setColor] = useState<string>();
  const [rgb, setRGB] = useState<string>();

  const validationName = { ...register("color", { required: true }) };
  const validationRgb = { ...register("rgb", { required: true }) };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const colors = await infoColor(id);
    if (colors != null) {
      setColor(colors.color);
      setRGB(colors.rgb);
    }
  };

  const colorsForm = (data: any) => {
    console.log(data);
    updateColor(id, data);
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
            <div className="flex flex-wrap items-start justify-end -mb-3">
              <NavLink
                to={"/table"}
                className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3"
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                Manage dashboard
              </NavLink>
              <NavLink
                to={"/"}
                className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3"
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Create new dashboard
              </NavLink>
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
                  value={color}
                  {...validationName}
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
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
                  value={rgb}
                  {...validationRgb}
                  onChange={(e) => {
                    setRGB(e.target.value);
                  }}
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

export default ColorsEdit;
