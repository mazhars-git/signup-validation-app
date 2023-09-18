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
            <h2 className='py-3'>Payment Setup ($29/month)</h2>
            <label for="cardNum">Card Number <span style={{color: 'red'}}>*</span></label>
            <input 
                className='form-control'
                type="number" 
                id="cardNum" 
                name="cardNum" 
                placeholder='xxxx-xxxx-xxxx'
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                required 
            />
            <div className='d-flex justify-content-between'>
                <div>
                    <label for="month">Expiry Month<span style={{color: 'red'}}>*</span></label>
                    <select className='form-control'>
                        <option value="1" key="1">1</option>
                        <option value="2" key="2">2</option>
                        <option value="3" key="3">3</option>
                        <option value="4" key="4">4</option>
                        <option value="5" key="5">5</option>
                        <option value="6" key="6">6</option>
                        <option value="7" key="7">7</option>
                    </select>
                </div>
                <div>
                    <label for="month">Expiry Year<span style={{color: 'red'}}>*</span></label>
                    <select className='form-control'>
                        <option value="2023" key="1">2023</option>
                        <option value="2024" key="2">2024</option>
                        <option value="2025" key="3">2025</option>
                        <option value="2026" key="4">2026</option>
                        <option value="2027" key="5">2027</option>
                        <option value="2028" key="6">2028</option>
                        <option value="2029" key="7">2029</option>
                    </select>
                </div>
                <div>
                    <label for="month">CVV<span style={{color: 'red'}}>*</span></label>
                    <select className='form-control'>
                        <option value="1" key="1">222</option>
                        <option value="2" key="2">333</option>
                        <option value="3" key="3">323</option>
                        <option value="4" key="4">444</option>
                        <option value="5" key="5">555</option>
                        <option value="6" key="6">666</option>
                        <option value="7" key="7">744</option>
                    </select>
                </div>
            </div>
            
           
                

        </div>
    );
};

export default ThirdPage;