import { 
    CREATE_COMMENTS_ERROR,
    CREATE_COMMENTS_RELPY_ERROR,
    CREATE_COMMENTS_RELPY_START,
    CREATE_COMMENTS_RELPY_SUCCESS,
    CREATE_COMMENTS_START,
    CREATE_COMMENTS_SUCCESS,
    DELETE_COMMENTS_ERROR,
    DELETE_COMMENTS_START,
    DELETE_COMMENTS_SUCCESS,
    LOAD_COMMENTS_ERROR,
    LOAD_COMMENTS_LIST,
    LOAD_COMMENTS_SUCCESS,
    LOAD_PLANING_COLUMN_ERROR
} from './../constants';
// import { ITodos } from 'pages/TaskPages/ui/TaskPages';
import { 
    // SET_DEV_LIST,
    // SET_PLANING_LIST,
    // SET_CONSTRUCTION_LIST,
    // SET_PLANING_QUEUE_LIST,
    // SET_PLANING_DEV_LIST,
    // SET_PLANING_DONE_LIST,
    DELETE_TASK_START,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_START,
    LOAD_PLANING_LIST,
    LOAD_PLANING_SUCCESS,
    LOAD_PLANING_ERROR,
    CREATE_TASK_ERROR,
    DELETE_TASK_ERROR,
    DELETE_TASK_SUCCESS,
    UPDATE_TASK_START,
    UPDATE_TASK_ERROR,
    UPDATE_TASK_SUCCESS,
    LOAD_PLANING_COLUMN,
    LOAD_PLANING_COLUMN_SUCCESS,
} from '../constants';
export enum ICurrentStateTodo {
    Queue = 'Queue',
    Development = 'Development',
    Done = 'Done'
}
// interface IPriorityTodo {
//     BASE: 'base',
//     SECONDARY: 'secondary'
// }
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
export interface IComments {
    id: string,
    body: string,
    created_at: string,
    parentId: string,
    username: string,
}
// interface IInitialState {
//     constructionList: ITodos[] | [],
//     planingList: ITodos[] | [],
//     planingQueueList: ITodos[] | [],
//     planingDevList: ITodos[] | [],
//     planingDoneList: ITodos[] | [],
//     devEstimatesList: ITodos[] | []
// }

// const initialState: IInitialState = {
//     constructionList: [],
//     planingList: [],
//     planingQueueList: [],
//     planingDevList: [],
//     planingDoneList: [],
//     devEstimatesList: [],
// }


interface IInitialState {
    planingList: ITodos[] | [],
    commentList: IComments[] | [],
    // commentReply: IComments[] | [],
    planingColumn?: ITodos[] | [],
    loading: boolean,
    error: null
}
const initialState: IInitialState = {
    planingList: [],
    commentList: [],
    // commentReply: [],
    planingColumn: [],
    loading: false,
    error: null
}

export interface IDataPaylaod {
    type?: string,
    payload?: ITodos| IComments | []
}
// export interface ICommentsPaylaod {
//     type?: string,
//     payload?: IComments | []
// }


// const dataList = (state = initialState, {type, payload}: IDataPaylaod) => {
const dataList = (state = initialState, {type, payload}: IDataPaylaod | any) => {
    switch (type) {
    // case SET_CONSTRUCTION_LIST:
    case LOAD_PLANING_LIST:
    case LOAD_COMMENTS_LIST:
    case LOAD_PLANING_COLUMN:    
    case CREATE_TASK_START:
    case CREATE_COMMENTS_START:
    case CREATE_COMMENTS_RELPY_START:
    case DELETE_TASK_START:
    case DELETE_COMMENTS_START:
    case UPDATE_TASK_START:
        return {
            ...state,
            loading: true
        };
        // case SET_PLANING_LIST:
    case LOAD_PLANING_SUCCESS:
        return {
            ...state,
            loading: false,
            planingList: payload
        };
    case LOAD_COMMENTS_SUCCESS:
        return {
            ...state,
            loading: false,
            commentList: payload
        };
    // case LOAD_COMMENTS_:
    //     return {
    //         ...state,
    //         loading: false,
    //         commentList: payload
    //     };
    case LOAD_PLANING_COLUMN_SUCCESS:
        return {
            ...state,
            loading: false,
            planingColumn: payload
        };
    case CREATE_TASK_SUCCESS:
    case CREATE_COMMENTS_SUCCESS:
    case CREATE_COMMENTS_RELPY_SUCCESS:
    case UPDATE_TASK_SUCCESS:
        return {
            ...state,
            // planingList: payload   //this work
            payload  //this work
        };
    case DELETE_TASK_SUCCESS:
        return {
            ...state,
            loading: false,
            
            // payload: state.planingList.filter(item => item.id !== payload)
            planingList: state.planingList.filter((item)=> item.id !== payload.id)
        };
    case DELETE_COMMENTS_SUCCESS:
        return {
            ...state,
            loading: false,
            
            // payload: state.planingList.filter(item => item.id !== payload)
            commentList: state.commentList.filter((item)=> item.id !== payload.id)
        };
    case LOAD_PLANING_ERROR:
    case LOAD_COMMENTS_ERROR:
    case LOAD_PLANING_COLUMN_ERROR:
    case CREATE_TASK_ERROR:
    case CREATE_COMMENTS_ERROR:
    case CREATE_COMMENTS_RELPY_ERROR:
    case DELETE_TASK_ERROR:
    case DELETE_COMMENTS_ERROR:
    case UPDATE_TASK_ERROR:
        return {
            ...state,
            loading: false,
            error: payload
        };
    default: return state;
    }
};

export default dataList;
// case UPDATE_SUCCESS:
//     return {
//         ...state,
//         // ...payload.newUpdate, // Update the todo item here
//         // ...payload, // Update the todo item here
//         planingList: payload, // Update the todo item here
//         // planingList: payload, // Update the todo item here
//         //   state.planingList.slice(payload.number + 1) // This takes care of the second part of the todos list
//     }