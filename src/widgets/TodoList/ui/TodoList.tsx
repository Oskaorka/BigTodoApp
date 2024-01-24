import {
    createTaskActionStart,
    deleteTaskStart, 
    updateTaskStart
} from 'app/redux/action/actionCreator';
import { LOAD_PLANING_LIST } from 'app/redux/constants';
import { useAppDispatch } from 'app/redux/store';
import { ITodos } from 'pages/TaskPages/ui/PlaningPage';
import { useCallback, useRef, useState } from 'react';
import Button from 'shared/ui/Button/Button';
import Form from 'widgets/Form/Form';
import { Modal } from 'widgets/Modal/ModalTask';
interface TodoListType {
    // state?: string,
    planingList?: ITodos[]
}
interface ITodoItemProps extends ITodos {
    style?: React.CSSProperties
}

const TodoList = ({planingList}:ITodoItemProps|any) => {
    // console.log(planingList);
    
    const [currentTarget, setCurrentTarget] = useState();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const dispatch = useAppDispatch();

    const handleClickOpenModal = (e: any) => {
        setCurrentTarget(e.currentTarget.id)
        // console.log(currentTarget);
        // console.log(e.currentTarget.id);
        
        onToggleModal();
    }

    const handleDeletTask = () => {
        dispatch(deleteTaskStart(currentTarget));
        dispatch({type: LOAD_PLANING_LIST})
    }

    const onToggleModal = useCallback(() => {
        // console.log(planingList);
        setIsOpenModal((prev) => !prev);
    }, []);
    
    return ( 
        <>
            {planingList.map((e: ITodos) => 
                (
                    <div
                        key={e.id}
                        id={e.id}
                        className="task-card"
                        onClick={handleClickOpenModal}
                    >
                        {/* <div className="">{e.number}</div> */}
                        <div className="">{e.title}</div>
                        {/* <div className="">{e.description}</div> */}
                        {/* <div className="">{e.priority}</div> */}
                        {/* <div className="">{e.attached_files}</div> */}
                        {/* <div className="">{e.created_at}</div> */}
                        {/* <div className="">{e.total_operating_time}</div> */}
                        {/* <div className="">{e.expiration_time}</div> */}

                        <>
                            { currentTarget === e.id && isOpenModal &&
                                <Modal
                                    isOpen={isOpenModal}
                                    onClose={onToggleModal}>
                                    <Button 
                                        onClick={()=>handleDeletTask()}
                                        children='delete'
                                        className='btn'
                                    />
                                    <Button
                                        onClick={onToggleModal}
                                        children='X'
                                        className='btn'/>
                                    <span>{e.id}</span>
                                    <Form 
                                        addDispatchForm={updateTaskStart}
                                        // currentTarget={currentTarget}
                                        onClose={setIsOpenModal}
                                        currenId={e.id}
                                        props={e}
                                    />
                                </Modal>

                            }
                        </>
                    </div>
                )
    
            )}
        </>
    );
}
export default TodoList;