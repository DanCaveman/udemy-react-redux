import React from 'react';
import UserHeader from './UserHeader';


const Post = ({post}) =>{
    return (
        <div className="item">
            <i className="large middle aligned icon user" />
            <div className="decription">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
        </div>
    );
};

export default Post;