import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function filterPanel() {
    return (
        <div>
            <ButtonGroup variant="outlined" size="large" aria-label="large button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </div>
    )
}
