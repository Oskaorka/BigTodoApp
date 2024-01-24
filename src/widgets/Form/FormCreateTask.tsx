import { 
    createCommentActionStart,
    createTaskActionStart,
    loadPlaningColumnStart 
} from 'app/redux/action/actionCreator';
import { LOAD_PLANING_LIST } from 'app/redux/constants';
import { useAppDispatch } from 'app/redux/store';
import { ICurrentStateTodo } from 'pages/TaskPages/ui/PlaningPage';
import { useCallback, useState } from 'react';
import Button from 'shared/ui/Button/Button';
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

const FormCreateTask = ({onClose}: any) => {
    const dispatch = useAppDispatch();

    const [newTask, setTask] = useState({
        id: (~~(Math.random()*1e8)).toString(16),
        number:'1',
        title:'',
        description:'',
        priority:'base',
        attached_files:'',
        current_state:'',
        created_at: new Date(),
        total_operating_time:'',
        expiration_time:''
    });

    

    const stateArr = [
        ICurrentStateTodo.Queue,
        ICurrentStateTodo.Development,
        ICurrentStateTodo.Done,
    ]

    const options = stateArr.map((currentState) => ({
        value: currentState,
        label: currentState
    }));

    const handleChangeForText = ({ target }:any) => {
        setTask((prevstate) => ({
            ...prevstate,
            [target.name]: target.value
        }));
    };

    const handleChange = ( {target}: any) => {
        console.log(target);
        
        setTask((prevstate) => ({
            ...prevstate,
            current_state: target.value
        }));
    };
    // const idComment = newTask.id;
    const handleSubmitUpdate = (event: React.FormEvent<HTMLFormElement & FormFields>)  => {
        event.preventDefault();
        dispatch(createTaskActionStart(newTask))
        // console.log(newTask.id);

        // console.log({[newTask.id] : []});
         
        
        // dispatch({type: LOAD_PLANING_LIST})
        // dispatch(loadPlaningColumnStart())
        onClose(false);
    }

    return ( 
        <form  
            onSubmit={handleSubmitUpdate}
            className="form" 
            autoComplete='off'
        >
            <input 
                name='title'
                type="text"
                onChange={handleChangeForText}
                value={newTask.title}
            />
            <input 
                name='description' 
                type="text"
                value={newTask.description}
                onChange={handleChangeForText}
            />
            <input 
                name='attached_files'
                type="text"
                value={newTask.attached_files}
                onChange={handleChangeForText}
            />
            <input 
                name='total_operating_time'
                type="text"
                value={newTask.total_operating_time}
                onChange={handleChangeForText}
            />
            <input 
                name='expiration_time'
                type="text"
                value={newTask.expiration_time}
                onChange={handleChangeForText}
            />
            <select
                name='current_state'
                value={newTask.current_state}
                onChange={handleChange}
            >
                <option disabled value="">
                    {'choose state...'}
                </option>
                {options.map((option) => (
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <Button children='add task' className='btn'/>
        </form>
    );
}
 
export default FormCreateTask;