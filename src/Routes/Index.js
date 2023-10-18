import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableBarang from "../Components/Inventory/Table/TableBarang.js";
import ErrorHandler from "../ErrorHandlers/ErrorHandler.js";
import Navigation from "../Components/Navigations/Navigation.js";

const allRoutes = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" errorElement={<ErrorHandler />} />
        <Route
          path="/inventory-data-page"
          element={<TableBarang />}
          errorElement={<ErrorHandler />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default allRoutes;
