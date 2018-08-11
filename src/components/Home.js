import React, { Component } from 'react';
import Todo from "../components/Todo";
import * as TodoAction from '../actions/TodoAction';
import TodoStore from '../stores/TodoStore';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll()
        }
    }

    componentWillMount(){
        TodoStore.on("change", () => {
            this.setState({
                todos: TodoStore.getAll()
            })
        })
    }

    reloadTodos(){
        TodoAction.reloadTodos();
    }

    render() {
        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        })

        return (
            <div>
                <button onClick={this.reloadTodos.bind(this)}>Reload</button>
                <input />
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}
export default Home;
