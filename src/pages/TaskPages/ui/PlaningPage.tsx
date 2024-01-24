import { loadPlaningColumnStart, loadPlaningStart } from 'app/redux/action/actionCreator';
import { useAppDispatch } from 'app/redux/store';
import { ConstructionPage } from 'pages/ConstructionPage';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'shared/ui/Button/Button';
import FormCreateTask from 'widgets/Form/FormCreateTask';
import { Modal } from 'widgets/Modal/ModalTask';

export enum ICurrentStateTodo {
    Queue = 'Queue',
    Development = 'Development',
    Done = 'Done'
}

export interface ITodos {
    id: string,
    number: string,
    title: string,
    description: string,
    priority: string,
    attached_files: string,
    current_state: ICurrentStateTodo,
    created_at: string,
    total_operating_time: string,
    expiration_time: string
}

export const COLUMNS_NAMES = {
    Queue: ICurrentStateTodo.Queue,
    Development: ICurrentStateTodo.Development,
    Done: ICurrentStateTodo.Done
}

const PlaningPage = () => {
    const navigate = useNavigate();
    const [isOpenModal, setIsOpenModal] = useState(false);
    // const { planingList, planingColumn } = useAppSelector(state => state.dataList || {});
    const dispatch = useAppDispatch();
    // const listsData = Object.values(planingList);
    
    const onToggleModal = useCallback(() => {
        setIsOpenModal((prev) => !prev);
    }, []);

    const handleClick = () => {
        navigate('/');
    }

    const openModalAddTask = () => {
        setIsOpenModal(prev => !prev);
    }

    // const isEmpty = (x:any) => !Object.keys(x || {}).length;
    useEffect(() => {
        dispatch(loadPlaningStart())
        dispatch(loadPlaningColumnStart())
    }, [dispatch]);

    return (
        <>
            <div 
                key={'e.number'} 
                className='task-wrapper' 
            >
                <ConstructionPage/>
                <Button 
                    onClick={openModalAddTask}
                    children='add task'
                    className='btn btn-addTask'
                /> 
            </div>
            <Button onClick={handleClick} children='back' className='btn btn-back'/>
            <>
                { isOpenModal &&
                    <Modal
                        isOpen={isOpenModal}
                        onClose={onToggleModal}>
                        <Button
                            onClick={onToggleModal}
                            children='X'
                            className='btn btn-close'/>
                        <span>Add new task</span>

                        <FormCreateTask onClose={onToggleModal}/>
                    </Modal>
                }
            </>
        </>
    )
}

export default PlaningPage;