import React from 'react';

const CommentDetail = (props) =>{
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.authorAvatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text" >{props.commentText}</div>
            </div>
        </div>

    );
};

export default CommentDetail;