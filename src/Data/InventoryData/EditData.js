import React, { useState } from "react";
import { Box, Container, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const INITIAL_STATE = {
  itemCode: "",
  itemName: "",
  buyPrice: "",
  sellPrice: "",
  itemStok: "",
  sellerName: "",
  expiredDate: "",
};

const EditData = () => {
  const [data, setData] = useState({INITIAL_STATE});
  const [resData, setResData] = useState({});
  // const [error, setError] = useState(false)

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  console.log(data)

  const AddData = async () => {
    try {
      await axios
        .post("http://localhost:5000/item/add", {
          itemCode: data.itemCode,
          itemName: data.itemName,
          buyPrice: data.buyPrice,
          sellPrice: data.sellPrice,
          itemStok: data.itemStok,
          sellerName: data.sellerName,
          expiredDate: data.expiredDate,
        })
        .then((res) => setResData(res))
        .then(setData(INITIAL_STATE));
      console.log({ resData });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <Container fixed>
        <Box sx={{ height: "90vh" }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "38ch" },
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            noValidate
            autoComplete="off"
            display="grid"
          >
            <TextField
              id="filled-basic"
              label="Item Code"
              variant="filled"
              sx={{ bgcolor: "#cfe8fc" }}
              name="itemCode"
              value={data.itemCode}
              onChange={(e) => handleInput(e)}
            />
            <TextField
              id="filled-basic"
              label="Item Name"
              variant="filled"
              sx={{ bgcolor: "#cfe8fc" }}
              name="itemName"
              value={data.itemName}
              onChange={(e) => handleInput(e)}
            />
            <TextField
              id="filled-basic"
              label="Buy Price"
              variant="filled"
              sx={{ bgcolor: "#cfe8fc" }}
              name="buyPrice"
              value={data.buyPrice}
              onChange={(e) => handleInput(e)}
            />
            <TextField
              id="filled-basic"
              label="Sell Price"
              variant="filled"
              sx={{ bgcolor: "#cfe8fc" }}
              name="sellPrice"
              value={data.sellPrice}
              onChange={(e) => handleInput(e)}
            />
            <TextField
              id="filled-basic"
              label="Item Stok"
              variant="filled"
              sx={{ bgcolor: "#cfe8fc" }}
              name="itemStok"
              value={data.itemStok}
              onChange={(e) => handleInput(e)}
            />
            <TextField
              id="filled-basic"
              label="Seller Name"
              variant="filled"
              sx={{ bgcolor: "#cfe8fc" }}
              name="sellerName"
              value={data.sellerName}
              onChange={(e) => handleInput(e)}
            />
            <TextField
              id="filled-basic"
              label="Expired Date"
              variant="filled"
              sx={{ bgcolor: "#cfe8fc" }}
              name="expiredDate"
              value={data.expiredDate}
              onChange={(e) => handleInput(e)}
            />
            <Box display="flex">
              {/* Add Button */}
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    bgcolor: "#76f76a",
                    color: "#414f3f",
                  },
                  typography: {
                    fontWeight: 900,
                    suppressDeprecationWarnings: true,
                  },
                  bgcolor: "#175c15c7",
                  color: "white",
                  marginRight: "5px",
                }}
                startIcon={<AddIcon />}
                size="small"
                onClick={(e) => {
                  AddData(e);
                }}
              >
                Add
              </Button>
              {/* Update Button */}
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    bgcolor: "#76f76a",
                    color: "#414f3f",
                  },
                  typography: {
                    fontWeight: 900,
                    suppressDeprecationWarnings: true,
                  },
                  bgcolor: "#175c15c7",
                  color: "white",
                  marginRight: "5px",
                }}
                startIcon={<UpdateIcon />}
                size="small"
                // onClick={(e) => UpdateData(e)}
              >
                Update
              </Button>
              {/* Delete Button */}
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    bgcolor: "#76f76a",
                    color: "#414f3f",
                  },
                  typography: {
                    fontWeight: 900,
                    suppressDeprecationWarnings: true,
                  },
                  bgcolor: "#175c15c7",
                  color: "white",
                  marginRight: "5px",
                }}
                startIcon={<DeleteIcon />}
                size="small"
                // onClick={(e) => DeleteData(e)}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default EditData;
