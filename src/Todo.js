import React from 'react';
import useToggleState from './hooks/useToggleState';
import {Paper,List,ListItem,Divider,ListItemText,Checkbox,IconButton,ListItemSecondaryAction} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditTodoForm from './EditTodoForm';
function Todo({task,completed,removeTodo,id,toggleTodo,editTodo}){
    const [isEditing,toggle]=useToggleState();
    return (
        <List>
            <ListItem style={{height:'64px'}}>
                {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/> : 
                <>
                <Checkbox tabindex={-1} checked={completed} onClick={()=>toggleTodo(id)}/>
                <ListItemText style={{textDecoration: completed?'line-through':'none'}}>{task}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label='Delete' onClick={()=> removeTodo(id)}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label='Edit' onClick={toggle}>
                        <EditIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
                </>
                }
            </ListItem>
        </List>
    )
}
export default Todo;