import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import Header from '../../components/Header';
import { mockDataTeam } from '../../data/mockData';
import { tokens } from '../../thems';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const Team = () => {
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
			field: 'accessLevel',
			headerName: 'ACCESS LEVEL',
			flex: 1,
			renderCell: ({ row: { access } }) => {
				return (
					<Box
						width="60%"
						m="0 auto"
						p="5px"
						display="flex"
						justifyContent="center"
						backgroundColor={
							access === 'admin'
								? colors.greenAccent[600]
								: access === 'manager'
								? colors.greenAccent[700]
								: colors.greenAccent[700]
						}
						borderRadius="4px"
					>
						{access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
						{access === 'manager' && <SecurityOutlinedIcon />}
						{access === 'user' && <LockOpenOutlinedIcon />}
						<Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
							{access}
						</Typography>
					</Box>
				);
			},
		},
	];
	return (
		<Box m="20px">
			<Header title="TEAM" subTitle="Managing the Team Members" />

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
				}}
			>
				<DataGrid rows={mockDataTeam} columns={columns} />
			</Box>
		</Box>
	);
};

export default Team;
