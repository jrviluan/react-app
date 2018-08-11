import dispatcher from '../dispatcher';

export function createTodo(task){
    dispatcher.dispatch({
        type: "CREATE_TODO",
        task,
    });
}

export function deleteTodo(id){
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodos(){
    dispatcher.dispatch({
        type: "FETCH_TODOS",
    });

    setTimeout(() =>{
        dispatcher.dispatch({ type: "RECEIVE_TODOS", todos: [
            {
                id: 1,
                task: "Cook Dinner aaa",
                complete: false
            },
            {
                id: 2,
                task: "Take a bath aa",
                complete: false
            }
        ]})
    },1000)
}