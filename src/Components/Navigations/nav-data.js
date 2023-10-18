import React from "react";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const NavData = [
  {
    title: "HOME",
    path: "/",
    icon: <HomeOutlinedIcon />,
    style: "nav-text",
  },
  {
    title: "PURCHASE PAGE",
    path: "/purchase-page",
    icon: <AddShoppingCartOutlinedIcon />,
    style: "nav-text",
  },
  {
    title: "INVENTORY DATA PAGE",
    path: "/inventory-data-page",
    icon: <Inventory2OutlinedIcon />,
    style: "nav-text",
  },
  {
    title: "SALES DATA PAGE",
    path: "/sales-data-page",
    icon: <PostAddOutlinedIcon />,
    style: "nav-text",
  },
  {
    title: "SUPPLIER DATA PAGE",
    path: "/supplier-data-page",
    icon: <StoreOutlinedIcon />,
    style: "nav-text",
  },
  {
    title: "SALES REPORT PAGE",
    path: "/sales-report-page",
    icon: <AssessmentOutlinedIcon />,
    style: "nav-text",
  },
  {
    title: "PURCHASE REPORT PAGE",
    path: "/purchase-report-page",
    icon: <AssessmentOutlinedIcon />,
    style: "nav-text",
  },
  {
    title: "USER",
    path: "/user-page",
    icon: <PermIdentityOutlinedIcon />,
    style: "nav-text",
  },
  {
    title: "SETTINGS",
    path: "/settings-page",
    icon: <SettingsOutlinedIcon />,
    style: "nav-text",
  },
];
