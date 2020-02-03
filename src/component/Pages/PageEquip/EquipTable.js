import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 400,
        },
    },
}));

const EquipTable=(props)=>{
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return(
        <div>
            <TableContainer /*component={Paper}*/>
                <Table className={classes.table} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Инв. №</TableCell>
                            <TableCell align='center'>Наименование</TableCell>
                            <TableCell align="center">Категория</TableCell>
                            <TableCell align="center">Подразделение</TableCell>
                            <TableCell align="center">Статус</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.value
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(row => {
                            // const isSelected=row.id===selected.id;
                            return(
                                <TableRow key={row.sernum}
                                          hover
                                          // selected={isSelected}
                                          // onClick={event => handleClick(event, row)}
                                >
                                    <TableCell align="center">{row.sernum}</TableCell>
                                    <TableCell align='center'>{row.name}</TableCell>
                                    <TableCell align="center">{row.category.catname}</TableCell>
                                    <TableCell align="center">{row.unit.name}</TableCell>
                                    <TableCell align="center">{row.status}</TableCell>
                                </TableRow>
                            )}
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={props.value.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    )
};

export default EquipTable;