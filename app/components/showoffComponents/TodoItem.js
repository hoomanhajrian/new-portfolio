import React from 'react';
import { Checkbox } from '@mui/material';

const TodoItem = (props) => {
    const { name, priority, done } = props.data;

    return (
        <div>
            <div>{name}</div>
            <div>{priority}</div>
            <Checkbox checked={done} />
        </div>
    )

};
export default TodoItem;