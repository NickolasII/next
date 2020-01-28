import React  from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import {FormGroup, makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // width: 400,
        },
    },
}));

const PageEquip=()=>{
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Paper>
                <FormGroup>
                    <TextField
                        label="Инвентарный номер"
                        style={{ margin: 8 }}
                        placeholder="Введите инвентарный номер"
                        size={"medium"}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"/>
                    <TextField
                        label="Место расположения (отдел)"
                        select
                        style={{ margin: 8 }}
                        placeholder="Выбирите отдел"
                        size={"medium"}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"/>
                    <TextField
                        label="Категория"
                        select
                        style={{ margin: 8 }}
                        placeholder="Выбирите категорию"
                        size={"medium"}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"/>
                </FormGroup>
                <Paper>
                <Button variant='outlined' color='primary'>Поиск</Button>
                <Button variant='outlined' color='secondary'>Очистить</Button>
                </Paper>
            </Paper>
            <br/>
            <Paper title='Таблица' >
                Таблица
            </Paper>
        </form>
    )
};

export default PageEquip;