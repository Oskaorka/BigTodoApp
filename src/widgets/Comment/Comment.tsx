// eslint-disable-next-line @typescript-eslint/quotes
import { deleteCommentStart } from 'app/redux/action/actionCreator';
import { IComments } from 'app/redux/reducers/data';
import { useAppDispatch } from 'app/redux/store';
import { getReplies } from 'app/utils/getReplies';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import CommentForm from 'widgets/Form/CommentForm';


// const blockId = attribute = event.target.attributes.getNamedItem('data-id').value;
const Comment = ({comment, replies, commentList, currentId, tst}: any): any => {
    const dispatch = useAppDispatch();
    // console.log(currentId);
    // console.log(blockId);
    // console.log(comment);
    // const isReplying =
    // activeComment &&
    // activeComment.id === comment.id &&
    // activeComment.type === 'replying';
    const [isReplying, setIsReplying] = useState(false)
    // const [currentIdBlock, setCurrentId] = useState('');
    // useEffect(()=> {
    //     if(currentId)setCurrentId(currentId);
    //     console.log(currentIdBlock);
        

    // },[])
    const date = comment.createdAt;
    const commentDate =  dayjs(date).format('DD MMMM YYYY H:m:s')

    // console.log(replies);
    const replyComment = () => {
        
        // console.log('reply', e);
        // console.log(isReplying);
        // console.log(tst);
        // console.log(e.target.attributes.getNamedItem('data-id').value);
        // if(currentId === undefined) {
        //     console.log('undefined');
        //     console.log(currentIdBlock);
            
        //     setCurrentId((prevId)=> prevId)
        // }
        // console.log(currentId);
        // console.log(currentIdBlock);
        // console.log(tst);

        setIsReplying((prevstate) => !prevstate)
        
    }
    const deleteComment = (commentId: string) => {
        console.log(comment);
        
        console.log('delete', commentId);
        console.log(currentId);
        
        dispatch(deleteCommentStart({commentBlock: currentId, commentId: commentId}));
        
    }
    const editComment = (e: string) => {
        console.log('edit', e);
        
    }
    const addComment = (e: string) => {
        console.log('addComment', e);
        
    }

    return (
        <div className="comment">
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div className='comment-date'>date comment: {commentDate}</div>
                </div>
                <div className="comment-text">{comment.body}</div>
                <div className="comment-actions">
                    <div
                        className="comment-action"
                        onClick={() => replyComment()}
                    >
                        Reply
                    </div>
                    <div
                        className="comment-action"
                        onClick={() => editComment(comment.id)}
                    >
                        Edit
                    </div>
                    <div
                        className="comment-action"
                        onClick={() => deleteComment(comment.id)}
                    >
                        Delete
                    </div>
                </div>
                {isReplying && (
                    <CommentForm
                        submitLabel="Reply"
                        classNameForm={'comment-form_reply'}
                        handleSubmit={(text:string) => addComment('text')}
                        reply={comment}
                        currentId={currentId}
                    // handleSubmit={(text:string) => addComment(text, replyId)}
                    />
                )}
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map((reply:IComments) => (
                            <Comment 
                                comment={reply} 
                                key={reply.id}
                                replies={getReplies(reply.id, commentList)}
                                commentList={commentList}
                                // currentId={currentId}
                                currentId={currentId}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
} 
 
export default Comment;