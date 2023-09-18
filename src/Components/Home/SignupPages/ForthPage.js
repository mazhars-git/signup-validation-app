import React from 'react';
import profile1 from '../../../../src/assets/Ellipse 6.png';
import profile2 from '../../../../src/assets/Ellipse 6 (1).png';
import pIcon from '../../../../src/assets/Group.png';

const ForthPage = () => {
    return (
        <div>
            <h3>Please select which coach you would like to work with</h3>
            <p>You have selected the Self Help Option. This means that your coach will not automatically provide feedback on your exercises. However you will be able to book an introductory coaching session with your coach and you will have the option to upgrade to receive feedback if you wish.</p>
            <div className='default-content d-flex gap-3 align-items-center'>
                <img src={profile1} style={{borderRadius: '50px'}} alt=""/>
                <div>
                    <h4>James Author</h4>
                    <p className='m-0'><b>Private video coaching – </b> option to schedule one-to-one coaching through our secure online video conferencing application</p>
                    <h4>Timezone: UK</h4>
                </div>                
            </div>
            <div className='default-content d-flex gap-3 align-items-center'>
                <img src={profile2} style={{borderRadius: '50px'}} alt=""/>
                <p className='m-0'><b>Private video coaching – </b> option to schedule one-to-one coaching through our secure online video conferencing application</p>
            </div>
            <div className='default-content d-flex gap-3 align-items-center'>
                <img src={pIcon} style={{borderRadius: '50px'}} alt=""/>
                <p className='m-0'><b>Private video coaching – </b> option to schedule one-to-one coaching through our secure online video conferencing application</p>
            </div>
        </div>
    );
};

export default ForthPage;
