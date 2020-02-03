import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const UnitSelect=(props)=>{
    return (
        <div>
            <TextField
                value={props.value}
                label="Место расположения (отдел)"
                select
                style={{ margin: 8, width:'99%' }}
                placeholder="Выбирите отдел"
                size={"medium"}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={props.OnChangeVal}
            >
                {props.Select.map(item=>(
                    <MenuItem key={item.id} value={item.name} dense={true}>
                        {item.name}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
};

export default UnitSelect;