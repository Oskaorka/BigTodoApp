/* eslint-disable max-len */
import { IComments, ITodos } from 'app/redux/reducers/data';
import axios from 'axios';
import localStorageService from './localStorage.service';
// import { FormSignUp } from 'widgets/Form/FormRegistration';
// import { getService } from './getService';

// const { content } = await getService.get('construction');
// export async function loadList() {
export async function loadList() {
    const data = await axios.get(
        'https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/planing.json')
        .then(res => res);
    // console.log(data);
        
    return data
}
// export async function loadColumndata() {
//     const data = await axios.get(
//         'https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/planing.json')
//         .then(res => res);
//     // console.log(data);
        
//     return data
// }

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


// export async function createComment(emptyComment: IComments) {
export async function createBlockComment(emptyComment: IComments, commentId:string) {
    
    // console.log(emptyComment);
    // console.log(commentId);
    
    await axios.put(
        `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/comments/${commentId}.json`,
        // eslint-disable-next-line max-len
        // `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/comments/103066d/${commentId}.json`,
        // 'https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/comments/103066d/${commentId}.json',
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
        `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/comments/${commentBlock}/${commentId}.json`)
        .then(res => res);
    return data
}
// export async function loadData() {
//     try {
//         const  { content }  = await getService.get();
//         console.log(content);
        
//         return content
//     } catch (error) {
//         console.log(error);
//     }
// }
// export async function createTaskList(task: ITodos) {
//     console.log(task);
//     try {
//         const  content  = await getService.create(task, 'planing/');
//         console.log(content);
//         return content
//     } catch (error) {
//         console.log(error);
//     }
// }

// export async function deleteTask(payloadId:string, endPoint: string) {
//     try {
//         const { content } = await getService.removeTask(payloadId, endPoint);
//         console.log(content);
        
//         return content
//     } catch (error) {
//         console.log(error);
//     }
// }
// export async function UpdateList(payload:IDataPaylaod, endPoint: string) {
//     try {
//         const { content } = await getService.update(payload, endPoint);
//         console.log(content);
        
//         return content
//     } catch (error) {
//         console.log(error);
//     }
// }




// export async function createUser(payload:FormSignUp) {
export async function createUsers(payload:any) {
    // emptyComment: IComments,
    // commentId:string,
    // currentIdComment:string
    
    const data = await axios.put(
        // eslint-disable-next-line max-len
        // `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/users/${payload._id}/${payload}.json`);
        `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/users/${payload._id}.json`, payload);
    return data
}
export async function logInUsers() {
// export async function logInUsers(payloadId:string) {
    // emptyComment: IComments,
    // commentId:string,
    // currentIdComment:string
    // console.log(payloadId);
    
    // console.log(localStorageService.getUserId());
    const data = await axios.get(
        // eslint-disable-next-line max-len
        // `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/users/${payload._id}/${payload}.json`);
        `https://spa-todoapi-default-rtdb.europe-west1.firebasedatabase.app/users/${localStorageService.getUserId()}.json`);
        
    // console.log(data);
    
    return data
}