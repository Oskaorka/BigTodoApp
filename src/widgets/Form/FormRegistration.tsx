import { useCallback, useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { Modal } from 'widgets/Modal/ModalTask';
import axios from 'axios';
import { createUsers } from 'app/provider/router/service/loadList';
import InputForm from './InputForm';
import { FormSignUp, useAuth } from 'app/provider/router/service/useAuth';
// import { STATUS_CODES } from 'http';

// export type FormSignUp = {
//     email: string
//     password: string
//     userName?: string,
//     // payload_id?: string
//   }
//   interface ITkokens {
//     refreshToken: string,
//     idToken: string,
//     expiresIn: number
//   }
// const TOKEN_KEY ='jwt-token';
// const REFRESH_KEY = 'jwt-refresh-token';
// const EXPIRES_KEY = 'jwt-expires';

// localId, id registr user in firebase
// export  function setTokens({refreshToken, idToken, expiresIn=3600}:ITkokens) {
//     const expiresDate = new Date().getTime() + expiresIn*1000;

//     localStorage.setItem(TOKEN_KEY, idToken);
//     localStorage.setItem(REFRESH_KEY, refreshToken);
//     localStorage.setItem(EXPIRES_KEY, String(expiresDate));
// }
const FormRegistration = () => {

    const { signUp } = useAuth();

    // re3p7qujlFTBW02PO2w2Y7tbXz32
    const [currentUser, setCurrentUser] =  useState({});
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [data, setData] = useState({
        email:'',
        password:'',
        userName: ''
    })

    
    // async function signUp ({email, password, ...rest}:FormSignUp) {
    //     const key = 'AIzaSyBo7_E3-xSwK9ATdoiXE4o9sfn3HSw7iUU';
    //     const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
    //     try {
    //         const { data } = await axios.post(url, {
    //             email,
    //             password,
    //             returnSecureToken:true
    //         })
    //         setTokens(data);
    //         await createUser({_id: data.localId, email, ...rest})
    //         console.log(data);
            
    //     } catch (error) {
    //         console.log(error);
            
    //     }
        
    //     // return data
        
    // }

    // async function createUser (data: unknown) {
    //     try {
            
    //         const content = createUsers(data)
    //         console.log(data);
    //         console.log(content);
    //         setCurrentUser(content);
    //     } catch (error) {
            
    //         console.log(error);
    //     }
        
    // }

    const onToggleModal = useCallback(() => {
        setIsOpenModal((prev) => !prev);
        setData({
            email: '',
            password: '',
            userName: ''
        })
    }, []);

    const handleChangeForText = ({ target }:any) => {
        setData((prevstate:any) => ({
            ...prevstate,
            [target.name]: target.value
        }));

    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormSignUp>) => {
        event.preventDefault();
        try {
            onToggleModal();
            signUp(data);
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    return (
        <>
            {/* <Button id='signIn' onClick={onToggleModal}  className="btn btn-logIn" children="signIn"/> */}
            <Button onClick={onToggleModal}  className="btn btn-logIn" children="signUp"/>
            {isOpenModal && 
            <Modal
                isOpen={isOpenModal}
                onClose={onToggleModal}
                className="Modal Modal__wrapper"
            >
                <form onSubmit={handleSubmit} className='Modal__wrapper-form'>
                    {/* <label htmlFor="mail">почта</label>
                    <input 
                        id="mail" 
                        type="mail" 
                        name='email'
                        placeholder='example@mail.com'
                        onChange={handleChangeForText}
                        value={data.email || ''}
                    /> */}
                    <InputForm
                        htmlFor='mail'
                        tileLabel="почта"
                        id="mail"
                        type="mail"
                        name="email"
                        placeholder="example@mail.com"
                        onChange={handleChangeForText}
                        value={data.email}
                    />
                    {/* <label htmlFor="password">пароль</label>
                        <input 
                            id="password"
                            type="password"
                            name='password'
                            placeholder='examplePassword123'
                            onChange={handleChangeForText}
                            value={data.password || ''}
                        /> */}
                    <InputForm
                        htmlFor='password'
                        tileLabel="пароль"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="examplePassword123"
                        onChange={handleChangeForText}
                        value={data.password}
                    />
                    {/* <label htmlFor="userName">Nick Name</label>
                    <input 
                        id="userName"
                        type="text"
                        name='userName'
                        placeholder='Dark Lord'
                        onChange={handleChangeForText}
                        value={data.userName || ''}
                    /> */}
                    <InputForm
                        htmlFor='userName'
                        tileLabel="Nick Name"
                        id="userName"
                        type="text"
                        name="userName"
                        placeholder="Dark Lord"
                        onChange={handleChangeForText}
                        value={data.userName}
                    />
                    <Button className='btn btn-form' children='зарегистрироваться'/>
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
 
export default FormRegistration;


// необходимо из данного фала пропробовать выдернуть регистрацию и вынести в отдельный элемент (провайдер), чтоюы не пересекаась логика файла.