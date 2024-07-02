import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { Dayjs } from 'dayjs';

export interface TaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (date: Dayjs | null) => void;
  date: Dayjs | null;
  setDate: (date: Dayjs | null) => void;
}

export default function TaskDialog(props: TaskDialogProps) {
  const { onClose, onSave, open, date, setDate } = props;

  const handleSave = () => {
    onSave(date);
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Set Task Deadline</DialogTitle>
      <Box sx={{ p: 3 }}>
        <DatePicker
          label="Deadline"
          value={null}
          onChange={(newValue) => setDate(newValue ? newValue : null)}
          slotProps={{ textField: { fullWidth: true } }}
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
