import { Todo } from "../todos/models/todo.model";


const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'Pending',
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log( state );
    console.log( 'Initstore' );
}

const loadstore = () => {
    throw new Error('Not implemented');
}

const getTodos = ( filter = Filters.All ) => {
    switch ( filter ) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done )
        default:
            throw new Error('Option ${ filter } is not valid.')
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if ( !description ) throw new Error('Descriotion is required');
    state.todos.push( new Todo( description ))
}

const toggleTodo = ( todoId ) => {
}

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
    
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done );
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    if ( Object.keys(Filters).includes( newFilter ) ) {
        state.filter = newFilter;
    };
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadstore,
    setFilter,
    toggleTodo,
}