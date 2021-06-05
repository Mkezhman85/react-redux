import TodosService from '../../services/TodosService'

const todoList = new TodosService().GetTodos()

const initialState = {
    todos: todoList
}

export default function todosReducer(state = initialState, action) {
    return state
}