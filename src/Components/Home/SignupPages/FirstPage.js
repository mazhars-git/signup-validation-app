import React from 'react';
import { Formik } from 'formik';
import '../../../Css/Signup.css';

const FirstPage = () => {
    return (
        <div className=''>
            <h2 className='py-3'>Contact Information</h2>
            <Formik
                initialValues={{ firstName: '', email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >

                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form className='form-step-1' onSubmit={handleSubmit}>

                        <label for="firstName" class="form-label">First Name <span style={{ color: 'red' }}>*</span></label>
                        <input type="text" class="form-control" name='firstName' id="firstName" placeholder='First Name' required />

                        <label for="lastName" className='form-label' >Last Name <span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="text"
                            class="form-control"
                            name="lastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            placeholder='Last Name'
                        />
                        {errors.email && touched.email && errors.email} <br />

                        <label for="email" className='form-label' >Email Address <span style={{ color: 'red' }}>*</span></label>
                        <input
                            class="form-control"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder='johndoe12@gmail.com'
                        />
                        {errors.email && touched.email && errors.email} <br />
                        {/* <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder='password'
                        />
                        {errors.password && touched.password && errors.password}
                        <br /> */}
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                        <label class="form-check-label" for="invalidCheck2">
                            By checking this box, you agree to be added to our mailing list. You can opt out at any time.
                        </label>
                        <br/>
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                        <label class="form-check-label" for="invalidCheck2">
                            By Checking this box, you agree to our <a href=''>Terms of Service</a> and <a href="">Privacy Policy</a>.
                        </label>

                        <br />
                        <button type="submit" className='btn btn-primary form-control' disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}

            </Formik>
        </div>
    );
};

export default FirstPage;