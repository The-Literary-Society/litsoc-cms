import React from 'react'
import images from '../../constants/images'
import { FaRegMessage, FaPencil } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import CommentForm from './CommentForm';

const Comment = ({ comment, loggedUserId, affectedComment, setAffectedComment, addComment, parentId = null, updateComment, deleteComment, replies }) => {
    const isUserLogged = Boolean(loggedUserId);
    const commentBelongsToUser = loggedUserId === comment.user._id;

    const isReplying = affectedComment && affectedComment.type === 'replying' && affectedComment._id === comment._id;
    const repliedCommentId = parentId ? parentId : comment._id;
    const replyOnUserId = comment.user._id;

    const isEditing = affectedComment && affectedComment.type === 'editing' && affectedComment._id === comment._id;

    return (
        <div className='flex flex-nowrap items-start gap-x-3 bg-[#fff2e4] p-3 rounded-lg'>
            <img src={images.Man} alt="person profile" className='w-9 h-9 object-cover rounded-full' />
            <div className='flex-1 flex flex-col'>
                <h5 className='font-bold text-amber-900 text-xs lg:text-sm'>{comment.user.name}</h5>
                <span className='text-xs text-amber-700'>
                    {new Date(comment.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: '2-digit'
                    })}
                </span>
                {!isEditing && (
                    <p className='font-opensans text-amber-900 mt-[10px]'>{comment.desc}</p>
                )}

                {isEditing && (
                    <CommentForm btnLabel="Update" formSubmitHandler={(value) => updateComment(value, comment._id)}
                        formCancelHandler={() => setAffectedComment(null)}
                        initialText={comment.desc}
                    />
                )}
                <div className='flex items-center gap-x-3 text-amber-700 font-roboto text-sm mt-3 mb-3'>
                    {isUserLogged && (

                        <button
                            onClick={() => setAffectedComment({ type: 'replying', _id: comment._id })}
                            className='flex items-center space-x-2'>
                            <FaRegMessage className='w-4 h-auto' />
                            <span>Reply</span>
                        </button>
                    )}
                    {commentBelongsToUser && (
                        <>
                            <button
                                className='flex items-center space-x-2'
                                onClick={() =>
                                    setAffectedComment({ type: "editing", _id: comment._id })
                                }
                            >
                                <FaPencil className='w-4 h-auto' />
                                <span>Edit</span>
                            </button>
                            <button className='flex items-center space-x-2' onClick={() => deleteComment(comment._id)}>
                                <MdDeleteOutline className='w-4 h-auto' />
                                <span>Delete</span>
                            </button>
                        </>
                    )}
                </div>
                {isReplying &&
                    <CommentForm
                        btnLabel={"Reply"}
                        formSubmitHandler={(value) => addComment(value, repliedCommentId, replyOnUserId)
                        }
                        formCancelHandler={() => setAffectedComment(null)}
                    />
                }
                {replies.length > 0 &&(
                    <div>
                        {replies.map((reply) => (
                            <Comment
                                key={reply._id}
                                comment={reply}
                                loggedUserId={loggedUserId}
                                affectedComment={affectedComment}
                                setAffectedComment={setAffectedComment}
                                addComment={addComment}
                                updateComment={updateComment}
                                deleteComment={deleteComment}
                                replies={[]}
                                parentId={comment._id}
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}

export default Comment