import React, { useState, useEffect } from 'react';
import { Card, CardHeader, TextField, Checkbox, FormGroup, MenuItem, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const getPriorityColor = (priority) => {

    switch (priority) {
        case "Low":
            return "green";
        case "Medium":
            return "#CCCC00";
        case "High":
            return "red";
        default:
            break;
    }

};

function createData(name, description, priority, completed) {
    return { name, description, priority, completed };
};

const Todo = () => {
    const [rows, updateRows] = useState([]);
    const [priority, setPriority] = useState('');
    const [name, changeName] = useState('');
    const [description, changeDescription] = useState('');

    const priorityHandleChange = (event) => {
        setPriority(event.target.value);
    };

    // const filterSelectHandleChange = () => {
    //     updateRows(rows.filter(row => row.completed === true));
    // };

    const addData = () => {
        if (name === "" || description === "" || priority === "") {

        }
        else {
            updateRows([...rows, createData(name, description, priority, false)]);
            localStorage.setItem("todoList", JSON.stringify(rows));
        };
    };

    const removeData = (event) => {
        event.preventDefault();
        const removedItemIndex = event.target.attributes.index.value;
        updateRows(rows.filter((val, index, arr) => { return index.toString() !== removedItemIndex }));
        localStorage.setItem("todoList", JSON.stringify(rows));
    };

    const checkboxChangeHandel = (event) => {
        event.preventDefault();
        let newRows = [...rows];
        newRows[event.target.id].completed = event.target.checked;
        updateRows(newRows);
    };

    useEffect(() => {
        if (localStorage.getItem("todoList")) {
            updateRows(JSON.parse(localStorage.getItem("todoList")));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(rows));
    }, [rows]);

    return (
        <Card className='todo-card'>
            <CardHeader
                title="Todo List"
            />
            <FormGroup className='todo-form' row>
                <TextField
                    id="todoName"
                    className='todo-name'
                    label="Name"
                    variant="outlined"
                    onChange={(value) => { changeName(value.target.value) }}
                />
                <TextField
                    id="todoDes"
                    className='todo-des'
                    label="Description"
                    variant="outlined"
                    onChange={(value) => { changeDescription(value.target.value) }}

                />

                <Box sx={{ minWidth: 120 }} type="form">
                    <FormControl className="todo-priority-form">
                        <InputLabel id="priority-select-label">Priority</InputLabel>
                        <Select
                            labelId="priority-select-label"
                            id="priority-select"
                            className='todo-priority'
                            value={priority}
                            label="Priority"
                            onChange={priorityHandleChange}
                        >
                            <MenuItem value="Low">Low</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="High">High</MenuItem>
                        </Select>
                        <Button type='submit' onClick={addData}>Add</Button>
                    </FormControl>
                </Box>

                <Box className="box" sx={{ minWidth: 120 }}>
                    {/* <FormControl fullWidth>
                        <InputLabel id="completed-select-label">Filter</InputLabel>
                        <Select
                            labelId="completed-select-label"
                            id="completed-select"
                            label="completed"
                            onChange={filterSelectHandleChange}
                        >
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="completed">Completed</MenuItem>
                            <MenuItem value="notCompleted">Not Completed</MenuItem>
                        </Select>
                    </FormControl> */}
                </Box>

            </FormGroup>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>#</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">Description</StyledTableCell>
                            <StyledTableCell align="right">Priority</StyledTableCell>
                            <StyledTableCell align="right">Completed</StyledTableCell>
                            <StyledTableCell align="right">Remove?</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className='todo-table'>
                        {rows.length < 1 ?
                            <StyledTableRow >
                                <StyledTableCell id='tableRowNumber'>
                                    No data
                                </StyledTableCell>
                                <StyledTableCell align="right" component="th" scope="row">
                                    No data
                                </StyledTableCell>
                                <StyledTableCell align="right">No data</StyledTableCell>
                                <StyledTableCell align="right">No data</StyledTableCell>
                                <StyledTableCell align="right"><Checkbox checked={false} /></StyledTableCell>
                                <StyledTableCell align="right">No data</StyledTableCell>
                            </StyledTableRow>
                            :
                            rows.map((row, index) => (
                                <StyledTableRow id={`row${index}`} key={index} >
                                    <StyledTableCell id='tableRowNumber'>
                                        {index}
                                    </StyledTableCell>
                                    <StyledTableCell align="right" component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.description}</StyledTableCell>
                                    <StyledTableCell sx={{ color: `${getPriorityColor(row.priority)}` }} align="right">{row.priority}</StyledTableCell>
                                    <StyledTableCell align="right">{row.completed ? 'Done' : <Checkbox id={`${index}`} onChange={checkboxChangeHandel} />}</StyledTableCell>
                                    <StyledTableCell align="right"><Button onClick={removeData} index={index} >Remove</Button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )

};

export default Todo;