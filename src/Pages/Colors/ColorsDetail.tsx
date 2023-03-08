import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Layouts/Sidebar";
import Navbar from "../../Components/Layouts/Navbar";
import { infoColor } from "../../services/fetchDataColors";
import { Link, useParams } from "react-router-dom";

const ColorsDetail = () => {
  const { id } = useParams();
  const [color, setColor] = useState<string>("");
  const [rgb, setRGB] = useState<string>("");

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

  return (
    <section className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-grow text-gray-800">
        <Navbar />
        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">Detail</h1>
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
          <div className="bg-white border rounded-lg p-5 w-3/5">
            <div className="w-full ">
              <div className="md:flex md:items-start mb-6">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4">
                    Color :
                  </label>
                </div>
                <div className="md:w-2/3">
                  <p>{color}</p>
                </div>
              </div>
              <div className="md:flex md:items-start mb-6">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4">Rgb :</label>
                </div>
                <div className="md:w-2/3">
                  <input className="w-1/2" type="color" value={rgb} />
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ColorsDetail;
