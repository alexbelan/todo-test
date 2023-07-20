import { useSelector } from 'react-redux';
import Task from './Task';
import { useMemo } from 'react';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>  {
        if (filter === 'completed') {
          return task.completed;
        } else if (filter === 'uncompleted') {
          return !task.completed;
        }
        return true;
    });
  }, [filter, tasks])

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;