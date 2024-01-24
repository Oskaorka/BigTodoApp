import { IComments } from 'app/redux/reducers/data';

export const getReplies = (commentId: string, comments:IComments[]) => {
    return comments.filter((apiComment :IComments) => apiComment.parentId === commentId).sort(
        (a: IComments , b: IComments) => 
            new Date (a.created_at).getTime() -  new Date(b.created_at).getTime()
    );
}