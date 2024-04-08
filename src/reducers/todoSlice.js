import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [
            {
                'name':'caminar al perro'
            }
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload)
        }
    }
})

export const { addTodo } =  todoSlice.actions
export const selectTodos = (state) => state.todos.value

export default todoSlice.reducer
