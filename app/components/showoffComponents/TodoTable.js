import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { styled } from '@mui/material/styles';
import { TableCell, tableCellClasses, TableRow, TabPanel, updateRows,Checkbox,Button } from '@mui/material';

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


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const TodoTable = () => {

    const removeData = (event) => {
        const removedItemIndex = event.target.attributes.index.value;
        updateRows(rows.filter((val, index, arr) => { return index.toString() !== removedItemIndex }));
    };

    const checkboxChangeHandel = (event) => {
        const updatedCheckedItemIndex = event.target.attributes.id.value;
        rows[updatedCheckedItemIndex].completed = event.target.checked;
        updateRows(() => rows);
        changeOrgRows(rows);
    };


    return (
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
                    {rows.map((row, index) => (
                        <StyledTableRow id={`row${index}`} key={index} >
                            <StyledTableCell id='tableRowNumber'>
                                {index}
                            </StyledTableCell>
                            <StyledTableCell align="right" component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.description}</StyledTableCell>
                            <StyledTableCell align="right">{row.priority}</StyledTableCell>
                            <StyledTableCell align="right"><Checkbox id={`${index}`} onChange={checkboxChangeHandel} /></StyledTableCell>
                            <StyledTableCell align="right"><Button onClick={removeData} index={index} >Remove</Button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default TodoTable;