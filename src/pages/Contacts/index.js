import { Box, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../thems';
import Header from '../../components/Header';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/mockData';

const Contacts = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{
			field: 'id',
			headerName: 'ID',
		},
		{
			field: 'registrarId',
			headerName: 'REGISTRER ID',
		},
		{
			field: 'name',
			headerName: 'NAME',
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{
			field: 'age',
			headerName: 'AGE',
			type: 'number',
			headerAlign: 'left',
			align: 'left',
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
			field: 'address',
			headerName: 'ADDRESS',
			flex: 1,
		},
		{
			field: 'city',
			headerName: 'CITY',
			flex: 1,
		},
		{
			field: 'zipCode',
			headerName: 'ZIP CODE',
			flex: 1,
		},
	];
	return (
		<Box m="20px">
			<Header
				title="CONTACTS"
				subTitle="List of Contacts for Future Reference."
			/>

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
				<DataGrid rows={mockDataContacts} columns={columns} />
			</Box>
		</Box>
	);
};

export default Contacts;
