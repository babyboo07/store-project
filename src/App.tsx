import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Table from "./Pages/Table";
import Edit from "./Pages/Edit";
import Create from "./Pages/Create";
import Detail from "./Pages/Detail";
import { IUsers, Users } from "./common/InitObject";
import { UsersContext } from "./Context/UsersContext";
import ColorsTable from "./Pages/Colors/ColorsTable";
import ColorsCreate from "./Pages/Colors/ColorsCreate";
import ColorsDetail from "./Pages/Colors/ColorsDetail";
import ColorsEdit from "./Pages/Colors/ColorsEdit";
import CategoryTable from "./Pages/Category/CategoryTable";
import CategoryCreate from "./Pages/Category/CategoryCreate";
import CategoryEdit from "./Pages/Category/CategoryEdit";
import CategoryDetail from "./Pages/Category/CategoryDetail";
import ProductTable from "./Pages/Product/ProductTable";
import ProductCreate from "./Pages/Product/ProductCreate";
import ProductEdit from "./Pages/Product/ProductEdit";
import OrderTable from "./Pages/Order/OrderTable";
import OrderDetail from "./Pages/Order/OrderDetail";
import Home from "./Pages/Home";

function App() {
  const auth = localStorage.getItem("token");
  const [users, setUser] = useState<IUsers>(Users);
  useEffect(() => {
    const user = localStorage.getItem("user") ? localStorage.getItem("user") : "";
    if (user) {
      const dataUser = JSON.parse(user);
      setUser(dataUser);
    }
  }, []);

  return (
    <BrowserRouter>
      {auth ? (
        <UsersContext.Provider value={{ member: users }}>
          <Routes>
            <Route path="/login" element={<Navigate to={"/"} />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/table" element={<Table />} />
            <Route path="/table/edit" element={<Edit />} />
            <Route path="/table/create" element={<Create />} />
            <Route path="/colors" element={<ColorsTable />} />
            <Route path="/colors/create" element={<ColorsCreate />} />
            <Route path="/colors/detail/:id" element={<ColorsDetail />} />
            <Route path="/colors/edit/:id" element={<ColorsEdit />} />
            <Route path="/category" element={<CategoryTable />} />
            <Route path="/category/create" element={<CategoryCreate />} />
            <Route path="/category/edit/:id" element={<CategoryEdit />} />
            <Route path="/category/detail/:id" element={<CategoryDetail />} />
            <Route path="/product" element={<ProductTable />} />
            <Route path="/product/create" element={<ProductCreate />} />
            <Route path="/product/edit/:id" element={<ProductEdit />} />
            <Route path="/order" element={<OrderTable />} />
            <Route path="/order/detail/:id" element={<OrderDetail />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </UsersContext.Provider>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
