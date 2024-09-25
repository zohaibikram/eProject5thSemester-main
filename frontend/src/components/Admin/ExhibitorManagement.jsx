import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const ExhibitorManagement = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'company', headerName: 'Company', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => console.log(`Edit ${params.id}`)}>
          Edit
        </Button>
      ),
    },
  ];

  const rows = [
    { id: 1, name: 'Exhibitor 1', company: 'Company 1' },
    { id: 2, name: 'Exhibitor 2', company: 'Company 2' },
    // Add more exhibitors
  ];

  return <DataGrid rows={rows} columns={columns} pageSize={5} />;
};

export default ExhibitorManagement;
