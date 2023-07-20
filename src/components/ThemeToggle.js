import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { useEffect } from 'react';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    if(theme === 'dark') {
        document.querySelector('body').classList.add('dark')
    } else {
        document.querySelector('body').classList.remove('dark')
    }
  }, [theme])

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <button className={`w-48 h-12 my-3 rounded-lg ${theme === 'light' ? 'bg-violet-900 text-slate-50' : 'bg-amber-100 text-black'}`} onClick={handleToggleTheme}>
      {theme === 'light' ? 'dark' : 'light'}
    </button>
  );
};

export default ThemeToggle;