import dayjs from 'dayjs';
import { PieChart } from '@mui/x-charts/PieChart';

import { Task } from '../types';

interface PieProps {
  tasks: Task[];
}

export default function Pie(props: PieProps) {
  const completedTasks = props.tasks.filter((task) => task.completed).length;
  const expiredTasks = props.tasks.filter(
    (task) => task.date && dayjs(task.date).isBefore(dayjs())
  ).length;
  const needToCompleteTasks =
    props.tasks.length - completedTasks - expiredTasks;

  return (
    <div className="rounded-rectangle">
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: completedTasks, label: 'Completed Tasks' },
              { id: 1, value: expiredTasks, label: 'Expired Tasks' },
              { id: 2, value: needToCompleteTasks, label: 'Need to Complete' },
            ],
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={200}
        colors={['#b7e4c7', '#fbc4ab', '#caf0f8']} // Use palette
      />
    </div>
  );
}
