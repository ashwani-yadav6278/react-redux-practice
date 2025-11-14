import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{ id: '1', text: 'Learn Redux Toolkit', completed: false }],
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                text:action.payload,
                completed:false
            }
            state.todos.push(newTodo)
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            
            const {id,text,completed}=action.payload;
            const todo=state.todos.find((todo)=>todo.id===id)

           if(todo){
            if( text !==undefined) todo.text=text
            if(completed!=undefined) todo.completed=completed
           }

        }
    }
})

export const{addtodo,updateTodo,deleteTodo}=todoSlice.actions

export default todoSlice.reducer 