import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Layouts/Sidebar";
import Navbar from "../../Components/Layouts/Navbar";
import { NavLink } from "react-router-dom";
import { ICateWithChildren, IColors, IFile } from "../../common/InitObject";
import { useForm } from "react-hook-form";
import { ListCategory } from "../../services/fetchDataCategory";
import { listColor } from "../../services/fetchDataColors";

const ProductEdit = () => {
  const [file, setFile] = useState<IFile | null>(null);
  const [cateWithChild, setCateWithChild] = useState<ICateWithChildren[]>([]);
  const [listColors, setlistColors] = useState<IColors[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validationName = { ...register("name", { required: true }) };
  const validationDescription = { ...register("description", { required: true }) };
  const validationColors_id = { ...register("color_id", { required: true }) };
  const validationCategory_id = { ...register("category_id", { required: true }) };
  const validationPrice = { ...register("price", { required: true }) };

  const handleChange = (e: any) => {
    console.log(e.target.files[0].name);
    const url = e.target.files[0].name;
    setFile(url);
    // setFile(URL.createObjectURL(url));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const listcate = await ListCategory();
    const colors = await listColor();
    if (listcate != null) {
      setCateWithChild(listcate);
    }
    if (colors != null) {
      setlistColors(colors);
    }
  };

  const productForm = (data: any) => {
    console.log(data);
  };
  return (
    <section className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-grow text-gray-800">
        <Navbar />
        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">Product</h1>
              <h2 className="text-gray-600 ml-0.5">Tailwind sponsors this program</h2>
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
          <div className="bg-white border rounded-lg p-5">
            <form className="grid gap-4 grid-cols-2" onSubmit={handleSubmit(productForm)}>
              <div className="mb-6">
                <label id="name" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="iPhone 14 Pro Max 128GB | Chính hãng VN/A"
                  {...validationName}
                />
                {errors.name && <p className="text-red-500 italic">This is required.</p>}
              </div>

              <div className="mb-6">
                <label id="price" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="$12.00"
                  {...validationPrice}
                  name="price"
                />
                {errors.price && <p className="text-red-500 italic">This is required.</p>}
              </div>

              <div className="mb-6">
                <label
                  id="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  className="form-select appearance-nonepx-3 py-1.5 text-base font-normal  bg-clip-padding bg-no-repeat  border-solid  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  aria-label="Default select example"
                  id="category_id"
                  {...validationCategory_id}
                  name="category_id"
                >
                  <option value={""}>Open this select menu</option>
                  {cateWithChild ? (
                    cateWithChild.length > 0 &&
                    cateWithChild.map((parent) => (
                      <option
                        className={parent.parent_id != null ? "ml-10" : ""}
                        key={parent.id}
                        value={parent.id}
                      >
                        {parent.name}
                      </option>
                    ))
                  ) : (
                    <></>
                  )}
                </select>
                {errors.category_id && <p className="text-red-500 italic">This is required.</p>}
              </div>

              <div className="mb-6">
                <label
                  id="colors"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Colors
                </label>
                <select
                  className="form-select appearance-nonepx-3 py-1.5 text-base font-normal  bg-clip-padding bg-no-repeat  border-solid  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  aria-label="Default select example"
                  id="color_id"
                  {...validationColors_id}
                  name="color_id"
                >
                  <option value={""}>Open this select menu</option>
                  {listColors ? (
                    listColors.length > 0 &&
                    listColors.map((col) => (
                      <option key={col.id} value={col.id}>
                        {col.color}
                      </option>
                    ))
                  ) : (
                    <></>
                  )}
                </select>
                {errors.color_id && <p className="text-red-500 italic">This is required.</p>}
              </div>

              <div className="mb-6">
                <label
                  id="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    // for="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                      {file ? (
                        <img
                          src={file?.name}
                          className={`h-32 w-4/5 rounded-lg ${file ? "opacity-1" : "opacity-0"}`}
                        />
                      ) : null}
                    </div>
                    <input type="file" multiple onChange={handleChange} className="opacity-0" />
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <label
                  id="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Description"
                  {...validationDescription}
                  name="description"
                ></textarea>
                {errors.description && <p className="text-red-500 italic">This is required.</p>}
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

export default ProductEdit;
