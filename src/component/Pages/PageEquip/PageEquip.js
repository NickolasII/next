import React, {useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper";
import {FormGroup, makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from "../../../axios/axios";
import InvNum from "./InvNum";
import UnitSelect from "./UnitSelect";
import CatSelect from "./CatSelect";
import EquipTable from "./EquipTable";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // width: 400,
        },
        '& .MuiTableCell-root':{
            border: '1px solid rgba(224, 224, 224, 1)'
        }
    },
}));

const PageEquip=()=>{
    const classes = useStyles();
    const [equipList, setEquipList]=useState([]);
    const [initEquipList, setInitEquipList]=useState([]);
    const [unitList, setUnitList]=useState([]);
    const [catList, setCatList]=useState([]);
    const [invNum, setInvNum]=useState('');
    const [catSelect, setCatSelect]=useState('');
    const [unitSelect, setUnitSelect]=useState('');


    useEffect(()=>{
        const res=[];
        axios
            .get('/equipment')
            .then(result => {
                result.data.forEach(item => {
                    res.push(item);
                });
                setEquipList(res);
                setInitEquipList(res);
            })
            .catch(err => alert(err));
    },[]);

    useEffect(() => {
        const res=[];
        axios
            .get('/units')
            .then(result => {
                result.data.forEach(item => {
                    res.push(item);
                });
                setUnitList(res);
            })
            .catch(err => alert(err));
    }, []);

    useEffect(()=>{
        const res=[];
        axios
            .get('/category')
            .then(result => {
                result.data.forEach(item => {
                    res.push(item);
                });
                setCatList(res);
            })
            .catch(err => alert(err));
    },[]);


    const FilterChange=()=>{
        let filteredEquip=[];
        filteredEquip=initEquipList
            .filter(item=>{
                if (invNum==='') {
                    return true;
                } else {
                    return item.sernum.toString().includes(invNum);
                }
            })
            .filter(item=>{
                if (unitSelect==='') {
                    return true;
                } else {
                    return item.unit.name===unitSelect;
                }
            })
            .filter(item=>{
                if (catSelect==='') {
                    return true;
                } else {
                    return item.category.catname===catSelect;
                }
            });
        console.log(catSelect);
        setEquipList(filteredEquip);
    };

    const OnChangeInv=(event)=>{
        setInvNum(event.target.value);
        // FilterChange();
    };

    const OnCatSelect=(event)=>{
        setCatSelect(event.target.value);
        // FilterChange()
    };

    const OnUnitSelect=(event)=>{
        setUnitSelect(event.target.value);
        // FilterChange()
    };

    function ClearClick() {
        setInvNum('');
        setUnitSelect('');
        setCatSelect('');
        setEquipList(initEquipList);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Paper>
                <FormGroup>
                    <InvNum OnChangeVal={OnChangeInv} value={invNum}/>
                    <UnitSelect
                        OnChangeVal={OnUnitSelect}
                        value={unitSelect}
                        Select={unitList}
                    />
                    <CatSelect
                        OnChangeVal={OnCatSelect}
                        value={catSelect}
                        Select={catList}
                    />
                </FormGroup>
                <Paper>
                <Button variant='outlined' color='primary' onClick={FilterChange}>Поиск</Button>
                <Button variant='outlined' color='secondary' onClick={ClearClick}>Очистить</Button>
                </Paper>
            </Paper>
            <br/>
            <Paper title='Таблица' >
                <EquipTable value={equipList}/>
            </Paper>
        </form>
    )
};

export default PageEquip;