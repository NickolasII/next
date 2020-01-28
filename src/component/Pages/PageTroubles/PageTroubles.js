import React, {useEffect, useState} from "react";
import axios from '../../../axios/axios'
import Paper from "@material-ui/core/Paper";
import {FormGroup, makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import TablePagination from "@material-ui/core/TablePagination";
import TextField from "@material-ui/core/TextField";
import InsAddDialog from "./InsAddDialog/InsAddDialog";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // width: 400,
        },
    },
}));


const PageTroubles=()=>{
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [data, setData]=useState([]);
    const [catList, setCatList]=useState([]);
    const [selected, setSelected]=useState(-1);
    const [filterLabel, setFilterLabel]=useState();
    const [initData, setInitData]=useState();
    const [isOpen, setOpen]=useState(false);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(()=>{
        const list=[];
        axios
            .get('/category')
            .then(result=> {
                result.data.forEach(item=>list.push(item))
            })
            .catch(err => alert(err));
        setCatList(list);
    },[]);

    useEffect(() => {
        const res=[];
        axios
            .get('/troubles')
            .then(result => {
                result.data.forEach(item => {
                    res.push(item);
                });
                setData(res);
                setInitData(res);
            })
            .catch(err => alert(err));
    }, []);


    function handleClick(event, row) {
        setSelected(row);
    }

    const handleChange=(event)=>{
        const val=event.target.value;
        setFilterLabel(val);

        if (val!=='') {
            const dataF=initData.filter(item=>{
                return  item.category.catname===val;
            })
            setData(dataF);
        } else {
            setData(initData);
        }

    }

    function handleClickOpen() {
        setOpen(true)
    };

    const handleClose=()=>{
      setOpen(false);
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Paper>
                <FormGroup>
                    <TextField
                        value={filterLabel}
                        onChange={handleChange}
                        required
                        label="Категория оборудования"
                        select
                        style={{ margin: 8 }}
                        placeholder="Выбирите категорию оборудования"
                        size={"medium"}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        SelectProps={{
                            native: true,
                        }}>
                        <option value="" ></option>
                        {catList.map(option => (
                            <option key={option.id} value={option.catname}>
                                {option.catname}
                            </option>
                        ))}
                    </TextField>
                </FormGroup>
            </Paper>
            <br/>
            <Paper>
                <Button onClick={handleClickOpen} startIcon={<AddCircleOutlineOutlinedIcon/>} variant='outlined' color='primary'>Добавить неисправности</Button>
                {/*<Button startIcon={<IndeterminateCheckBoxOutlinedIcon/>} variant='outlined' color='secondary'>Удалить заявку</Button>*/}
                <InsAddDialog isOpen={isOpen} catList={catList} handleClose={handleClose}/>
            </Paper>
            <Paper>
            <TableContainer /*component={Paper}*/>
                <Table className={classes.table} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>#</TableCell>
                            <TableCell align='center'>Наименование</TableCell>
                            <TableCell align="center">Категория</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => {
                            const isSelected=row.id===selected.id;
                            return(
                                <TableRow key={row.id}
                                          hover
                                          selected={isSelected}
                                          onClick={event => handleClick(event, row)}>
                                    <TableCell align="center">{row.id}</TableCell>
                                    <TableCell component="th" scope="row" align='center'>
                                        {row.trname}
                                    </TableCell>
                                    <TableCell align="center">{row.category.catname}</TableCell>
                                </TableRow>
                            )}
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]} title='эПривет'
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            </Paper>
        </form>
    )
};

export default PageTroubles;