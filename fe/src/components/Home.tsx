import React from 'react';
import { Dayjs } from 'dayjs';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import TaskList from './tasksTable/TasksTable';
import Calendar from './Calender';
import Pie from './Pie';
import UserMenu from './UserMenu';
import { useTheme } from '@mui/material/styles';
import { Task } from '../types';
import { LocalStorageUtil } from '../utils/localStorage';

const TASKS_STORAGE_KEY = 'tasks';

export default function Home() {
  const [tasks, setTasks] = React.useState<Task[]>(() => {
    const storedTasks = LocalStorageUtil.getItem<Task[]>(TASKS_STORAGE_KEY);
    return storedTasks ?? [];
  });
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);

  const theme = useTheme();

  React.useEffect(() => {
    const storedTasks = LocalStorageUtil.getItem<Task[]>(TASKS_STORAGE_KEY);
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  React.useEffect(() => {
    LocalStorageUtil.setItem(TASKS_STORAGE_KEY, tasks);
  }, [tasks]);

  function addTask(text: string) {
    const newTask = {
      id: Date.now().toString(),
      text: text,
      completed: false,
      date: undefined,
    };

    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggle = (id: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid
        container
        style={{ backgroundColor: theme.palette.background.default }}
      >
        <Grid
          item
          xs={12}
          md={6}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          height={'fit-content'}
        >
          <TaskList
            tasks={tasks}
            setTasks={setTasks}
            addTask={addTask}
            deleteTask={deleteTask}
            handleToggle={handleToggle}
            selectedDate={selectedDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <UserMenu name={'Shosha'} />
          <Calendar
            tasks={tasks}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <Pie tasks={tasks} />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
