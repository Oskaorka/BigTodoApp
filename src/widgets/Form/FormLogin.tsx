import { useCallback, useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { Modal } from 'widgets/Modal/ModalTask';

const FormLogin = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    // const [isOpenModal, setIsOpenModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsOpenModal((prev) => !prev);
    }, []);


    // const handleChangeForText = ({ target }:any) => {
    //     setTask((prevstate) => ({
    //         ...prevstate,
    //         [target.name]: target.value
    //     }));
    // };

    return (
        <>
            <Button onClick={onToggleModal}  className="btn btn-logIn" children="signIn"/>
            {isOpenModal && 
            <Modal
                isOpen={isOpenModal}
                onClose={onToggleModal}
                className="Modal Modal__wrapper"
            >
                <form className='Modal__wrapper-form'>
                    <label htmlFor="mail">почта</label>
                    <input
                        id="mail"
                        type="mail"
                        // onChange={handleChangeForText}
                    />
                    <label htmlFor="password">пароль</label>
                    <input id="password" type="password" />
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