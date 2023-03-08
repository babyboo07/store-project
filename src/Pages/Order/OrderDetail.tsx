import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Layouts/Sidebar";
import Navbar from "../../Components/Layouts/Navbar";
import { IOrder, Order } from "../../common/InitObject";
import { useParams } from "react-router-dom";
import { detailOrder } from "../../services/fetchDataOrder";

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<IOrder>(Order);

  const fetchData = async () => {
    const orders = await detailOrder(id);
    if (orders != null) {
      setOrder(orders);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-5">
              <div className="w-full ">
                <div className="text-lg font-medium pb-1">Order detail</div>
                <div className="md:flex md:items-start mb-6">
                  <div className="md:w-1/4">
                    <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4">
                      Shop :
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <p>{order.shop}</p>
                  </div>
                </div>
                <div className="md:flex md:items-start mb-6">
                  <div className="md:w-1/4">
                    <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4">
                      Product Name :
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <p>{order.name}</p>
                    <p>{order.color}</p> {order.price}{" "}
                    <span className="text-gray-400">x {order.qty}</span>
                  </div>
                </div>
                {/* <div className="md:flex md:items-start mb-6">
                  <div className="md:w-1/4">
                    <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4">
                      Color :
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <p>{order.color}</p>
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/4">
                    <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4">
                      Price :
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <p>
                      {order.price} <span className="text-gray-400">x {order.qty}</span>
                    </p>
                  </div>
                </div> */}
                <hr />
                <div className="md:flex md:items-start mb-6">
                  <div className="md:w-1/4">
                    <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4">
                      Total :
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <p>{order.total}</p>
                  </div>
                </div>
                <div className="md:flex md:items-center">
                  <div className="md:w-1/3"></div>
                </div>
              </div>
            </div>
            <div className="bg-white border rounded-lg p-5">
              <div className="w-full">
                <div className=""></div>
                <div className="md:flex md:items-start mb-6">
                  <div className="md:w-1/4">
                    <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4">
                      Client :
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <p>{order.user}</p>
                  </div>
                </div>
                <div className="md:flex md:items-start mb-6">
                  <div className="md:w-1/4">
                    <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4">
                      Address :
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <p>{order.address}</p>
                  </div>
                </div>
                <div className="md:flex md:items-start mb-6">
                  <div className="md:w-1/4">
                    <label className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4">
                      Phone number :
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <p>0{order.phone_number}</p>
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

export default OrderDetail;
