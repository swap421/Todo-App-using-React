import React from 'react';
import {Paper,List,ListItem,Divider,ListItemText} from '@material-ui/core';
import Todo from './Todo';
function TodoList({todos,removeTodo,toggleTodo,editTodo}){
    if(todos.length)
    return (
        <Paper>
            <List>
                {todos.map((todo,i)=>(
                    <>
                    <Todo task={todo.task} id={todo.id} completed={todo.completed} removeTodo={removeTodo}
                    toggleTodo={toggleTodo} editTodo={editTodo}/>
                    {i<todos.length-1 && <Divider/>}
                    </>
                ))}
            </List>
        </Paper>
    );
    return null;
}
export default TodoList;