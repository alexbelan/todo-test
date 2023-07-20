import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTask } from '../store/taskSlice';
import { FiCheck } from 'react-icons/fi';


const Task = ({ task }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme)

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div
      onClick={handleToggle}
      className='flex items-center my-3'
    >
        <div className={`cursor-pointer flex items-center justify-center h-12 w-12 rounded-lg shadow-md border-2 ${theme === 'dark' ? 'bg-slate-600 border-slate-100' : 'bg-white border-black'}`}>
            {task.completed &&
                <FiCheck color={theme === 'dark' ? '#f1f5f9' : '#000000'} size={'25'} />
            } 
        </div>
        <div 
            className={`cursor-pointer flex items-center w-full h-12 px-1 ml-2 rounded-lg bg-white shadow-md ${theme === 'dark' ? 'bg-slate-600 text-slate-100' : 'bg-white text-black'}`}
        >{task.text}</div>
        <button className='w-[100px] h-12 bg-green-400 rounded-lg ml-2 bg-red-500 shadow-md' onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;