import React, {useState} from "react";
import {Dialog, DialogTitle} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import axios from "../../../../axios/axios";

const InsAddDialog=(props)=>{
    const [cat, setCat]=useState();
    const [category, setCategory]=useState();
    const [trname, setTrname]=useState('');
    const [errCat, setErrCat]=useState({err:false, msg:''});
    function HandleClickSave() {
        if (!trname) {
            let var1=errCat;
            var1.err=true;
            var1.msg='Не пустое';
            setErrCat(var1);
        } else
        {
            axios
                .post('/troubles',{
                    trname: trname,
                    categoryentity_id: category.id
                })
                .then()
                .catch(err=>console.log(err))
            props.handleClose();
        }
    }

    function handleChangeCat(event) {
        const val=event.target.value;
        let oCat;
        if (val) {
            oCat=props.catList.filter(item=>{
                return  item.catname===val;
            })
            setCategory(oCat[0])
            setCat(val);
        } else {
            setCategory(-1);
        }
    };


    function TrnameChange(event) {
        setTrname(event.target.value)
    };

    return(
        <div >
            <Dialog open={props.isOpen}>
                <DialogTitle>Заголовок</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        Тут будет текст
                    </DialogContentText>
                    <TextField
                        value={trname}
                        onChange={TrnameChange}
                        required={true}
                        error={errCat.err}
                        helperText={errCat.msg}
                        placeholder='Наименование неисправности'
                        autoFocus
                        style={{ margin: 8 }}
                        // placeholder="Выбирите категорию оборудования"
                        size={"medium"}
                        margin="normal"
                        label="Наименование неисправности"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        id="trname"
                        fullWidth
                    />
                    <TextField
                        value={cat}
                        onChange={handleChangeCat}
                        label="Категория оборудования"
                        select
                        style={{ margin: 8 }}
                        placeholder="Выбирите категорию оборудования"
                        size={"medium"}
                        margin="normal"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        SelectProps={{
                            native: true,
                        }}>
                        <option value="" ></option>
                        {props.catList.map(option => (
                            <option key={option.id} value={option.catname}>
                                {option.catname}
                            </option>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button  color="primary" /*type='submit'*/ onClick={HandleClickSave}>
                        Сохранить
                    </Button>
                    <Button  color="secondary" onClick={props.handleClose}>
                        Отмена
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default InsAddDialog;
