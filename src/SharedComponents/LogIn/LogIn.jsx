import React from 'react';
import { useForm } from 'react-hook-form';
import './logIn.css';
import * as constants from '../../Utils/consts';

const LogIn = props => {   
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => console.log(`Data: ${data.userName}`);

    return (
        <div className="login-container">            
            <div className="login-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="login-label">
                            {constants.USERNAME}
                        </label>
                        <input ref={register({required: true, min: 5})} name="userName" />
                        {errors.userName && <p className="login-validation">{constants.USERNAMEVALIDATION}</p>}
                    </div>
                    <div>
                        <label className="login-label">
                            {constants.PASSWORD} 
                        </label>
                        <input ref={register({required: true, min: 5})} name="passWord" />  
                        {errors.passWord && <p className="login-validation">{constants.PASSWORDVALIDATION}</p>}
                    </div>
                    <div className="login-btn-container">
                        <button className="home-btn" style={{"padding": ".5rem"}}>
                            {constants.SUBMIT}
                        </button>
                    </div>
                </form>
            </div>
            <div onClick={() => props.onClose()}>
                <i className="fas fa-arrow-circle-left"></i>
            </div>
        </div>
  );
};

export default LogIn;