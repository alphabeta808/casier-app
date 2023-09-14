import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableBarang from "../Components/Table/TableBarang.js";
import ErrorHandler from "../Handlers/Error/ErrorHandler.js";
import EditData from "../Data/InventoryData/EditData.js";

const allRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" errorElement={<ErrorHandler />} />
        <Route
          path="/items"
          element={<TableBarang />}
          errorElement={<ErrorHandler />}
        />
        <Route
          path="/items/edit"
          element={<EditData />}
          errorElement={<ErrorHandler />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default allRoutes;
