import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

import { BasicTextFieldsProps } from '../../types/index';

export default function BasicTextFields({
  text,
  setText,
  addTask,
}: BasicTextFieldsProps) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.trim()) {
      addTask(text);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: 1,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="New Task"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ flex: 1 }}
      />
      <IconButton
        color="primary"
        aria-label="add"
        onClick={() => {
          if (text.trim()) {
            addTask(text);
          }
        }}
        size="small"
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
}
