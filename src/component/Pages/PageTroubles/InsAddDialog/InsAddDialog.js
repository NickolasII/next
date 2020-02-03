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
    const [category, setCategory]=useState(-1);
    const [trname, setTrname]=useState('');
    const [errName, setErrName]=useState({err:false, msg:''});
    const [errCat, setErrCat]=useState({err:false, msg:''});

    const Validate=()=>{
        if (!trname) {
            let var1=errName;
            var1.err=true;
            var1.msg='Не может быть пустое';
            setErrName(var1);
        } else {
            setErrName({err:false, msg:''});
        }
        if (!cat) {
            let varErr=errCat;
            varErr.err=true;
            varErr.msg='Нужно выбрать категорию';
            setErrCat(varErr);
        } else {
            setErrCat({err:false, msg:''});
        }
    }

    function HandleClickSave() {
        Validate();
        if (errCat.err | errName.err) {
            return;
        }

        axios
            .post('/troubles',{
                trname: trname,
                categoryentity_id: category.id
            })
            .then(res=>{
                let d=res.data;
                d.category=category;
                console.log(d)
                props.setData([...props.data, res.data]);
            })
            .catch(err=>console.log(err));
        CloseClick();
    }

    function handleChangeCat(event) {
        const val=event.target.value;
        let oCat;
        if (val) {
            oCat=props.catList.filter(item=>{
                return  item.catname===val;
            })
            setCategory(oCat[0])
        } else {
            setCategory(-1);
        }
        setCat(val);
    };


    function TrnameChange(event) {
        setTrname(event.target.value)
    };

    function CloseClick() {
        setTrname('');
        setCategory(-1);
        setCat('')
        setErrName({err:false, msg:''});
        setErrCat({err:false, msg:''});
        props.handleClose();
    }

    return(
        <div>
            <Dialog open={props.isOpen}>
                <DialogTitle>Заголовок</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        {/*Тут будет текст*/}
                    </DialogContentText>
                    <TextField
                        value={trname}
                        onChange={TrnameChange}
                        required={true}
                        error={errName.err}
                        helperText={errName.msg}
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
                        required={true}
                        error={errCat.err}
                        helperText={errCat.msg}
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
                    <Button  color="primary" type='submit' onClick={HandleClickSave} href={'#'}>
                        Сохранить
                    </Button>
                    <Button  color="secondary" onClick={CloseClick}>
                        Отмена
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default InsAddDialog;

