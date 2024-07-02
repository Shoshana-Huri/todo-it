import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import { Task } from '../types';

interface CalendarProps {
  tasks: Task[];
  selectedDate: Dayjs | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

export default function Calendar(props: CalendarProps) {
  const handleDateChange = (newDate: Dayjs | null) => {
    props.setSelectedDate(newDate);
  };

  return (
    <div className="rounded-rectangle">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={props.selectedDate}
          onChange={handleDateChange}
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          sx={{ width: '100%', height: '100%' }}
        />
      </LocalizationProvider>
    </div>
  );
}
