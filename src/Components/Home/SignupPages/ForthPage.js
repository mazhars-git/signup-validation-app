import React from 'react';
import profile1 from '../../../../src/assets/Ellipse 6.png';
import profile2 from '../../../../src/assets/Ellipse 6 (1).png';
import pIcon from '../../../../src/assets/Group.png';

const ForthPage = () => {
    return (
        <div className="step-four-box">
            <h3>Please select which coach you would like to work with</h3>
            <p>You have selected the Self Help Option. This means that your coach will not automatically provide feedback on your exercises. However you will be able to book an introductory coaching session with your coach and you will have the option to upgrade to receive feedback if you wish.</p>
            
            <div className='box-content default-content d-flex gap-3 mb-3 align-items-start'>
                <img src={profile1} style={{borderRadius: '50px'}} alt=""/>
                <div>
                    <h4 style={{color: '#0967AF'}}>James Author</h4>
                    <p className='m-0 pb-2'>A licensed social worker, Anne began over-drinking to block out humiliation, anxiety, loss and to manage anger during a financial downfall and difficult divorce from a 25 year relationship. Anne was introduced to the world of Harm Reduction after the tragic death of her nephew from an overdose. Helping others regain hope, resilience, purpose, and navigating loss of all kinds became her passion.</p>
                    <h4>Timezone: UK</h4>
                </div>                
            </div>

            <div className='box-content default-content d-flex gap-3 mb-3 align-items-start'>
                <img src={profile2} style={{borderRadius: '50px'}} alt=""/>
                <div>
                    <h4 style={{color: '#0967AF'}}>Charlie Brown</h4>
                    <p className='m-0 pb-2'>A licensed social worker, Anne began over-drinking to block out humiliation, anxiety, loss and to manage anger during a financial downfall and difficult divorce from a 25 year relationship. Anne was introduced to the world of Harm Reduction after the tragic death of her nephew from an overdose. Helping others regain hope, resilience, purpose, and navigating loss of all kinds became her passion.</p>
                    <h4>Timezone: UK</h4>
                </div>                
            </div>

            <div className='box-content default-content d-flex gap-3 mb-3 align-items-start'>
                <img src={profile2} style={{borderRadius: '50px'}} alt=""/>
                <div>
                    <h4 style={{color: '#0967AF'}}>Nazat Fayeza</h4>
                    <p className='m-0 pb-2'>A licensed social worker, Anne began over-drinking to block out humiliation, anxiety, loss and to manage anger during a financial downfall and difficult divorce from a 25 year relationship. Anne was introduced to the world of Harm Reduction after the tragic death of her nephew from an overdose. Helping others regain hope, resilience, purpose, and navigating loss of all kinds became her passion.</p>
                    <h4>Timezone: UK</h4>
                </div>                
            </div>

            <div className='box-content default-content d-flex gap-4 ms-1 mb-2 align-items-start'>
                <img src={pIcon} style={{borderRadius: '50px'}} alt=""/>
                <div className='ms-2'>
                    <h4 style={{color: '#0967AF', fontWeight: 'bold'}}>Can't Decide?</h4>
                    <p className='m-0'>If you prefer we can assign a coach to you randomly.</p>
                </div>                
            </div>
           
        </div>
    );
};

export default ForthPage;
