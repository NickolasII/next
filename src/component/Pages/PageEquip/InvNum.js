import React from "react";
import TextField from "@material-ui/core/TextField";

const InvNum=(props)=>{
    return(
        <div>
            <TextField
                value={props.value}
                label="Инвентарный номер"
                style={{ margin: 8,  width:'99%'}}
                placeholder="Введите инвентарный номер"
                size={"medium"}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={props.OnChangeVal}
            />
        </div>
    )
};

export default InvNum;