import * as React from "react";
import { PropTypes } from "prop-types";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Paper,
  TextField,
} from "@mui/material";
import axios from "axios";
import EditButtonModal from "../Modals/InventoryPageModal/EditButtonModal";

const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "itemCode",
    numeric: false,
    disablePadding: true,
    label: "Item Code",
  },
  {
    id: "itemName",
    numeric: true,
    disablePadding: false,
    label: "Item Name",
  },
  {
    id: "buyPrice",
    numeric: true,
    disablePadding: false,
    label: "Buy Price",
  },
  {
    id: "sellPrice",
    numeric: true,
    disablePadding: false,
    label: "Sell Price",
  },
  {
    id: "itemStok",
    numeric: true,
    disablePadding: false,
    label: "Item Stok",
  },
  {
    id: "sellerName",
    numeric: true,
    disablePadding: false,
    label: "Seller Name",
  },
  {
    id: "expiredDate",
    numeric: true,
    disablePadding: false,
    label: "Expired Date",
  },
];

function EnhancedTableHead(props) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  rowCount: PropTypes.number.isRequired,
};

export default function TableBarang() {
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [items, setItems] = React.useState([]);

  const listItems = async () => {
    try {
      await axios
        .get("http://localhost:5000/items/getAll")
        .then((res) => setItems(res.data));
    } catch (error) {
      console.error(error.message);
    }
  };

  React.useEffect(() => {
    listItems();
  }, []);

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - items.length) : 0;

  return (
    <Box
      sx={{ width: "95%", mt: 2, ml: 4 }}
      display="flex"
      flexDirection="column"
      alignContent="center"
    >
      <Box sx={{ mb: 2 }} display="flex" justifyContent="justify-start">
        {/* Search Field Component */}
        <Box sx={{ mt:2, mr:2 }}>
          <TextField
            id="standard-search"
            label="Search item"
            type="search"
            variant="standard"
          />
        </Box>
        {/* Edit & Delete Button */}
        <Box sx={{mt:5}} display="flex">
          <EditButtonModal />
        </Box>
      </Box>
      <Paper sx={{ width: "100%", px: 2 }}>
        <Typography
          sx={{ flex: "1 1 100%", py: 2 }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Inventory
        </Typography>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              rowCount={items.length}
            />
            <TableBody>
              {items
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.itemcode}</TableCell>
                      <TableCell align="right">{row.itemname}</TableCell>
                      <TableCell align="right">{row.buyprice}</TableCell>
                      <TableCell align="right">{row.sellprice}</TableCell>
                      <TableCell align="right">{row.itemstok}</TableCell>
                      <TableCell align="right">{row.sellername}</TableCell>
                      <TableCell align="right">{row.expireddate}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 8]}
          component="div"
          count={items.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
