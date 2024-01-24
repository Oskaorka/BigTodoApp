// import { updateSuccess } from 'app/redux/action/actionCreator';
// import { deleteTaskList } from 'app/redux/action/actionCreator';
// import { loadPlaningColumnStart, loadPlaningSuccess } from 'app/redux/action/actionCreator';
// import {
// GET_PLANING_LIST,
// UPDATE_SUCCESS,
// GET_PLANING_QUEUE_LIST,
// LOAD_PLANING_LIST,
// LOAD_PLANING_SUCCESS
// } from 'app/redux/constants';
import { useAppDispatch, useAppSelector } from 'app/redux/store';
// import { ITodos } from 'pages/TaskPages/ui/PlaningPage';
import { FC, FormEvent, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Button from 'shared/ui/Button/Button';
// import Comment from 'widgets/Comment/Comment';
import Comments from 'widgets/Comment/Comments';

// type FormFields extends HTMLFormElement= {
type FormFields = {
    number?: HTMLInputElement,
    title?: HTMLInputElement,
    description?: HTMLInputElement,
    priority?: HTMLInputElement,
    attached_files?: HTMLInputElement,
    current_state?: HTMLInputElement,
    created_at?: HTMLInputElement,
    total_operating_time?: HTMLInputElement,
    expiration_time?: HTMLInputElement
  }


// const Form: FC<FormFields> = (props)  => {
const Form = ({addDispatchForm, currentId, onClose, props, dataId}: any)  => {
// const Form: FC<formItodos extends <HTMLFormElement>> = (props)  => {
    const {
        title,
        description,
        attached_files,
        created_at,
        current_state,
        expiration_time,
        number,
        id,
        priority,
        total_operating_time
    } = props;
    // console.log(props);

    // const { planingList } = useAppSelector(store => store?.dataList || {});
    // const { planingQueueList } = useAppSelector(store => store?.dataList || {});
    // const { planingDevList } = useAppSelector(store => store?.dataList || {});
    // const { planingDoneList } = useAppSelector(store => store?.dataList || {});
    // const { devEstimatesList } = useAppSelector(store => store?.dataList || {})
    const dispatch = useAppDispatch();
    // const navigate = useNavigate();

    const [newTask, setTask] = useState({
        id,
        number,
        title,
        description,
        priority,
        attached_files,
        current_state,
        created_at,
        total_operating_time,
        expiration_time
    });
    // const newData = {
    //     'id': (~~(Math.random()*1e8)).toString(16),
    //     'number': number,
    //     'title': current.title?.value,
    //     'description': current.description?.value,
    //     'priority': priority,
    //     'attached_files': current.attached_files?.value,
    //     'current_state': current_state,
    //     'created_at': new Date(),
    //     'total_operating_time': current.total_operating_time?.value,
    //     'expiration_time': current.expiration_time?.value
    // }
    // useEffect(()=> {
    //     // dispatch({type: UPDATE_SUCCESS, planingList})
    //     dispatch({type: LOAD_PLANING_LIST})
    //     // dispatch(loadPlaningSuccess())

    //     // dispatch({type: GET_PLANING_LIST})
    //     // dispatch({type: GET_PLANING_DEV_LIST})
    //     // dispatch({type: GET_PLANING_DONE_LIST})
    //     // console.log(location.pathname.slice(1));
        
    // }, [dispatch]);
    const handleChangeForText = ({ target }:any) => {
        setTask((prevstate) => ({
            ...prevstate,
            [target.name]: target.value
        }));
    };

    const handleSubmitUpdate = (event: React.FormEvent<HTMLFormElement & FormFields>)  => {
        event.preventDefault();
        dispatch(addDispatchForm({currentId, newTask}))
        onClose(false);
    }
    
    return ( 
        // <div className='form-block' data-id={dataId}>
        <div className='form-block'>
            <form  
                onSubmit={handleSubmitUpdate}
                className="form" 
                autoComplete='off'>
                <label htmlFor="title">title</label>
                <input 
                    id='title'
                    name='title'
                    type="text"
                    onChange={handleChangeForText}
                    value={newTask.title}
                />
                <label htmlFor="description">description</label>
                <input 
                    id='description'
                    name='description' 
                    type="text"
                    value={newTask.description}
                    onChange={handleChangeForText}
                />
                <label htmlFor="attached_files">attached_files</label>
                <input 
                    id='attached_files'
                    name='attached_files'
                    type="text"
                    value={newTask.attached_files}
                    onChange={handleChangeForText}
                />
                <label htmlFor="total_operating_time">total_operating_time</label>
                <input 
                    id='total_operating_time'
                    name='total_operating_time'
                    type="text"
                    value={newTask.total_operating_time}
                    onChange={handleChangeForText}

                />
                <label htmlFor="expiration_time">expiration_time</label>
                <input 
                    id='expiration_time'
                    name='expiration_time'
                    type="text"
                    value={newTask.expiration_time}
                    onChange={handleChangeForText}

                />
            
                <Button children='update task' className='btn'/>
            </form>
            {/* <span>text message</span> */}
            <Comments currentId={currentId}/>
        </div>
    );
}
 
export default Form;