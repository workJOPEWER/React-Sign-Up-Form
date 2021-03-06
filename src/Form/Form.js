import React, {useState} from 'react';
import SingUpForm from './../Form/SingUpForm';
import SignupFormSuccess from './../Form/SignupFormSuccess';

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    }

    return(
        <div>
            {!formIsSubmitted ? <SingUpForm submitForm={submitForm}/> : <SignupFormSuccess/>}
        </div>
    )
};

export default Form;