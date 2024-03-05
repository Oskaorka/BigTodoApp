import { CREATE_COMMENTS_RELPY_START,
    CREATE_COMMENTS_START,
    DELETE_COMMENTS_START,
    LOAD_COMMENTS_LIST,
    LOAD_PLANING_COLUMN
} from './../constants';
import {
    CREATE_TASK_START,
    LOAD_PLANING_LIST,
    DELETE_TASK_START,
    UPDATE_TASK_START,
} from '../constants';
import { takeEvery, put, call, all, fork, takeLatest, take } from 'redux-saga/effects'
import { 
    createBlockComment,
    // createComment,
    createCommentReply,
    createTaskList,
    deleteComment,
    deleteTaskApi,
    loadComments,
    // loadColumndata,
    // loadList,
    updateTaskApi
} from 'app/provider/router/service/loadList';
import { 
    loadPlaningSuccess,
    loadPlaningError,
    createTaskListActionSucces,
    createTaskActionStart,
    loadPlaningStart,
    deleteTaskSuccess,
    deleteTaskError,
    loadPlaningColumnSuccess,
    loadPlaningColumnError,
    loadPlaningColumnStart,
    loadCommentsSuccess,
    loadCommentsError,
    createCommentListActionSucces,
    createCommentReplyActionSucces,
    loadCommentsStart,
} from '../action/actionCreator';
import { IComments } from '../reducers/data';
import { getService } from 'app/provider/router/service/getService';

export enum ICurrentStateTodo {
    Queue = 'Queue',
    Development = 'Development',
    Done = 'Done'
}

// working with data planing
export function* handlePlaningData(): unknown {
    try {
        // const  res  =  yield call(loadList);
        // const  res  =  yield call(getService.get);
        const {content}: any = yield call(getService.get);
        console.log(content);
        // const  res  =  yield call(content);
        // const  res  =  yield call(content);
        yield put(loadPlaningSuccess(content))
        // console.log(res);
        
        // if(res.status === 200) {
        //     // console.log(res.data);
            
        //     yield put(loadPlaningSuccess(res.data))
        // }     
    } catch (error: any) {
        yield put(loadPlaningError(error))
    }
}

export function* handlePlaningColumn(): unknown {
    try {
        // const  res  =  yield call(loadColumndata);
        // const  res  =  yield call(getService.get);
        // const  res  =  yield call(loadList);
        const {content}: any = yield call(getService.get);
        // console.log(res);
        
        // if(res.status === 200) {
        // const listsData: any = Object.values(res.data)
        const listsData: any = Object.values(content)
        const listFilterName = (nameList:string) => listsData.filter((e:any)=>
            e.current_state === nameList
        );
        const initialColumns: object = {
            Queue: listFilterName(ICurrentStateTodo.Queue),
            Development: listFilterName(ICurrentStateTodo.Development),
            Done: listFilterName(ICurrentStateTodo.Done)
        }
        // console.log(initialColumns);
            
        return yield put(loadPlaningColumnSuccess(initialColumns))
        // return yield put(loadPlaningColumnSuccess(listsData))
        // }     
    } catch (error: any) {
        yield put(loadPlaningColumnError(error))
    }
}

export function* handleCreateTask({payload}: any): any {
    yield call(createTaskList, payload, payload.id);
    yield put(createTaskListActionSucces())
    yield put(loadPlaningColumnStart())
    return yield put(loadPlaningStart())
    // yield put(loadPlaningStart())
    // return yield put(createTaskListActionSucces())
}

// yield call(createTaskList, payload, payload.id);
// yield put(loadPlaningStart())
// return yield put(createTaskListActionSucces())
export function* handleUpdateTask({payload: {currentId, newTask}}: any): any {
    try {
        // yield console.log(payload);
        yield call(updateTaskApi, currentId, newTask)
        yield put(loadPlaningColumnStart())
        return yield put(loadPlaningStart())
    } catch (error) {
        console.log(error);
        
    }
}

export function* handleDeleteTaskStart(taskId: any): any {
    yield call(deleteTaskApi, taskId);
    yield put(loadPlaningColumnStart())
    return yield put(loadPlaningStart())
}




// working with data comments
export function* handleCommentsData(): unknown {
    try {
        const  res  =  yield call(loadComments);
        if(res.status === 200) {
            yield put(loadCommentsSuccess(res.data))
        }     
    } catch (error: any) {
        yield put(loadCommentsError(error.res.data))
    }
}

export function* handleCreateComment({payload}: any): any {
    // const emptyArr:any = Object.values(payload);
    const payloadId:any = Object.keys(payload)[0];
    // console.log(payload);
    yield call(createBlockComment, payload, payloadId);
    yield put(createCommentListActionSucces())
    return yield put(loadCommentsStart());
    // yield put(loadPlaningColumnStart())
    // return yield put(loadPlaningStart())
    // yield put(loadPlaningStart())
    // return yield put(createTaskListActionSucces())
}


export function* handleCreateCommentReply({payload}: any): any {
    const emptyArr:any = Object.values(payload)[0];
    const payloadId:any = Object.keys(payload)[0];
    const currentIdComment = payload['currentIdComment'];
    // console.log(payload);
    // console.log(payload['currentIdComment']);
    // console.log(emptyArr);
    // console.log(payloadId);
    // console.log(emptyArr);
    
    // const emptyArr:any = [{
    //     'id': '',
    //     'body': '',
    //     'username': '',
    //     'parentId': 'null',
    //     'createdAt': ''
    // }];
    // const arr = {[commentId]: []}
    // console.log(Object.keys(payload)[0]);
    // yield call(createComment, payload);
    // yield call(createCommentReply, emptyArr, payloadId);
    yield call(createCommentReply, emptyArr, payloadId, currentIdComment);
    yield put(createCommentReplyActionSucces())
    return yield put(loadCommentsStart());

    // yield put(loadPlaningColumnStart())
    // return yield put(loadPlaningStart())
    // yield put(loadPlaningStart())
    // return yield put(createTaskListActionSucces())
}

export function* handleDeleteCommentStart(payload: any): any {
    
    // if (payload) {

    const commentBlock = payload['commentBlock'] 
    const commentId = payload['commentId'] 
    // console.log(payload['commentblock']);
        
    yield call(deleteComment, commentBlock, commentId);
    // yield put(loadPlaningColumnStart())
    return yield put(loadCommentsStart())
    // }
}



// working with watchers data planing

function* watchCreateTaskSaga() {
    yield takeLatest(CREATE_TASK_START, handleCreateTask)
}

function* watchUpdateTaskSaga() {
    yield takeLatest(UPDATE_TASK_START, handleUpdateTask)
}

export function* watchPlaningSaga() {
    yield takeEvery(LOAD_PLANING_LIST, handlePlaningData);
}
export function* watchPlaningColumnSaga() {
    yield takeEvery(LOAD_PLANING_COLUMN, handlePlaningColumn);
}

export function* watchDeleteSaga() {
    while(true) {
        const {payload: taskId} = yield take(DELETE_TASK_START);
        yield call(handleDeleteTaskStart, taskId)
    }
}

// working with data comments
export function* watchCommentsSaga() {
    yield takeEvery(LOAD_COMMENTS_LIST, handleCommentsData);
}

function* watchCreateCommentSaga() {
    yield takeLatest(CREATE_COMMENTS_START, handleCreateComment)
}

function* watchCreateCommentReplySaga() {
    yield takeLatest(CREATE_COMMENTS_RELPY_START, handleCreateCommentReply)
}

export function* watchDeleteCommentSaga() {
    while(true) {
        const {payload: commentId} = yield take(DELETE_COMMENTS_START);
        yield call(handleDeleteCommentStart, commentId)
    }
}


const dataWatchSaga = [
    fork(watchPlaningSaga),
    fork(watchPlaningColumnSaga),
    fork(watchCreateTaskSaga),
    fork(watchDeleteSaga),
    fork(watchUpdateTaskSaga),
    fork(watchCommentsSaga),
    fork(watchCreateCommentSaga),
    fork(watchCreateCommentReplySaga),
    fork(watchDeleteCommentSaga),
]

export default function* rootSaga() {
    yield all([...dataWatchSaga]) 
}