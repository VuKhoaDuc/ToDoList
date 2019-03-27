let nextTodoId = 0 
export const addTodo = (text, number) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    number
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const addTodoSuccess = () => ({
    type: 'ADD_TODO_SUCCESS'
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}