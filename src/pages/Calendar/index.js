import FullCalendar, { formatDate } from '@fullcalendar/react';
import {
	Box,
	List,
	ListItem,
	ListItemText,
	Typography,
	useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import Header from '../../components/Header';
import { tokens } from '../../thems';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

const Calendar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const [currentEvents, setCurrentEvents] = useState([]);

	const handleDateClick = (selected) => {
		const title = prompt('Please enter a new title for your event');
		const calendarApi = selected.view.calendar;
		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			});
		}
	};

	const handleEventClick = (selected) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event '${selected.event.title}'`
			)
		) {
			selected.event.remove();
		}
	};
	return (
		<Box m="20px">
			<Header title="CALENDAR" subTitle="Full Calendar Interactive Page" />

			<Box display="flex">
				{/* EVENTS */}
				<Box
					flex="1 1 20%"
					backgroundColor={colors.primary[400]}
					p="15px"
					borderRadius="4px"
				>
					<Typography variant="h5">Events</Typography>
					<List>
						{currentEvents.map((event) => (
							<ListItem
								key={event.id}
								sx={{
									borderRadius: '2px',
									margin: '10px 0',
									backgroundColor: colors.greenAccent[500],
								}}
							>
								<ListItemText
									primary={event.title}
									secondary={
										<Typography>
											{' '}
											{formatDate(event.start, {
												year: 'numeric',
												month: 'short',
												day: 'numeric',
											})}
										</Typography>
									}
								/>
							</ListItem>
						))}
					</List>
				</Box>

				{/* CALENDAR */}
				<Box flex="1 1 100%" ml="15px">
					<FullCalendar
						height="75vh"
						plugins={[
							dayGridPlugin,
							timeGridPlugin,
							interactionPlugin,
							listPlugin,
						]}
						headerToolbar={{
							left: 'prev,next,today',
							center: 'title',
							right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
						}}
						initialView="dayGridMonth"
						editable={true}
						selectMirror={true}
						selectable={true}
						dayMaxEvents={true}
						select={handleDateClick}
						eventClick={handleEventClick}
						initialEvents={[
							{
								id: '12315',
								title: 'All-day event',
								date: '2022-09-14',
							},
							{
								id: '5123',
								title: 'Timed event',
								date: '2022-09-28',
							},
						]}
						eventsSet={(events) => setCurrentEvents(events)}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Calendar;
