import React from 'react';
import {useFormik} from 'formik';
import PropTypes from 'prop-types';

const initialValues =  {
    name: '',
    email: '',
    channel: ''
};

const onSubmit = (values) => {
    console.log('Form Data ', values)
};

const validate =  (values) => {
    //must return the form field -- here we are using errors 
    // object must be same as that of values
    // evey key in the errors object must return value as String
    //values.name values.email values.channel
    //errors.name errors.email errors.channel
    // errors.name ="This is field required"
    let errors = {}

    if(!values.name){
        errors.name = 'Required'
    }

    if(!values.email){
        errors.email = 'Required'
    }
    else if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)){
        errors.email = 'Invaild email format'
    }

    if(!values.channel){
        errors.channel = 'Required'
    }

    return errors
};

function Form(props) {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });
   // console.log('form values: ', formik.values);
   // console.log('form errors: ', formik.errors);
    console.log('visited field: ', formik.touched);

  return (
    <div>
      {/* Manging the from state 
      handling form submission 
      validaton error and messages  */}

      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
        <lable htmlFor='name'>{props.name}</lable>
        <input type='text' id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}></input>
        {formik.errors.name && formik.touched.name ? (<div className='error'>{formik.errors.name}</div>) : null}  
        </div>
        <div className='form-control'>
        <lable htmlFor='email'>{props.email}</lable>
        <input type='text' id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}></input>
        {formik.errors.email && formik.touched.email ? (<div className='error'>{formik.errors.email}</div>) : null}
        </div>
        <div className='form-control'>
        <lable htmlFor='channel'>{props.channel}</lable>
        <input type='text' id='channel' name='channel' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel}></input>
        {formik.errors.channel && formik.touched.channel ? (<div className='error'>{formik.errors.channel}</div>) : null}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
Form.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string.isRequired,   //to define the lable for sure 
    channel: PropTypes.string
}

Form.defaultProps = {
    name: "Set Name Here"
}
export default Form
