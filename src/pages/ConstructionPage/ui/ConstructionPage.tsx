/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCallback, useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './Item/sragList.scss';
import DraggableElement from './Item/DraggableElement';
import { ItemType } from '../type';
import { useAppDispatch, useAppSelector} from 'app/redux/store';
import { deleteTaskStart, updateTaskStart } from 'app/redux/action/actionCreator';
import { useNavigate } from 'react-router-dom';

export const ConstructionPage = () => {
    const { planingColumn } = useAppSelector(state => state.dataList || {});
    const dispatch = useAppDispatch();

    const [elements, setElements] = useState({});
    const lists = ['Queue', 'Development', 'Done'];

    const isEmpty = (x:any) => !Object.keys(x || {}).length;
  
    const removeFromList = (list: ItemType[], index: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(index, 1);
        return [removed, result];
    };
  
    const addToList = useCallback((list: ItemType[], index: number, element: any) => {
        
        const result = Array.from(list);
        result.splice(index, 0, element);
        return result;
    }, []);


    const [newTask, setTask] = useState({
        id:'',
        number:'',
        title:'',
        description:'',
        priority:'',
        attached_files:'',
        current_state:'',
        created_at:'',
        total_operating_time:'',
        expiration_time:''
    });
    const [currentId, setCurrentId] = useState('');


    const onDragEnd = useCallback(

        (result: DropResult) => {
        // ({result:, source, destination,}: DropResult) => {
            // console.log(result);
            if (!result.destination) {
                return;
            }
            
            // const listCopy: typeof elements = { ...elements };
            const listCopy: typeof planingColumn = { ...elements };
            // if(listCopy &&  Object.keys(listCopy).length !== 0) {
           
                
            //@ts-ignore
            const sourceList = listCopy?.[result.source.droppableId];
                
            const [removedElement, newSourceList]: any = removeFromList(
                sourceList,
                result.source.index
            );
                    
            //@ts-ignore
            listCopy[result.source.droppableId] = newSourceList;
            //@ts-ignore
            const destinationList = listCopy[result.destination.droppableId];
            //@ts-ignore
            listCopy[result.destination.droppableId] = addToList(
                destinationList,
                result.destination.index,
                removedElement
            );
            const currentId = result.draggableId;
            const current_state = result.destination.droppableId;
            
            setCurrentId(currentId);
            setTask(removedElement);
            setTask((prevState): any=>({...prevState, current_state}))
            // console.log(listCopy);;'
        },
        [elements, addToList]
    );

    useEffect(() => {
        if(currentId.length !==0) {
            dispatch(updateTaskStart({currentId, newTask} ));
        }
    },[newTask, currentId, dispatch, elements]);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    const handleDeletTask = (currentTarget: string) => {
        dispatch(deleteTaskStart(currentTarget));
    }
    
    useEffect(() => {
        if(!isEmpty(planingColumn)){
            setElements(planingColumn);
        }
    },[planingColumn])

    return (
        !isEmpty(planingColumn)?
            <div>
                <div className="container">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className="list-grid">
                            {lists.map((listKey, index) => (
                                <DraggableElement
                                //@ts-ignore
                                    elements={elements[listKey]}
                                    key={listKey + index}
                                    prefix={listKey}
                                    deleteTask={handleDeletTask}
                                />
                            ))}
                        </div>
                    </DragDropContext>
                </div>
            </div>:<div className="">loaded...</div>

    );
}
 
export default ConstructionPage;