import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const ThirdPage = () => {
    return (
        <div>
            <h2>Payment Setup ($29/month)</h2>
            <label for="cardNum">Card Number <span style={{color: 'red'}}>*</span></label>
            <input 
                type="number" 
                id="cardNum" 
                name="cardNum" 
                placeholder='xxxx-xxxx-xxxx'
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                required 
            />

        </div>
    );
};

export default ThirdPage;