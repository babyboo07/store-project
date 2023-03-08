import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Layouts/Sidebar";
import Navbar from "../../Components/Layouts/Navbar";
import { DetailCategory } from "../../services/fetchDataCategory";
import { useParams } from "react-router-dom";
import { CateWithChildren, ICateWithChildren } from "../../common/InitObject";

const CategoryDetail = () => {
  const { id } = useParams();
  const [category, setCatgory] = useState<ICateWithChildren>(CateWithChildren);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const cate = await DetailCategory(id);
    if (cate != null) {
      setCatgory(cate);
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
            </div>
          </div>
          <div className="bg-white border rounded-lg p-5 w-3/5">
            <div className="w-full ">
              <div className="md:flex md:items-start mb-6">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4">Name :</label>
                </div>
                <div className="md:w-2/3">
                  <p>{category.name}</p>
                </div>
              </div>
              <div className="md:flex md:items-start mb-6">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4">
                    Children :
                  </label>
                  <div className="md:w-2/3">
                    {category.children
                      ? category.children.length > 0 &&
                        category.children.map((child) => (
                          <span
                            key={child.id}
                            className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
                          >
                            {child.name}
                          </span>
                        ))
                      : category.parent
                      ? (
                          <span
                            className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
                          >
                            {category.parent[0].name}
                          </span>
                        )
                      : null}
                  </div>
                  <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default CategoryDetail;
