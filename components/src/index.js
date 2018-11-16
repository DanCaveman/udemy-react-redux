import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import CommentDetailNew from './CommentDetailNew';
import ApprovalCard from './ApprovalCard';

const App = () => {
    var samPost={
        authorName : "Sam",
        timeAgo : "Today at 4:45PM",
        commentText : "Nice blog post!",
        authorAvatar : faker.image.avatar()
    };
    var janePost={
        authorName : "Sam",
        timeAgo : "Today at 4:45PM",
        commentText : "Nice blog post!",
        authorAvatar : faker.image.avatar()
    };var alexPost={
        authorName : "Sam",
        timeAgo : "Today at 4:45PM",
        commentText : "Nice blog post!",
        authorAvatar : faker.image.avatar()
    };
    return (        
        <div className="ui container comments">
            <ApprovalCard >
                <CommentDetailNew blogPost={samPost} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetailNew blogPost={janePost} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetailNew blogPost={alexPost} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Dan"
                    timeAgo="Today right now!"
                    commentText="combining two different ways"
                    authorAvatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));