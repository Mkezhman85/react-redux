import axios from '../axios/axios-instance'

class TodosService {
    async GetTodos() {
        const url = '/todos'
        try {
            const response = await axios.get(url)
            const result = await response.data
            return result
        } catch (error) {
            console.log(error.response)
        }
    }
}

export default TodosService