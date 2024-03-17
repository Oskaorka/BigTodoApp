import { useCallback, useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { Modal } from 'widgets/Modal/ModalTask';
import InputForm from './InputForm';
import { FormSignUp, useAuth } from 'app/provider/router/service/useAuth';

interface HandleNameChangeInterface {
    target: HTMLInputElement;
  }
  
const FormRegistration = () => {
    const { signUp } = useAuth();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [data, setData] = useState({
        email:'',
        password:'',
        userName: ''
    })
    // type ReactInput = React.InputHTMLAttributes<HTMLInputElement>;
    // type InputArgs = IInputForm & Omit<ReactInput, keyof IInputForm >

    const onToggleModal = useCallback(() => {
        setIsOpenModal((prev) => !prev);
        setData({
            email: '',
            password: '',
            userName: ''
        })
    }, []);

    const handleChangeForText = ({target}:HandleNameChangeInterface)  => {
        setData((prevstate) => ({
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
            <Button onClick={onToggleModal}  className="btn btn-logIn" children="signUp"/>
            {isOpenModal && 
            <Modal
                isOpen={isOpenModal}
                onClose={onToggleModal}
                className="Modal Modal__wrapper"
            >
                <form onSubmit={handleSubmit} className='Modal__wrapper-form'>
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