import React  from "react";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const rows=[];

const ClaimTable=()=>{
    // [data, setData]=useState();


    const classes = useStyles();
    return (
        <>
        <Paper>
            <Button startIcon={<AddCircleOutlineOutlinedIcon/>} variant='outlined' color='primary'>Новая заявка</Button>
            <Button startIcon={<IndeterminateCheckBoxOutlinedIcon/>} variant='outlined' color='secondary'>Удалить заявку</Button>
        </Paper>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>№ заявки</TableCell>
                        <TableCell align="center">Дата создания</TableCell>
                        <TableCell align="center">Сотрудник</TableCell>
                        <TableCell align="center">Оборудование</TableCell>
                        <TableCell align="center">Неисправности</TableCell>
                        <TableCell align="center">Этап</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
};

export default ClaimTable;