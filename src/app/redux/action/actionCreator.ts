import { 
    // SET_PLANING_LIST,
    // SET_CONSTRUCTION_LIST,
    // SET_DEV_LIST,
    // SET_PLANING_QUEUE_LIST,
    // SET_PLANING_DEV_LIST,
    // SET_PLANING_DONE_LIST,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_START,
    LOAD_PLANING_LIST,
    LOAD_PLANING_SUCCESS,
    LOAD_PLANING_ERROR,
    DELETE_TASK_START,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_ERROR,
    UPDATE_TASK_START,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_ERROR,
    LOAD_PLANING_COLUMN,
    LOAD_PLANING_COLUMN_SUCCESS,
    LOAD_PLANING_COLUMN_ERROR,
    LOAD_COMMENTS_LIST,
    LOAD_COMMENTS_SUCCESS,
    LOAD_COMMENTS_ERROR,
    CREATE_COMMENTS_START,
    CREATE_COMMENTS_SUCCESS,
    CREATE_COMMENTS_ERROR,
    CREATE_TASK_ERROR,
    CREATE_COMMENTS_RELPY_START,
    CREATE_COMMENTS_RELPY_SUCCESS,
    CREATE_COMMENTS_RELPY_ERROR,
    DELETE_COMMENTS_START,
    DELETE_COMMENTS_SUCCESS,
    DELETE_COMMENTS_ERROR
} from '../constants';
// UPDATE_SUCCESS,
// DELETE_REQUEST,
// DELETE_SUCCESS,
// DELETE_TASK_REQUEST,
// DELETE_TASK_SUCCESS,
import { IDataPaylaod, ITodos } from '../reducers/data';

export const loadPlaningStart = () => ({
    type: LOAD_PLANING_LIST,
});
export const loadPlaningSuccess = (payload : IDataPaylaod) => ({
    type: LOAD_PLANING_SUCCESS,
    payload
});
export const loadPlaningError = (error : null) => ({
    type: LOAD_PLANING_ERROR,
    payload: error
});
export const loadPlaningColumnStart = () => ({
    type: LOAD_PLANING_COLUMN,
});
export const loadPlaningColumnSuccess = (payload : IDataPaylaod) => ({
    type: LOAD_PLANING_COLUMN_SUCCESS,
    payload
});
export const loadPlaningColumnError = (error : null) => ({
    type: LOAD_PLANING_COLUMN_ERROR,
    payload: error
});
export const createTaskActionStart = (payload : any) => ({
    type: CREATE_TASK_START,
    payload // не уверен что правильно так
});
export const createTaskListActionSucces = () => ({
    type: CREATE_TASK_SUCCESS,
});
export const createTaskError = (error: any) => ({
    type: CREATE_TASK_ERROR,
    payload: error
});

export const deleteTaskStart = (taskId: any) => ({
    type: DELETE_TASK_START,
    payload: taskId
});
export const deleteTaskSuccess = (taskId: any) => ({
    type: DELETE_TASK_SUCCESS,
    payload: taskId
});
export const deleteTaskError = (error: any) => ({
    type: DELETE_TASK_ERROR,
    payload: error
});

export const updateTaskStart = (taskInfo: any) => ({
    type: UPDATE_TASK_START,
    payload: taskInfo
});
export const updateTaskSuccess = () => ({
    type: UPDATE_TASK_SUCCESS
});
export const updateTaskError = (error: any) => ({
    type: UPDATE_TASK_ERROR,
    payload: error
});


// loads comments
export const loadCommentsStart = () => ({
    type: LOAD_COMMENTS_LIST,
});
export const loadCommentsSuccess = (payload : IDataPaylaod) => ({
    type: LOAD_COMMENTS_SUCCESS,
    payload
});
export const loadCommentsError = (error : null) => ({
    type: LOAD_COMMENTS_ERROR,
    payload: error
});


export const createCommentActionStart = (payload : any) => ({
    type: CREATE_COMMENTS_START,
    payload // не уверен что правильно так
});
export const createCommentListActionSucces = () => ({
    type: CREATE_COMMENTS_SUCCESS,
});
export const createCommentsError = (error : null) => ({
    type: CREATE_COMMENTS_ERROR,
    payload: error
});

export const createCommentReplyActionStart = (payload : any) => ({
    type: CREATE_COMMENTS_RELPY_START,
    payload // не уверен что правильно так
});
export const createCommentReplyActionSucces = () => ({
    type: CREATE_COMMENTS_RELPY_SUCCESS,
});
export const createCommentReplyError = (error : null) => ({
    type: CREATE_COMMENTS_RELPY_ERROR,
    payload: error
});



export const deleteCommentStart = (commentId: object) => ({
    type: DELETE_COMMENTS_START,
    payload: commentId
});
export const deleteCommentSuccess = (commentId: string) => ({
    type: DELETE_COMMENTS_SUCCESS,
    payload: commentId
});
export const deleteCommentError = (error: string) => ({
    type: DELETE_COMMENTS_ERROR,
    payload: error
});

// export const setPlaningList = (payload : IDataPaylaod) => ({
//     type: SET_PLANING_LIST,
//     payload
// });

// export const setPlaningQueueList = (payload : IDataPaylaod) => ({
//     type: SET_PLANING_QUEUE_LIST,
//     payload
// });
// export const setPlaningDevList = (payload : IDataPaylaod) => ({
//     type: SET_PLANING_DEV_LIST,
//     payload
// });
// export const setPlaningDoneList = (payload : IDataPaylaod) => ({
//     type: SET_PLANING_DONE_LIST,
//     payload
// });

// export const setConstructionList = (payload : IDataPaylaod) => ({
//     type: SET_CONSTRUCTION_LIST,
//     payload
// });

// export const setDevEstimsteList = (payload : IDataPaylaod) => ({
//     type: SET_DEV_LIST,
//     payload
// });
// export const deleteTaskList = (payloadID : ITodos['id']) => ({
//     // type: DELETE_REQUEST,
//     // type: DELETE_SUCCESS,
//     // type: DELETE_TASK_REQUEST,
//     type: DELETE_TASK_SUCCESS,
//     payload: payloadID // не уверен что правильно так
// });

// type: DELETE_REQUEST,
// type: DELETE_SUCCESS,
// type: DELETE_TASK_REQUEST,


// export const updateSuccess = (newUpdate: IDataPaylaod) => {
//     return {
//         type: UPDATE_SUCCESS,
//         newUpdate
//     }
// }