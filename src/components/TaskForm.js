import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/taskSlice';

const TaskForm = () => {
    const theme = useSelector(state => state.theme)
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch(addTask({ id: Date.now(), text, completed: false }));
    setText('');
  };

  return (
    <form className='flex justify-start w-full' onSubmit={handleSubmit}>
      <input
        className={`w-full px-2 h-12 rounded-lg ${theme === 'dark' ? 'bg-slate-600 text-slate-100' : 'bg-white text-black'}`}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='w-[100px] bg-green-400 rounded-lg ml-2' type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;