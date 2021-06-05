import React, {Component} from 'react'
import './App.css'
import {connect} from 'react-redux'

import Counter from './Counter'

import Users from './components/Users/Users'
import {add, sub, addNumber, asyncAdd} from './redux/actions/actions'

class App extends Component {

  async getTodosList() {
    const todosList = await this.props.todos
    console.log(todosList)
    return todosList
  }
  
  componentDidMount() {
    // this.getTodosList()
    console.log(this.props.todos)
  }
  
  render() {

    const styles = {
      textAlign: 'center',
      margin: '15px',
    }

    

    return (
      <div className={'App'} style={styles}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>
        
        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
          <button onClick={() => this.props.onAddNumber(-17)}>Вычесть 17</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onSyncAdd(100)}>Асинхронно добавить 100</button>
        </div>

        <Counter />
        <hr />
        <Users />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter,
    todos: state.todosReducer.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: number => dispatch(addNumber(number)),
    onSyncAdd: number => dispatch(asyncAdd(number)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
