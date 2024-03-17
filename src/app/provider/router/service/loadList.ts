import { IComments, ITodos } from 'app/redux/reducers/data';
import axios from 'axios';
import localStorageService from './localStorage.service';

export async function loadList() {
    const data = await axios.get(
        'https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/planing.json')
        .then(res => res);
    console.log(data);
        
    return data
}

export async function createTaskList(task: ITodos, taskId:string) {
    await axios.put(
        // eslint-disable-next-line max-len
        `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/planing/${taskId}.json`,
        task);
}
export async function deleteTaskApi(taskId: string) {
    const data = await axios.delete(
        `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/planing/${taskId}.json`)
        .then(res => res);
    return data
}

export async function updateTaskApi(taskId: string, taskInfo: any) {
    // console.log(taskId, taskInfo);
    const data = await axios.put(
        `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/planing/${taskId}.json`,
        taskInfo)
        .then(res => res);
    return data
}

export async function loadComments() {
    const data = await axios.get(
        'https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/comments.json')
        .then(res => res);
    return data
}


export async function createBlockComment(emptyComment: IComments, commentId:string) {
    await axios.put(
        `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/comments/${commentId}.json`,
        emptyComment);
}
export async function createCommentReply(
    emptyComment: IComments,
    commentId:string,
    currentIdComment:string) {
    
    await axios.put(
        // eslint-disable-next-line max-len
        `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/comments/${currentIdComment}/${commentId}.json`,
        emptyComment);
}

export async function deleteComment(commentBlock: string, commentId: string) {
    console.log(commentBlock);
    console.log(commentId);
    
    const data = await axios.delete(
        // eslint-disable-next-line max-len
        `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/comments/${commentBlock}/${commentId}.json`)
        .then(res => res);
    return data
}
export async function createUsers(payload:any) {
    const data = await axios.put(
        // eslint-disable-next-line max-len
        `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/users/${payload._id}.json`, payload);
    return data
}
export async function logInUsers() {
    const data = await axios.get(
        // eslint-disable-next-line max-len
        `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/users/${localStorageService.getUserId()}.json`);
    return data
}