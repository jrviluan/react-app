import { EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos = [
            {
                id: 1,
                task: "Cook Dinner",
                complete: false
            },
            {
                id: 2,
                task: "Take a bath",
                complete: false
            }
        ]
    }

    createTodo(task){
        const min = 1;
        const max = 100;
        const id = min + Math.random() * (max - min);

        this.todos.push({
            id,
            task,
            complete: false,
        });

        this.emit("change");
    }

    getAll(){
        return this.todos;
    }

    handleActions(action){
        switch(action.type){
            case "CREATE_TODO": {
                this.createTodo(action.task);
            }

            case "RECEIVE_TODOS": {
                this.todos = action.todos;
                this.emit('change');
            }
        }
    }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;