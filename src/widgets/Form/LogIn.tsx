import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'shared/ui/Button/Button';
import FormLogin from './FormLogin';
import FormRegistration from './FormRegistration';

const LogIn = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === 'register' ? type : 'login'
    );
    const toggleFormType = (params:any) => {
        setFormType((prevState) =>
            prevState === 'register' ? 'login' : 'register'
        );
    };
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {formType === 'register' ? (
                        <>
                            <h3 className="mb-4">Register</h3>
                            {/* <RegisterForm /> */}
                            <p>
                                Already have account?{' '}
                                <a role="button" onClick={toggleFormType}>
                                    {' '}
                                    Sign In
                                </a>
                            </p>
                            <FormLogin/>
                            {/* <Button 
                                onClick={toggleFormType}
                                className="btn btn-logIn"
                                children="signIn"/> */}
                        </>
                    ) : (
                        <>
                            <h3 className="mb-4">Login</h3>
                            {/* <LoginForm /> */}
                            <FormRegistration/>
                            <p>
                                Dont have account?{' '}
                                <a role="button" onClick={toggleFormType}>
                                    {' '}
                                    Sign Up
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default LogIn;