import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './todoAddForm.css'
export default function todoAddForm() {
    return (
        <div className="todoAddForm">
            <div className="todoAddForm-cont">
                <TextField id="outlined-basic" size="small" label="Outlined" variant="outlined" />
                <Button variant="outlined" size="medium">Outlined</Button>
            </div>
        </div>
    )
}
