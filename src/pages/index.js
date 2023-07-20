import React, { useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import FilterButtons from '../components/FilterButtons';
import ThemeToggle from '../components/ThemeToggle';
import { Provider } from 'react-redux';
import store from '@/store';

const TasksPage = () => {
  return (
    <Provider store={store}>
      <div className='w-1/2 m-auto'>
        <ThemeToggle />
        <TaskForm />
        <FilterButtons />
        <TaskList />
      </div>
    </Provider>
  );
};

export default TasksPage;
