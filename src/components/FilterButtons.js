import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/filterSlice';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleClick = (filterType) => {
    dispatch(setFilter(filterType));
  };

  return (
    <div className='w-full flex mt-3'>
      <button
        onClick={() => handleClick('all')}
        className={`w-full h-12 rounded-lg ${filter === 'all' ? 'bg-green-500' : 'bg-green-400'}`}
      >
        All
      </button>
      <button
        onClick={() => handleClick('completed')}
        className={`w-full h-12 rounded-lg ml-2 ${filter === 'completed' ? 'bg-green-500' : 'bg-green-400'}`}
      >
        Completed
      </button>
      <button
        onClick={() => handleClick('uncompleted')}
        className={`w-full h-12 rounded-lg ml-2 ${filter === 'uncompleted' ? 'bg-green-500' : 'bg-green-400'}`}
      >
        Uncompleted
      </button>
    </div>
  );
};

export default FilterButtons;