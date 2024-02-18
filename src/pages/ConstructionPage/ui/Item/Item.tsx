import { updateTaskStart } from 'app/redux/action/actionCreator';
import { useCallback, useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
dayjs.extend(customParseFormat);
dayjs.extend(utc);


// interface ItemProps {
// //   text?: any
//   text: string
// //   index?: number
//   index: number
// }

import { Draggable } from 'react-beautiful-dnd';
import Button from 'shared/ui/Button/Button';
import Form from 'widgets/Form/Form';
import { Modal } from 'widgets/Modal/ModalTask';
const ListItem = ({ item, index, deleteTask }: any) => {
    const [currentTarget, setCurrentTarget] = useState('');
    const [isOpenModal, setIsOpenModal] = useState(false);
    // console.log(currentTarget);
    
    const handleClickOpenModal = (e: any) => {
        setCurrentTarget(e.currentTarget.id)
        onToggleModal();
    }
    const onToggleModal = useCallback(() => {
        setIsOpenModal((prev) => !prev);
    }, []);

    const dateAt = dayjs(item.created_at);
    const currentDate = dayjs();
    const  differance = currentDate.diff(dateAt);

    const getDiff = dayjs.unix(differance); 
    const getDay = getDiff.day(); 
    const getHour = getDiff.hour(); 
    const getMinute = getDiff.minute(); 

    
    return (
        <Draggable draggableId={item.id} index={index}>
            {(provided) => {
                return (
                    <>
                        <div
                            id={item.id}
                            className="drag-item task-card"
                            ref={provided.innerRef}
                            onClick={handleClickOpenModal}
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            // snapshot={snapshot}
                        >
                            {/* <span>Content</span> */}
                            {/* <h4>{console.log(snapshot)}</h4> */}
                            {/* <h4>{item.id}</h4> */}
                            {/* <h4>{item.number}</h4> */}
                            {/* <h4>{item.current_state}</h4> */}
                            {/* <h4>{item.created_at}</h4> */}
                            <h4>Task  № {index+1}</h4>
                            {/* <h4>{dateAt}</h4> */}
                            {/* <h4>
                                {`time has passed 
                                ${getDay} day ${getHour} hour ${getMinute} minute`
                                }
                            </h4> */}
                            {/* <h4>{currentDate}</h4> */}
                            {/* <h4>{dates}</h4> */}
                            <h4>{item.title}</h4>
                        </div>
                        <>
                            { currentTarget === item.id && isOpenModal &&
                            <Modal
                                isOpen={isOpenModal}
                                onClose={onToggleModal}
                                className='Modal'
                            >
                                <Button 
                                    // onClick={onClick}
                                    onClick={()=> deleteTask(currentTarget)}
                                    children='delete'
                                    className='btn'
                                />
                                <Button
                                    onClick={onToggleModal}
                                    children='X'
                                    className='btn btn-close'/>
                                <span>{item.id}</span>
                                {/* <div>
                                    <div className="">{item.title}</div>
                                    <div className=""></div>
                                    <div className=""></div>
                                    <div className=""></div>
                                </div> */}
                                <Form 
                                    addDispatchForm={updateTaskStart}
                                    // currentTarget={currentTarget}
                                    onClose={setIsOpenModal}
                                    currentId={item.id}
                                    props={item}
                                    dataId={item.id}
                                />
                            </Modal>
                
                            }
                        </>
                    </>
                );
            }}
        </Draggable>
    );
};

export default ListItem;
