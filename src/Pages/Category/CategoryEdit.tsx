import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DetailCategory, getCategoryParent } from "../../services/fetchDataCategory";
import { CateWithChildren, ICateWithChildren, ICategory } from "../../common/InitObject";
import Sidebar from "../../Components/Layouts/Sidebar";
import Navbar from "../../Components/Layouts/Navbar";
import { useParams } from "react-router-dom";

const CategoryEdit = () => {
  const { id } = useParams();
  const [listParent, setListParent] = useState<ICategory[]>([]);
  const [category, setCatgory] = useState<ICateWithChildren>(CateWithChildren);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validationName = { ...register("name", { required: true }) };
  const validationParent = { ...register("parent_id") };

  useEffect(() => {
    fetchData();
    fetchInfoCate();
  }, []);

  const fetchInfoCate = async () => {
    const cate = await DetailCategory(id);
    if (cate != null) {
      setCatgory(cate);
    }
  };

  const fetchData = async () => {
    const categories = await getCategoryParent();
    if (categories != null) {
      setListParent(categories);
    }
  };

  const CategoryForm = (data: any) => {
    console.log(data);
    // CreateCategory(data);
  };

  return (
    <section className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-grow text-gray-800">
        <Navbar />
        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">Category</h1>
              <h2 className="text-gray-600 ml-0.5">Tailwind sponsors this program</h2>
            </div>
          </div>
          <div className="bg-white border rounded-lg p-5 w-2/5">
            <form onSubmit={handleSubmit(CategoryForm)}>
              <div className="mb-6">
                <label id="name" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Apple"
                  value={category.name}
                  {...validationName}
                />
                {errors.name && <p className="text-red-500 italic">This is required.</p>}
              </div>
              <div className="mb-6">
                <label
                  id="parent_id"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Old Category
                </label>
                <select
                  className="form-select appearance-nonepx-3 py-1.5 text-base font-normal  bg-clip-padding bg-no-repeat  border-solid  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  id="parent_id"
                  {...validationParent}
                  name="parent_id"
                >
                  <option value="">Open this select menu</option>
                  {listParent.length > 0 &&
                    listParent.map((cate) => (
                      <option key={cate.id} value={cate.id}>
                        {cate.name}
                      </option>
                    ))}
                </select>
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

export default CategoryEdit;
