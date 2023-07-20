import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filterSlice'
import themeSlice from './themeSlice'
import taskSlice from './taskSlice'

const store = configureStore({
    reducer: {
        filter: filterSlice,
        theme: themeSlice,
        tasks: taskSlice
    }
})

export default store