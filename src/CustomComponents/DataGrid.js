import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'image',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => (
      <img
        src={params.row.imageSrc} // Replace 'imageSrc' with the actual field in your data
        alt="User Image"
        style={{ width: '50px', height: '50px' }} // Adjust the dimensions as needed
      />
    ),
  },
  { field: 'Title', headerName: 'Title', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <div>
        <IconButton
          color="primary"
          //onClick={() => handleViewClick(params.row.id)}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton
          color="primary"
          // onClick={() => handleEditClick(params.row.id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="secondary"
          // onClick={() => handleDeleteClick(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    ),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', Title: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', Title: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', Title: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', Title: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', Title: 'Daenerys', age: 23},
  { id: 6, lastName: 'Melisandre', Title: "ddf", age: 150 },
  { id: 7, lastName: 'Clifford', Title: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances',Title: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', Title: 'Harvey', age: 65 },
];

export default function DataTable() {

  return (
    <div style={{ height: 400, width: '100%' }}>
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