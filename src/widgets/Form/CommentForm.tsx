/* eslint-disable no-prototype-builtins */
import { useAuth } from 'app/provider/router/service/useAuth';
import { 
    createCommentActionStart,
    createCommentReplyActionStart,
    // loadCommentsStart
} from 'app/redux/action/actionCreator';
// import { IComments } from 'app/redux/reducers/data';
import { useAppDispatch, useAppSelector } from 'app/redux/store';
import { useState } from 'react';

const CommentForm = ({
    // handleSubmit,
    submitLabel,
    hasCancelButton = false,
    handleCancel,
    // initialText = '',
    currentId,
    classNameForm,
    reply
}: any) => {
    const dispatch = useAppDispatch();
    // const [text, setText] = useState(initialText);
    const {currentUser}:any = useAuth();
    console.log(currentUser.userName);
    
    // const [currentIdBlock, setCurrentId] = useState(currentId);
    // const [text, setText] = useState(initialText);
    // const isTextareaDisabled = text.length === 0;
    const [comment, setComment] = useState({
        // id: (~~(Math.random()*1e8)).toString(16),
        id: currentId,
        body: '',
        username: currentUser.userName,
        // parentId: 'null',
        parentId: 'null',
        createdAt: new Date(),
    });

    // useEffect(()=>{
    //     dispatch(loadCommentsStart())
    // },[dispatch])
    const handleChangeForText = ({target} :any) => {
        // console.log(target.value);
        // console.log(reply.id);
        // console.log(reply);
        // console.log(currentId);
        // console.log(currentIdBlock);
        console.log(currentUser);
        
        if (reply && currentId) {
            setComment((prevstate:any) => ({
                ...prevstate,
                // [target.name]: target.value,
                parentId: reply.id
            }));
            // if(currentId){
            // setCurrentId((prevId:string) => prevId)
            // }

        }

        setComment((prevstate:any) => ({
            ...prevstate,
            [target.name]: target.value
        }));
        if(commentList.hasOwnProperty(currentId)) {
            setComment((prevstate:any) => ({
                ...prevstate,
                id:(~~(Math.random()*1e8)).toString(16),
                [target.name]: target.value
            }));

        }
        // console.log(comment.body);
        // setText((prevstate:any) => ({
        //     ...prevstate,
        //     [target.name]: target.value
        // }));
    };

    const { commentList } = useAppSelector(state => state.dataList || {});
    // const dispatch = useAppDispatch();
    // const [currentComment, setCuerrentComment] = useState([]);

    // useEffect(() => {
    //     // eslint-disable-next-line no-prototype-builtins, no-prototype-builtins
    // },[loading])
    // if(commentList.hasOwnProperty(currentId)) {
    //     // console.log(commentList[currentId].length);
    //     // console.log(commentList[currentId].size);
    //     console.log(Object.values(commentList[currentId]).length);
    //     // console.log(commentList);
    // }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // handleSubmit(text);
        // setText('');
        // if()
        // setComment((prevstate:any) => ({
        //     id: (~~(Math.random()*1e8)).toString(16),
        //     body: '',
        //     username: prevstate.username,
        //     parentId: prevstate.parentId,
        //     createdAt: prevstate.createAd
        // }));
        // console.log('reply test');
        
        if(commentList.hasOwnProperty(currentId)) {
            console.log('has');
            setComment((prevstate:any) => ({
                ...prevstate,
                id: (~~(Math.random()*1e8)).toString(16),
                body: ''
            }));

            // const indexArr = Object.values(commentList[currentId]).length;
            // console.log(indexArr);
            // console.log(indexArr);
            // setComment((prevstate:any) => ({
            //     id: (~~(Math.random()*1e8)).toString(16),
            //     body: '',
            //     username: prevstate.username,
            //     parentId: reply.id,
            //     createdAt: prevstate.createAd
            // }));
            
            // console.log(commentList[currentId].length);
            //     // console.log(commentList);
            //     dispatch(createCommentActionStart(comment))
            
            // dispatch(createCommentActionStart({[(~~(Math.random()*1e8)).toString(16)]:comment}))
            //     // setCuerrentComment(commentList[currentId]);
            //     // dispatch(createCommentActionStart({[currentId]:comment}))
            // return dispatch(createCommentActionStart({[(~~(Math.random()*1e8)).toString(16)]:comment}))
            // dispatch(createCommentActionStart({[(~~(Math.random()*1e8)).toString(16)]:comment}))
            return dispatch(createCommentReplyActionStart(
                {[comment.id]:comment, currentIdComment: currentId},
                // {[(~~(Math.random()*1e8)).toString(16)]:comment, currentIdComment: currentId},
            ))
            // dispatch(loadCommentsStart())
        }
        // dispatch(createCommentActionStart({comment}))
        // if(currentId === 'undefined' && currentIdBlock) {
        //     dispatch(createCommentActionStart({[currentIdBlock]:comment}))

        // }
        dispatch(createCommentActionStart({[currentId]:comment}))
        // dispatch(loadCommentsStart())
    };
    return ( 
        <>
            <form className={classNameForm} onSubmit={onSubmit}>
                <textarea
                    // cols={40}
                    // rows={40}
                    id='comment'
                    name='body'
                    className="comment-form-textarea"
                    value={comment.body}
                    onChange={handleChangeForText}
                    // value={text}
                />
                {/* <button className="comment-form-button" disabled={isTextareaDisabled}> */}
                <button className="comment-form-button" >
                    {submitLabel}
                </button>
                {hasCancelButton && (
                    <button
                        type="button"
                        className="comment-form-button comment-form-cancel-button"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                )}
            </form>
        </>
    );
}
 
export default CommentForm;