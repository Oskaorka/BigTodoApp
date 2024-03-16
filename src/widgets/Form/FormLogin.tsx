// import { logInUsers } from 'app/provider/router/service/loadList';
import { useCallback, useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { Modal } from 'widgets/Modal/ModalTask';
// import { FormSignUp, setTokens } from './FormRegistration';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { FormSignUp, useAuth } from 'app/provider/router/service/useAuth';

const FormLogin = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    // const navigate = useNavigate();
    const [data, setData] = useState({
        email:'',
        password:'',
        // userName: ''
    })
    const { signIn, currentUser } = useAuth();
    // const [isOpenModal, setIsOpenModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsOpenModal((prev) => !prev);
    }, []);



    const handleChangeForText = ({ target }:any) => {
        setData((prevstate:any) => ({
            ...prevstate,
            [target.name]: target.value
        }));

    };
    // const handleChangeForText = ({ target }:any) => {
    //     setTask((prevstate) => ({
    //         ...prevstate,
    //         [target.name]: target.value
    //     }));
    // };

    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement & FormSignUp>) => {
        event.preventDefault();
        try {
            await signIn(data);
            onToggleModal();
            // navigate('/planing')

            // console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
        
    }
    return (
        <>
            <Button onClick={onToggleModal}  className="btn btn-logIn" children="signIn"/>
            {isOpenModal && 
            <Modal
                isOpen={isOpenModal}
                onClose={onToggleModal}
                className="Modal Modal__wrapper"
            >
                <form onSubmit={handleSubmit} className='Modal__wrapper-form'>
                    <label htmlFor="mail">почта</label>
                    <input 
                        id="mail" 
                        type="mail" 
                        name='email'
                        placeholder='example@mail.com'
                        onChange={handleChangeForText}
                        value={data.email || ''}
                    />
                    <label htmlFor="password">пароль</label>
                    <input 
                        id="password"
                        type="password"
                        name='password'
                        placeholder='examplePassword123'
                        onChange={handleChangeForText}
                        value={data.password || ''}
                    />
                    <Button type='submit' className='btn btn-form' children='войти'/>
                </form>
                <Button
                    onClick={onToggleModal}
                    children='X'
                    className='btn btn-close'/>
            </Modal>
            }
        </>
    );
}
 
export default FormLogin;