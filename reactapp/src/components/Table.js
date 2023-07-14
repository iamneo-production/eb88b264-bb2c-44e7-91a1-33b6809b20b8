import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Product ID", type: "number", width: 180 },
  { field: "productName", headerName: "Product name", width: 130 },
  { field: "supplier", headerName: "Supplier name", width: 130 },
  { field: "transfer", headerName: "Transfer name", width: 130 },
  {
    field: "price",
    headerName: "Stock price($)",
    type: "number",
    width: 100,
  },
  {
    field: "tid",
    headerName: "Bearer",
    description: "This column has a value getter and is not sortable.",
    type: "number",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.supplier || ""} `,
  },
];

const rows = [
  {
    id: 1,
    productName: "12x7 Notes",
    supplier: "Jon",
    transfer: "Jon",
    price: 78.12,
  },
  {
    id: 2,
    productName: "Pens",
    supplier: "Cersei",
    transfer: "Jon",
    price: 300,
  },
  {
    id: 3,
    productName: "Bussiness Forms",
    supplier: "Jaime",
    transfer: "Jon",
    price: 400,
  },
  {
    id: 4,
    productName: "Toner Catridges",
    supplier: "Arya",
    transfer: "Jon",
    price: 879,
  },
  {
    id: 5,
    productName: "Stamp Pads",
    supplier: "Daenerys",
    transfer: "Jon",
    age: null,
  },
  {
    id: 6,
    productName: "Copy paper",
    supplier: "Hert",
    transfer: "Jon",
    price: 150,
  },
  {
    id: 7,
    productName: "90x3 Notes",
    supplier: "Ferrara",
    transfer: "Jon",
    price: 4490,
  },
  {
    id: 8,
    productName: "Staplers",
    supplier: "Rossini",
    transfer: "Jon",
    price: 1897,
  },
  {
    id: 9,
    productName: "Crox icnat",
    supplier: "Harvey",
    transfer: "Jon",
    age: 65,
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
