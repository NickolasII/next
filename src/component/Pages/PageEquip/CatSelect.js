import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const CatSelect=(props)=>{
    return (
        <div>
            <TextField
                value={props.value}
                label="Категория"
                select
                style={{ margin: 8, width:'99%' }}
                placeholder="Выбирите категорию"
                size={"medium"}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={props.OnChangeVal}
            >
                {props.Select.map(item=>(
                    <MenuItem key={item.id} value={item.catname} dense={true}>
                        {item.catname}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
};

export default CatSelect;