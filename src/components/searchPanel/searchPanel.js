import React from 'react'
import TextField from '@mui/material/TextField';
import './searchPanel.css'

export default function searchPanel() {
    return (
        <div className='search-panel'>
            <TextField id="outlined-basic" size="small" label="Outlined" variant="outlined" />
        </div>
    )
}
