import React from "react";
import Button from "@material-ui/core/Button";
import ClaimTable from "../ClaimTable";

const PageMain=()=>{
    
    return (
        <div>
            <ClaimTable/>
            <Button variant="outlined" color="primary" >
                Open form dialog
            </Button>
        </div>
    );
};

export default PageMain;