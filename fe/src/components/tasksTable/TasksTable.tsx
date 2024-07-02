import * as React from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import TaskDialog from './TaskDialog';
import TaskBasicTextFields from './TaskBasicTextFiled';
import TaskItem from './TaskItem';
import { Task } from '../../types/index';
import { Dayjs } from 'dayjs';

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  addTask: (text: string) => void;
  deleteTask: (id: string) => void;
  handleToggle: (id: string) => void;
  selectedDate: Dayjs | null;
}

export default function TasksTable(props: TaskListProps) {
  const [text, setText] = React.useState('');
  const theme = useTheme();

  const [selectedTask, setSelectedTask] = React.useState<Task | null>(null);
  const [date, setDate] = React.useState<Dayjs | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleAddTask = () => {
    if (text.trim()) {
      props.addTask(text);
      setText('');
    }
  };

  const handleClickOpen = (task: Task) => {
    setSelectedTask(task);
    setDate(task.date ? task.date : null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTask(null);
    setDate(null);
  };

  const handleSaveDate = (newDeadline: Dayjs | null) => {
    if (selectedTask) {
      props.setTasks(
        props.tasks.map((task) =>
          task.id === selectedTask.id
            ? {
                ...task,
                date: newDeadline ? newDeadline.toISOString() : null,
              }
            : task
        )
      );
      handleClose();
    }
  };

  return (
    <Grid
      className="rounded-rectangle"
      container
      direction="column"
      style={{ height: '90vh', width: '75%' }}
    >
      {/* header for the table, maybe cut it for a new components */}
      <Grid item>
        <Typography variant="h4" style={{ color: theme.palette.primary.main }}>
          My Tasks
        </Typography>
      </Grid>
      <Grid item>
        <TaskBasicTextFields
          text={text}
          setText={setText}
          addTask={handleAddTask}
        />
      </Grid>
      <Grid item xs style={{ overflowY: 'auto' }}>
        <List
          sx={{
            position: 'relative',
            overflowY: 'auto',
            overflowX: 'hidden',
            paddingY: '0',
            maxHeight: '90vh',
          }}
          subheader={<li />}
        >
          {props.tasks.map((task: Task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={() => props.handleToggle(task.id)}
              onDelete={() => props.deleteTask(task.id)}
              onOpenDialog={() => handleClickOpen(task)}
              highlight={
                props.selectedDate &&
                task.date &&
                props.selectedDate.isSame(task.date, 'day')
              }
            />
          ))}
        </List>
        <TaskDialog
          open={open}
          onClose={handleClose}
          onSave={handleSaveDate}
          date={date}
          setDate={setDate}
        />
      </Grid>
    </Grid>
  );
}
