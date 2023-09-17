import React from 'react';
import '../../../Css/Signup.css';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};


const FirstPage = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    //check box validation

    return (
        <div className='signup-content'>
            <h2 className='py-4'>Contact Information</h2>
            <form className='signup-form' onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name <span style={{ color: 'red' }}>*</span></label>
                <input
                    className='form-control'
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    placeholder='John'
                />
                {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

                <label htmlFor="lastName">Last Name <span style={{ color: 'red' }}>*</span></label>
                <input
                    className='form-control'
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    placeholder='Doe'
                />
                {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

                <label htmlFor="email">Email Address <span style={{ color: 'red' }}>*</span></label>
                <input
                    className='form-control'
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder='johndoe12@gmail.com'
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}


                <div className="form-check p-0 d-flex">
                    <input
                        type="checkbox"
                        name="selectCheckbox"
                        id="selectCheckbox"
                        required
                    />
                    <label htmlFor="selectCheckbox" className="form-check-label ms-3">
                        By checking this box, you agree to be added to our mailing list. You can opt out at any time.
                    </label>
                </div>

                <div className="form-check p-0 d-flex">
                    <input
                        type="checkbox"
                        name="conditionCheckbox"
                        id="conditionCheckbox"
                        required
                    />
                    <label htmlFor="conditionCheckbox" className="form-check-label ms-3">
                        By Checking this box, you agree to our <a href="/">Terms of Service</a> and <a href="">Privacy Policy</a>.
                    </label>
                </div>
                <button className='form-control btn btn-primary' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FirstPage;