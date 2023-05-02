import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React from 'react';
import Header from '../../components/Header';
import { tokens } from '../../thems';
import { mockDataInvoices } from '../../data/mockData';

const Invoices = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{
			field: 'id',
			headerName: 'ID',
		},

		{
			field: 'name',
			headerName: 'NAME',
			flex: 1,
			cellClassName: 'name-column--cell',
		},

		{
			field: 'phone',
			headerName: 'PHONE NUMBER',
			flex: 1,
		},
		{
			field: 'email',
			headerName: 'EMAIL',
			flex: 1,
		},
		{
			field: 'cost',
			headerName: 'COST',
			flex: 1,
			renderCell: (prams) => (
				<Typography color={colors.greenAccent[500]}>
					${prams.row.cost}
				</Typography>
			),
		},
		{
			field: 'date',
			headerName: 'DATE',
			flex: 1,
		},
	];
	return (
		<Box m="20px">
			<Header title="INVOICES" subTitle="List of Invoices Balances." />

			{/* CREATE A TABLE USING DATAGRID */}
			<Box
				m="40px 0 0 0"
				height="75vh"
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none',
					},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none',
					},
					'& .mane-colum--cell': {
						color: colors.greenAccent[300],
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.blueAccent[700],
						borderBottom: 'none',
					},
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: colors.primary[400],
					},
					'& .MuiDataGrid-footerContainer': {
						borderTop: 'none',
						backgroundColor: colors.blueAccent[700],
					},
					'& .MuiCheckbox-root': {
						color: `${colors.greenAccent[200]} !important`,
					},
					'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
						color: `${colors.grey[100]} !important`,
					},
				}}
			>
				<DataGrid
					checkboxSelection
					rows={mockDataInvoices}
					columns={columns}
					components={{ Toolbar: GridToolbar }}
				/>
			</Box>
		</Box>
	);
};

export default Invoices;
