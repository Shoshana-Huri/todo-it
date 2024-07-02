export interface Task {
  id: string;
  text: string;
  completed: boolean;
  date?: Dayjs;
}

interface BasicTextFieldsProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  addTask: (text: string) => void;
}

interface dateManipulationProps {
  selectedDate?: Dayjs;
  setSelectedDate: (date: Dayjs | null) => void;
}
