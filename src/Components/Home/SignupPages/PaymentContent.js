import React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import '../../../Css/DefaultPage.css';

const PaymentContent = () => {
    return (
        <div className='mt-5 p-3 payment-content'>
            <h2>Cancel Anytime - No Minimum Term</h2>
            <div className='default-content d-flex gap-3 align-items-center'>
                <TaskAltIcon color="primary" />
                <p className='m-0'><b>Cancel within 30 days to get a full refund </b> - Hassle Free. No questions asked.</p>
            </div>
            <div className='default-content d-flex gap-3 align-items-center'>
                <TaskAltIcon color="primary" />
                <p className='m-0'><b>No commitments </b> -  Stay on the program for as short or as long as you want. </p>
            </div>
            <div className='default-content d-flex gap-3 align-items-center'>
                <TaskAltIcon color="primary" />
                <p className='m-0'><b>No Contracts </b> -  You are not obliged to complete the program</p>
            </div>
        </div>
    );
};

export default PaymentContent;