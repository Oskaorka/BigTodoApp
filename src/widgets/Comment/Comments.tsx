import { useEffect, useState } from 'react';
import Comment from './Comment';
import './Comment.scss';
import CommentForm from 'widgets/Form/CommentForm';
import { useAppDispatch, useAppSelector } from 'app/redux/store';
import { loadCommentsStart } from 'app/redux/action/actionCreator';
import { getReplies } from 'app/utils/getReplies';
import { IComments } from 'app/redux/reducers/data';

const Comments = ({currentId}: any): any => {
    const { commentList, loading } = useAppSelector(state => state.dataList || {});
    const dispatch = useAppDispatch();
    const [currentComment, setCuerrentComment] = useState([]);
    const comments = Object.values(currentComment);
    console.log(comments);
    console.log(comments);
    
    // const getDFormBlock = document.querySelector('.form-block');
    // const dataId = getDFormBlock?.getAttribute('data-id');
    // console.log(dataId);
    // console.log(getDFormBlock);
    
    // console.log(Object.values(currentComment));
    // Object.values(currentComment).map(
    //     (apiComments:IComments) => console.log(apiComments.parentId)
        
    // );
    // Object.keys(commentList).map(e=>{
    //     console.log(e);

    // })
    

    useEffect(() => {
        // eslint-disable-next-line no-prototype-builtins
        if(commentList.hasOwnProperty(currentId)) {
            setCuerrentComment(commentList[currentId]);
        }
    },[loading])
        
    // const rootComments: IComments[] = Object.values(currentComment).filter(
    const rootComments: IComments[] = comments?.filter(
        (apiComments:IComments) => apiComments.parentId === 'null'
    );
    // console.log(rootComments);
    // console.log(comments);

    const addComment = () => {
        console.log('frfr');
        // const addComment = (text, parentId) => {
        
        // createCommentApi(text, parentId).then((comment) => {
        //     setBackendComments([comment, ...backendComments]);
        //     setActiveComment(null);
        // });
    };

    useEffect(() => {
        dispatch(loadCommentsStart())
    }, [dispatch]);
    // console.log(rootComments);

    return (
        <div className='comments'>
            <div className="comment-form-title">
                Write comment {currentId}
            </div>
            < CommentForm 
                submitLabel="Write" 
                handleSubmit={addComment} 
                currentId={currentId}
                // currentId={dataId}
                classNameForm={'comment-form'}
            />
            <div className="comments-container">
                {rootComments.map((rootComment:any) => (
                    < Comment 
                        key={rootComment.id}
                        comment={rootComment}
                        // replies={getReplies(rootComment.id,  Object.values(currentComment))}
                        replies={getReplies(rootComment.id, comments)}
                        // replies={getReplies(rootComment.id, commentList)}
                        commentList={comments}
                        currentId={currentId}
                        // currentId={dataId}
                        // tst={dataId}
                        // commentList={Object.values(currentComment)}
                        // commentList={commentList}
                    />
                ))}
            </div>
        </div> 
    );
}
 
export default Comments;