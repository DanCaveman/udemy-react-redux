import React from 'react';

const CommentDetailNew = (props) =>{
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.blogPost.authorAvatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.blogPost.authorName}
                </a>
                <div className="metadata">
                    <span className="date">{props.blogPost.timeAgo}</span>
                </div>
                <div className="text" >{props.blogPost.commentText}</div>
            </div>
        </div>

    );
};

export default CommentDetailNew;