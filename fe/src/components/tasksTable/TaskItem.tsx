import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Task } from '../../types/index';
import { useTheme } from '@mui/material/styles';

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
  onOpenDialog: () => void;
  highlight: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
  onOpenDialog,
  highlight,
}) => {
  const theme = useTheme();
  const labelId = `checkbox-list-label-${task.id}`;

  return (
    <ListItem
      secondaryAction={
        <React.Fragment>
          <IconButton
            edge="end"
            aria-label="add date"
            onClick={() => {
              onOpenDialog();
            }}
            sx={{ margin: 'auto' }}
          >
            <AccessTimeIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              onDelete();
            }}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </React.Fragment>
      }
      disablePadding={true}
      sx={{ backgroundColor: highlight ? '#e8d4c6' : 'transparent' }}
    >
      <ListItemButton role={undefined} onClick={onToggle} dense>
        <Checkbox
          edge="start"
          checked={task.completed !== false}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': labelId }}
        />
        <ListItemText
          id={labelId}
          primary={task.text}
          secondary={
            task.date
              ? `Expire Date: ${new Date(task.date).toLocaleDateString()}`
              : null
          }
          sx={{ color: theme.palette.text.primary }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default TaskItem;
