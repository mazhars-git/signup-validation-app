import React from 'react';
import '../../../Css/DefaultPage.css';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const DefaultPage = () => {
    return (
        <div className='bg-primary-subtle default-pg-box'>
            <div className='default-pg p-4 mr-2'>
                <h1>Self Help Basic ($29/month)</h1>
                <h2>Alcohol Program</h2>
                <h3>Here's what you get</h3>
                <div className='default-content d-flex gap-3 align-items-center'>
                    <TaskAltIcon color="primary" />
                    <p className='m-0'><b>Structured online program</b> with 8 comprehensive modules and over 50 thought-provoking exercises</p>
                </div>
                <div className='default-content d-flex gap-3 align-items-center'>
                    <TaskAltIcon color="primary" />
                    <p className='m-0'><b>Developed by Dr. Stanton Peele,</b> the world leading authority on non-12 step addiction recovery</p>
                </div>
                <div className='default-content d-flex gap-3 align-items-center'>
                    <TaskAltIcon color="primary" />
                    <p className='m-0'><b>Private video coaching – </b> option to schedule one-to-one coaching through our secure online video conferencing application</p>
                </div>
                <div className='default-content d-flex gap-3 align-items-center'>
                    <TaskAltIcon color="primary" />
                    <p className='m-0'><b>Life Story Journaling - </b> reflect on the journey that you have travelled through life to bring you to where you are today</p>
                </div>
                <div className='default-content d-flex gap-3 align-items-center'>
                    <TaskAltIcon color="primary" />
                    <p className='m-0'><b>Risk-Free 30 Day Trial </b> to try the ENTIRE program so you can decide for yourself if it is for you.</p>
                </div>
            </div>
        </div>
    );
};

export default DefaultPage;