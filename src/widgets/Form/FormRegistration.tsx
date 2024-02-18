import { useCallback, useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { Modal } from 'widgets/Modal/ModalTask';
import axios from 'axios';

type FormSignUp = {
    email?: string,
    password?: string,
  }
  interface ITkokens {
    refreshToken: string,
    idToken: string,
    expiresIn: string
  }

const FormRegistration = () => {

    const TOKEN_KEY ='jwt-token';
    const REFRESH_KEY = 'jwt-refresh-token';
    const EXPIRES_KEY = 'jwt-expires';

    function setTokens({refreshToken, idToken, expiresIn}:ITkokens) {
        // localId, id registr user in firebase
        const expiresDate = new Date().getTime() + Number(expiresIn)*1000;

        localStorage.setItem(TOKEN_KEY, idToken);
        localStorage.setItem(REFRESH_KEY, refreshToken);
        localStorage.setItem(EXPIRES_KEY, String(expiresDate));
    }

    // re3p7qujlFTBW02PO2w2Y7tbXz32

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [data, setData] = useState({
        email:'',
        password:''
    })

    
    async function signUp ({email, password}:FormSignUp) {
        const key = 'AIzaSyBo7_E3-xSwK9ATdoiXE4o9sfn3HSw7iUU';
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
        const { data } = await axios.post(url, {
            email,
            password,
            returnSecureToken:true
        })
        setTokens(data);
        return data
        // console.log(data);
        
    }

    const onToggleModal = useCallback(() => {
        setIsOpenModal((prev) => !prev);
        setData({
            email:'',
            password:''
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
        onToggleModal();
        console.log(data);
        signUp(data);
        
    }

    return (
        <>
            <Button onClick={onToggleModal}  className="btn btn-logIn" children="signUp"/>
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