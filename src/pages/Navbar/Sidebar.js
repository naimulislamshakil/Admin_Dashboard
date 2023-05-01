import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '../../thems';
import AdminPhoto from '../../img/admin.png';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Sidebar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState('Dashboard');
	return (
		<Box
			sx={{
				'& .pro-sidebar-inner': {
					backgroundColor: `${colors.primary[400]} !important`,
				},
				'& .pro-icon-wrapper': {
					backgroundColor: 'transparent !important',
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important',
				},
				'& .pro-inner-item:hover': {
					color: '#868dfb !important',
				},
				'& .pro-menu-item.active': {
					color: '6870fa !important',
				},
			}}
		>
			<ProSidebar collapsed={isCollapsed}>
				<Menu iconShape="square">
					{/* LOGO AND MENU ICON */}

					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: '10px 0 20px 0',
							color: colors.grey[100],
						}}
					>
						{!isCollapsed && (
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								ml="15px"
							>
								<Typography variant="h3" color={colors.grey[100]}>
									ADMIN
								</Typography>
								<IconButton>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>

					{/* ADMIN PHOTO AND TITLE AND SOCIAL LINK */}

					{!isCollapsed && (
						<Box mb="25px">
							<Box display="flex" justifyContent="center" alignItems="center">
								<img
									src={AdminPhoto}
									alt="user_photo"
									height="100px"
									width="100px"
									style={{ cursor: 'pointer', borderRadius: '50px' }}
								/>
							</Box>

							<Box textAlign="center">
								<Typography
									variant="h2"
									color={colors.grey[100]}
									fontWeight="bold"
									sx={{
										m: '10px 0 0 0',
									}}
								>
									Naimul Islam
								</Typography>

								<Typography variant="h5" color={colors.greenAccent[500]}>
									Full Stack Web Developer (MERN)
								</Typography>
							</Box>
						</Box>
					)}

					{/* DASHBOARD MENU ITEM */}

					<Box paddingLeft={isCollapsed ? undefined : '10%'}></Box>
				</Menu>
			</ProSidebar>
		</Box>
	);
};

export default Sidebar;
